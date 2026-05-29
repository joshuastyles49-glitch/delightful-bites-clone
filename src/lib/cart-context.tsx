import { createContext, useContext, useState, type ReactNode } from "react";
import type { MenuItem } from "./menu";

type CartItem = MenuItem & { qty: number };
type CartCtx = {
  items: CartItem[];
  add: (i: MenuItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = (i: MenuItem) => {
    setItems((prev) => {
      const found = prev.find((p) => p.id === i.id);
      if (found) return prev.map((p) => (p.id === i.id ? { ...p, qty: p.qty + 1 } : p));
      return [...prev, { ...i, qty: 1 }];
    });
    setOpen(true);
  };
  const remove = (id: string) => setItems((p) => p.filter((i) => i.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems((p) => (qty <= 0 ? p.filter((i) => i.id !== id) : p.map((i) => (i.id === id ? { ...i, qty } : i))));
  const clear = () => setItems([]);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, count, total, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("CartProvider missing");
  return c;
};
