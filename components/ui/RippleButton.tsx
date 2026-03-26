"use client";
import { useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function RippleButton({ 
  children, 
  onClick, 
  className, 
  style,
  type = "button",
  disabled = false
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const MAX_RIPPLES = 3;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples(prev => {
      const newRipples = [...prev, { x, y, id }];
      return newRipples.slice(-MAX_RIPPLES);
    });
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== id));
    }, 600);
    
    onClick?.();
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={`relative overflow-hidden ${className}`}
      style={style}
    >
      {children}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </button>
  );
}
