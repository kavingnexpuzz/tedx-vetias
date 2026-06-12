import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const DNAAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width || 400;
      canvas.height = rect.height || 500;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuration for the DNA helix
    const numRungs = 24;       // Number of horizontal steps/rungs
    const radius = 70;         // Helix radius in pixels
    const speed = 0.015;       // Rotation speed (rad per frame)
    const verticalGap = 18;    // Space between consecutive rungs
    const dotRadius = 4.5;      // Base radius of the nodes
    let angle = 0;             // Cumulative rotation angle

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const startY = (canvas.height - (numRungs - 1) * verticalGap) / 2;

      // 1. Calculate all 3D node coordinates
      const rungs = [];
      for (let i = 0; i < numRungs; i++) {
        const y = startY + i * verticalGap;
        // Twist angle: add a phase shift per step to create the helical spiral
        const theta = angle + i * 0.35;

        // Node 1 (Strand A)
        const x1 = centerX + radius * Math.cos(theta);
        const z1 = radius * Math.sin(theta); // Depth coordinate (-radius to +radius)

        // Node 2 (Strand B, 180 degrees out of phase)
        const x2 = centerX - radius * Math.cos(theta);
        const z2 = -radius * Math.sin(theta);

        rungs.push({ y, x1, z1, x2, z2 });
      }

      // 2. Draw back-to-front or depth-styled connections
      // Draw horizontal rungs
      rungs.forEach((rung) => {
        const avgZ = (rung.z1 + rung.z2) / 2;
        // Map average depth to opacity/glow factor
        const alpha = 0.25 + 0.5 * ((avgZ + radius) / (2 * radius)); // 0.25 to 0.75
        const thickness = 1.0 + ((avgZ + radius) / (2 * radius)) * 1.5; // 1.0px to 2.5px
        
        ctx.beginPath();
        ctx.moveTo(rung.x1, rung.y);
        ctx.lineTo(rung.x2, rung.y);
        ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
        ctx.lineWidth = thickness;
        ctx.shadowColor = "#E50914";
        ctx.shadowBlur = 8 * ((avgZ + radius) / (2 * radius));
        ctx.stroke();
      });

      // Reset shadow blur before drawing strands
      ctx.shadowBlur = 0;

      // Draw Strand 1 (Connecting nodes along backbone A)
      ctx.beginPath();
      for (let i = 0; i < numRungs; i++) {
        const rung = rungs[i];
        if (i === 0) ctx.moveTo(rung.x1, rung.y);
        else ctx.lineTo(rung.x1, rung.y);
      }
      ctx.strokeStyle = "rgba(229, 9, 20, 0.45)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Strand 2 (Connecting nodes along backbone B)
      ctx.beginPath();
      for (let i = 0; i < numRungs; i++) {
        const rung = rungs[i];
        if (i === 0) ctx.moveTo(rung.x2, rung.y);
        else ctx.lineTo(rung.x2, rung.y);
      }
      ctx.strokeStyle = "rgba(229, 9, 20, 0.45)";
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw Nodes (glowing spheres at endpoints)
      rungs.forEach((rung) => {
        // Draw Node 1
        const scale1 = 0.7 + 0.6 * ((rung.z1 + radius) / (2 * radius)); // Size scaling (0.7 to 1.3)
        const glowBlur1 = 15 * ((rung.z1 + radius) / (2 * radius)); // Glow intensifies in front
        
        ctx.beginPath();
        ctx.arc(rung.x1, rung.y, dotRadius * scale1, 0, 2 * Math.PI);
        // White-hot core for realistic glow, fading with depth
        ctx.fillStyle = `rgba(255, 120, 120, ${0.8 + 0.2 * ((rung.z1 + radius) / (2 * radius))})`;
        ctx.shadowColor = "#E50914";
        ctx.shadowBlur = glowBlur1;
        ctx.fill();

        // Draw Node 2
        const scale2 = 0.7 + 0.6 * ((rung.z2 + radius) / (2 * radius));
        const glowBlur2 = 15 * ((rung.z2 + radius) / (2 * radius));
        
        ctx.beginPath();
        ctx.arc(rung.x2, rung.y, dotRadius * scale2, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 120, 120, ${0.8 + 0.2 * ((rung.z2 + radius) / (2 * radius))})`;
        ctx.shadowColor = "#E50914";
        ctx.shadowBlur = glowBlur2;
        ctx.fill();
      });

      angle += speed;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
};

export default DNAAnimation;
