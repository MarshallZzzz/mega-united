import { motion } from "framer-motion";
import React, {useEffect, useRef } from "react";

const ButtonWrapper = () => {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton = () => {
  const btnRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      spanRef.current.animate(
        { left: "50%" },
        { duration: 100, fill: "forwards" }
      );
    };

    btnRef.current.addEventListener("mousemove", handleMouseMove);
    btnRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
        if(btnRef.current){
            btnRef.current.removeEventListener("mousemove", handleMouseMove);
            btnRef.current.removeEventListener("mouseleave", handleMouseLeave);

        }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative overflow-hidden rounded-lg bg-slate-950 gap-8 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 gap-8 mix-blend-difference">
        Home
      </span>
      <span className="pointer-events-none relative z-10 gap-8 mix-blend-difference">
        About
      </span>
      <span className="pointer-events-none relative z-10 gap-8 mix-blend-difference">
        Project
      </span>
      <span className="pointer-events-none relative z-10 gap-8 mix-blend-difference">
        Housing
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default ButtonWrapper;