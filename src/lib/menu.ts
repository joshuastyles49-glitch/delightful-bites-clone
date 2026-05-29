import cookies from "@/assets/cat-cookies.jpg";
import skillet from "@/assets/cat-skillet.jpg";
import donuts from "@/assets/cat-donuts.jpg";
import waffles from "@/assets/cat-waffles.jpg";
import strawberry from "@/assets/cat-strawberry.jpg";
import drinks from "@/assets/cat-drinks.jpg";

import c1 from "@/assets/items/c1.jpg";
import c2 from "@/assets/items/c2.jpg";
import c3 from "@/assets/items/c3.jpg";
import c4 from "@/assets/items/c4.jpg";
import c5 from "@/assets/items/c5.jpg";
import c6 from "@/assets/items/c6.jpg";
import c7 from "@/assets/items/c7.jpg";
import c8 from "@/assets/items/c8.jpg";
import c9 from "@/assets/items/c9.jpg";
import c10 from "@/assets/items/c10.jpg";
import c11 from "@/assets/items/c11.jpg";
import c12 from "@/assets/items/c12.jpg";
import c13 from "@/assets/items/c13.jpg";
import c14 from "@/assets/items/c14.jpg";
import c15 from "@/assets/items/c15.jpg";
import c16 from "@/assets/items/c16.jpg";
import s1 from "@/assets/items/s1.jpg";
import s2 from "@/assets/items/s2.jpg";
import s3 from "@/assets/items/s3.jpg";
import s4 from "@/assets/items/s4.jpg";
import s5 from "@/assets/items/s5.jpg";
import s6 from "@/assets/items/s6.jpg";
import s7 from "@/assets/items/s7.jpg";
import s8 from "@/assets/items/s8.jpg";
import st1 from "@/assets/items/st1.jpg";
import st2 from "@/assets/items/st2.jpg";
import st3 from "@/assets/items/st3.jpg";
import d1 from "@/assets/items/d1.jpg";
import d2 from "@/assets/items/d2.jpg";
import d3 from "@/assets/items/d3.jpg";
import d4 from "@/assets/items/d4.jpg";
import d5 from "@/assets/items/d5.jpg";
import d6 from "@/assets/items/d6.jpg";
import w1 from "@/assets/items/w1.jpg";
import w2 from "@/assets/items/w2.jpg";
import w3 from "@/assets/items/w3.jpg";
import w4 from "@/assets/items/w4.jpg";
import w5 from "@/assets/items/w5.jpg";
import w6 from "@/assets/items/w6.jpg";
import dr1 from "@/assets/items/dr1.jpg";
import dr2 from "@/assets/items/dr2.jpg";
import dr3 from "@/assets/items/dr3.jpg";
import dr4 from "@/assets/items/dr4.jpg";
import dr5 from "@/assets/items/dr5.jpg";

export type MenuItem = { id: string; name: string; price: number; image: string; category: string };

export const categories = [
  { id: "cookies", name: "Cookies", image: cookies },
  { id: "skillet", name: "Cookie Skillets & Croissants", image: skillet },
  { id: "strawberry", name: "Strawberry Special", image: strawberry },
  { id: "donuts", name: "Donuts", image: donuts },
  { id: "waffles", name: "Waffles", image: waffles },
  { id: "drinks", name: "Drinks", image: drinks },
];

