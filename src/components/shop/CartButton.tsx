"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import OrderModal from "./OrderModal";

interface CartButtonProps {
    product: {
        id: string | number;
        title: string;
        price: string;
        category: string;
    };
}

export default function CartButton({ product }: CartButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                onClick={(e) => {
                    e.preventDefault(); // Prevent Link navigation
                    e.stopPropagation();
                    setIsOpen(true);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 text-white transition-all duration-300 hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/50"
                aria-label={`Pedir ${product.title}`}
            >
                <ShoppingCart className="w-5 h-5" />
            </motion.button>

            <OrderModal
                product={product}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}
