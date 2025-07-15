
import { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Network nodes
    const nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    // Create nodes
    for (let i = 0; i < 50; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: Math.random() > 0.5 ? '#059669' : '#6366F1', // emerald or indigo
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        // Draw node
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.6; // Increased from 0.4 to make more visible
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2); // Increased size from 2 to 3
        ctx.fill();

        // Draw connections
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) { // Increased connection distance from 100 to 120
              ctx.strokeStyle = node.color;
              ctx.globalAlpha = (120 - distance) / 120 * 0.3; // Increased from 0.2 to 0.3
              ctx.lineWidth = 1.5; // Increased from 1 to 1.5
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40" // Increased from opacity-25 to opacity-40
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default NetworkBackground;