export const menu: MenuItem[] = [
  // Cookies
  { id: "c1", name: "Chocolate Chunky", price: 350, image: c1, category: "cookies" },
  { id: "c2", name: "Fudge Chunky", price: 350, image: c2, category: "cookies" },
  { id: "c3", name: "Confetti Chunky", price: 400, image: c3, category: "cookies" },
  { id: "c4", name: "Lotus", price: 400, image: c4, category: "cookies" },
  { id: "c5", name: "Oreo Monster", price: 400, image: c5, category: "cookies" },
  { id: "c6", name: "Fudge Filled Chunky", price: 400, image: c6, category: "cookies" },
  { id: "c7", name: "Red Velvet", price: 400, image: c7, category: "cookies" },
  { id: "c8", name: "Chocolate Filled Chunky", price: 400, image: c8, category: "cookies" },
  { id: "c9", name: "Snickers Chunky", price: 400, image: c9, category: "cookies" },
  { id: "c10", name: "Thin Cookie Chips", price: 400, image: c10, category: "cookies" },
  { id: "c11", name: "S'mores Chocolate Fudge", price: 450, image: c11, category: "cookies" },
  { id: "c12", name: "Pistashio Kunafa", price: 450, image: c12, category: "cookies" },
  { id: "c13", name: "Brownie Chunky", price: 450, image: c13, category: "cookies" },
  { id: "c14", name: "Bounty Chunky", price: 450, image: c14, category: "cookies" },
  { id: "c15", name: "Hershey Chunky", price: 450, image: c15, category: "cookies" },
  { id: "c16", name: "Kinder Bueno Chunky", price: 450, image: c16, category: "cookies" },
  // Skillets + croissants
  { id: "s1", name: "Classic Chocolate Skillet", price: 450, image: s1, category: "skillet" },
  { id: "s2", name: "Croissants Plain", price: 450, image: s2, category: "skillet" },
  { id: "s3", name: "Kinder Bueno Skillet", price: 500, image: s3, category: "skillet" },
  { id: "s4", name: "Pistashio Kunafa Skillet", price: 500, image: s4, category: "skillet" },
  { id: "s5", name: "Fudge Brownie Skillet", price: 500, image: s5, category: "skillet" },
  { id: "s6", name: "Biscoff Lotus Skillet", price: 500, image: s6, category: "skillet" },
  { id: "s7", name: "Almond Croissant", price: 400, image: s7, category: "skillet" },
  { id: "s8", name: "Chocolate Croissant", price: 650, image: s8, category: "skillet" },
  // Strawberry
  { id: "st1", name: "Strawberry Dipped Chocolate", price: 500, image: st1, category: "strawberry" },
  { id: "st2", name: "Strawberry Dipped with Biscoff Drizzling", price: 500, image: st2, category: "strawberry" },
  { id: "st3", name: "Strawberry Dropped Chocolate with White Chocolate Drizzling", price: 500, image: st3, category: "strawberry" },
  // Donuts
  { id: "d1", name: "Plain Glazed", price: 250, image: d1, category: "donuts" },
  { id: "d2", name: "Chocolate Glazed", price: 350, image: d2, category: "donuts" },
  { id: "d3", name: "Sprinkles Chocolate Glaze", price: 350, image: d3, category: "donuts" },
  { id: "d4", name: "Oreo Glazed", price: 350, image: d4, category: "donuts" },
  { id: "d5", name: "Lotus Glazed", price: 350, image: d5, category: "donuts" },
  { id: "d6", name: "Pistashio Glazed", price: 350, image: d6, category: "donuts" },
  // Waffles
  { id: "w1", name: "Lotus Waffle", price: 500, image: w1, category: "waffles" },
  { id: "w2", name: "Fudge Waffle", price: 500, image: w2, category: "waffles" },
  { id: "w3", name: "Pistashio Kunafa Waffle", price: 500, image: w3, category: "waffles" },
  { id: "w4", name: "Red Velvet Waffle", price: 500, image: w4, category: "waffles" },
  { id: "w5", name: "Monster Waffle", price: 500, image: w5, category: "waffles" },
  { id: "w6", name: "Classic Chocolate Waffle", price: 500, image: w6, category: "waffles" },
  // Drinks
  { id: "dr1", name: "Nestle Juice", price: 100, image: dr1, category: "drinks" },
  { id: "dr2", name: "Rani Juice", price: 120, image: dr2, category: "drinks" },
  { id: "dr3", name: "Milo", price: 150, image: dr3, category: "drinks" },
  { id: "dr4", name: "Nestle Cold Coffee", price: 200, image: dr4, category: "drinks" },
  { id: "dr5", name: "Soft Drinks", price: 100, image: dr5, category: "drinks" },
];

export const reviews = [
  { name: "Ayesha Khan", rating: 5, text: "Best cookies in Islamabad! The Lotus chunky is absolutely divine. Khurram and the team know their craft." },
  { name: "Hamza Sheikh", rating: 5, text: "Tried the Pistashio Kunafa Skillet on date night — masha'Allah, it was the highlight of our evening." },
  { name: "Fatima Raza", rating: 5, text: "Their chocolate croissant is bakery perfection. Flaky, buttery, and the chocolate just oozes out. 10/10." },
  { name: "Bilal Ahmed", rating: 5, text: "Ordered a donut box for my sister's birthday. Delivery was on time and the presentation was beautiful." },
  { name: "Zainab Malik", rating: 4, text: "The strawberry dipped chocolate is the prettiest dessert I've had in F-6. Already planning my next visit." },
  { name: "Usman Tariq", rating: 5, text: "Fudge brownie skillet with a scoop of vanilla — life-changing. Krums has spoiled me for every other bakery." },
];
