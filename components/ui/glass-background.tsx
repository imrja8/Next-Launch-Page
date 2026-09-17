"use client";

import React from "react";
import { motion } from "framer-motion";

const blobs = [
  {
    width: "max(400px, 40vw)",
    height: "max(400px, 40vw)",
    left: "calc(-91px + 5vw)",
    top: "calc(438px - 10vh)",
    background: "radial-gradient(circle, var(--blob-primary) 0%, var(--blob-primary) 50%, transparent 100%)",
    filter: "blur(150px)",
    animate: {
      x: [0, 50, 100, 50, 0],
      y: [0, -80, 0, 80, 0],
      scale: [1, 1.2, 1.4, 1.2, 1],
      rotate: [0, 90, 180, 270, 360],
    },
    duration: 28,
  },
  {
    width: "max(400px, 40vw)",
    height: "max(400px, 40vw)",
    left: "calc(430px - 5vw)",
    top: "calc(609px - 20vh)",
    background: "radial-gradient(circle, var(--blob-secondary) 0%, var(--blob-secondary) 50%, transparent 100%)",
    filter: "blur(150px)",
    animate: {
      x: [0, -60, -120, -60, 0],
      y: [0, 90, 0, -90, 0],
      scale: [1, 1.3, 1.5, 1.3, 1],
      rotate: [0, -90, -180, -270, -360],
    },
    duration: 32,
  },
  {
    width: "max(400px, 40vw)",
    height: "max(400px, 40vw)",
    left: "calc(900px - 15vw)",
    top: "calc(651px - 20vh)",
    background: "radial-gradient(circle, var(--blob-secondary) 0%, var(--blob-secondary) 50%, transparent 100%)",
    filter: "blur(150px)",
    animate: {
      x: [0, 70, 140, 70, 0],
      y: [0, -100, 0, 100, 0],
      scale: [1, 1.25, 1.45, 1.25, 1],
      rotate: [0, 120, 240, 120, 360],
    },
    duration: 30,
  },
  {
    width: "max(400px, 40vw)",
    height: "max(400px, 40vw)",
    right: "calc(-200px + 10vw)",
    top: "calc(329px - 10vh)",
    background: "radial-gradient(circle, var(--blob-primary) 0%, var(--blob-primary) 50%, transparent 100%)",
    filter: "blur(150px)",
    animate: {
      x: [0, -80, -160, -80, 0],
      y: [0, 110, 0, -110, 0],
      scale: [1, 1.35, 1.5, 1.35, 1],
      rotate: [0, -120, -240, -120, -360],
    },
    duration: 26,
  },
  {
    width: "max(300px, 30vw)",
    height: "max(300px, 30vw)",
    left: "50%",
    top: "50%",
    background: "radial-gradient(circle, var(--blob-accent) 0%, transparent 100%)",
    filter: "blur(120px)",
    transform: "translate(-50%, -50%)",
    animate: {
      x: [0, 40, 80, 40, 0],
      y: [0, -60, 0, 60, 0],
      scale: [1, 1.3, 1.6, 1.3, 1],
      opacity: [0.3, 0.5, 0.7, 0.5, 0.3],
      rotate: [0, 180, 360],
    },
    duration: 24,
  }
];

export function GlassBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Blue Gradient Blobs Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {blobs.map((blob, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: blob.width,
              height: blob.height,
              left: blob.left,
              right: blob.right,
              top: blob.top,
              background: blob.background,
              filter: blob.filter,
              transform: blob.transform,
            }}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Vertical Glass Strips Overlay */}
      <div
        className="absolute inset-0 flex flex-row items-center pointer-events-none"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {Array.from({ length: 18 }).map((_, index) => (
          <motion.div
            key={index}
            className="h-full flex-shrink-0"
            style={{
              width: "calc(100vw / 18)",
              minWidth: "60px",
              maxWidth: "100px",
              background:
                "linear-gradient(90deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.7) 76%, rgba(255, 255, 255, 0.3) 100%)",
              mixBlendMode: "overlay",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 4,
              delay: index * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}
