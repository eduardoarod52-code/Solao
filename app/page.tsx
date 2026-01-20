"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const products = [
  { id: 1, name: "Solao Premium Hoodie", price: "$120" },
  { id: 2, name: "Solao Structured Jacket", price: "$240" },
  { id: 3, name: "Solao Essential Tee", price: "$65" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold tracking-widest"
        >
          SOLAO
        </motion.h1>
        <p className="mt-6 text-lg max-w-xl text-gray-300">
          Urban × Fine. Street influence refined by luxury.
        </p>
        <button className="mt-10 px-8 py-4 text-lg rounded-2xl bg-white text-black">
          Shop Collection
        </button>
      </section>

      {/* Shop */}
      <section className="py-24 px-8 bg-neutral-900">
        <h2 className="text-4xl font-semibold text-center mb-16">Shop Solao</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black border border-neutral-800 rounded-2xl p-6"
            >
              <div className="h-64 bg-neutral-800 rounded-xl mb-6" />
              <h3 className="text-xl font-medium mb-2">{p.name}</h3>
              <p className="text-gray-400 mb-4">{p.price}</p>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-black">
                <ShoppingBag size={18} />
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 border-t border-neutral-800">
        © {new Date().getFullYear()} Solao
      </footer>
    </div>
  );
}
