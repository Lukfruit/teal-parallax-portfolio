import React from "react";
import { motion } from "framer-motion";

const shapes = [
  { size: 60, left: "5%", top: "20%", rotation: 45 },
  { size: 40, left: "8%", top: "60%", rotation: 30 },
  { size: 80, right: "5%", top: "30%", rotation: -20 },
  { size: 50, right: "10%", top: "70%", rotation: 15 },
];

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        transform: "translateY(calc(var(--scroll) * 0.5))",
      }}>
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            ...shape,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* Hexagon with cube edges */}
          <div
            className="w-full h-full relative"
            style={{
              transform: `rotate(${shape.rotation}deg)`,
            }}
          >
            <div className="absolute inset-0 border-2 border-primary/30 transform rotate-0" />
            <div className="absolute inset-0 border-2 border-primary/30 transform rotate-60" />
            <div className="absolute inset-0 border-2 border-primary/30 transform rotate-120" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};