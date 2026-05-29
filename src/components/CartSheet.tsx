import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart-context";
import { Minus, Plus, Trash2, ShoppingBag, Truck, Store } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type Mode = "delivery" | "takeaway";

export function CartSheet() {
  const { items, open, setOpen, setQty, remove, total, clear } = useCart();
  const [mode, setMode] = useState<Mode>("delivery");
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(80),
    phone: z.string().trim().regex(/^[0-9+\-\s]{10,15}$/, "Enter a valid phone number"),
    address: mode === "delivery"
      ? z.string().trim().min(10, "Address must be at least 10 characters").max(250)
      : z.string().optional(),
    notes: z.string().max(300).optional(),
  });

  const confirmOrder = () => {
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success(`Order confirmed — ${mode}!`, {
      description: `Thanks ${form.name.split(" ")[0]}! Rs. ${total} • We'll call ${form.phone} shortly.`,
    });
    clear();
    setForm({ name: "", phone: "", address: "", notes: "" });
    setCheckoutOpen(false);
    setOpen(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex flex-col w-full sm:max-w-md bg-cream">
          <SheetHeader>
            <SheetTitle className="font-display text-3xl">Your Cart</SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {items.length === 0 ? (
              <div className="text-center text-muted-foreground py-16">
                <ShoppingBag className="mx-auto mb-3 opacity-40" size={48} />
                Your cart is empty
              </div>
            ) : (
              items.map((i) => (
                <div key={i.id} className="flex gap-3 p-3 rounded-2xl bg-card shadow-sm float-hover">
                  <img src={i.image} alt={i.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{i.name}</div>
                    <div className="text-xs text-muted-foreground">Rs. {i.price}</div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <Button size="icon" variant="outline" className="h-7 w-7 btn-glow" onClick={() => setQty(i.id, i.qty - 1)}>
                        <Minus size={12} />
                      </Button>
                      <span className="text-sm w-6 text-center">{i.qty}</span>
                      <Button size="icon" variant="outline" className="h-7 w-7 btn-glow" onClick={() => setQty(i.id, i.qty + 1)}>
                        <Plus size={12} />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-7 w-7 ml-auto text-destructive" onClick={() => remove(i.id)}>
                        <Trash2 size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-4 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                {(["delivery", "takeaway"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`btn-glow py-3 rounded-xl text-sm font-medium capitalize border-2 flex items-center justify-center gap-2 ${
                      mode === m ? "bg-primary text-primary-foreground border-primary" : "bg-card border-border"
                    }`}
                  >
                    {m === "delivery" ? <Truck size={14} /> : <Store size={14} />} {m}
                  </button>
                ))}
              </div>
              <div className="flex justify-between font-display text-2xl">
                <span>Total</span>
                <span>Rs. {total}</span>
              </div>
              <Button onClick={() => setCheckoutOpen(true)} className="w-full h-12 btn-glow bg-primary text-primary-foreground text-base">
                Place Order
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
        <DialogContent className="bg-cream sm:max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">Checkout</DialogTitle>
            <DialogDescription>
              {mode === "delivery" ? "We'll deliver hot & fresh." : "Order ahead, pick up at F-6."} Total: <strong>Rs. {total}</strong>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Ayesha Khan" className="mt-1.5 bg-card" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="0320 1234567" className="mt-1.5 bg-card" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>

            {mode === "delivery" && (
              <div>
                <Label htmlFor="address">Delivery Address *</Label>
                <Textarea id="address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="House #, Street, Sector, Islamabad" className="mt-1.5 bg-card min-h-[80px]" />
                {errors.address && <p className="text-xs text-destructive mt-1">{errors.address}</p>}
              </div>
            )}

            <div>
              <Label htmlFor="notes">Notes (optional)</Label>
              <Textarea id="notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Any special instructions?" className="mt-1.5 bg-card min-h-[60px]" />
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button variant="outline" onClick={() => setCheckoutOpen(false)} className="btn-glow rounded-xl h-12">
                Cancel
              </Button>
              <Button onClick={confirmOrder} className="btn-glow rounded-xl h-12 bg-primary text-primary-foreground">
                Confirm Order
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
