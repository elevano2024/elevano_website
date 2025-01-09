"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  angle: number;
  speed: number;
  originX: number;
  originY: number;
  color: string;
}

interface Props {
  interactionElementRef: React.RefObject<HTMLDivElement>;
}

export function ParticleCanvas({ interactionElementRef }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Enhance crispness
    ctx.imageSmoothingEnabled = false;

    const setCanvasSize = () => {
      const container = canvas.parentElement;
      if (container) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = container.offsetWidth * dpr;
        canvas.height = container.offsetHeight * dpr;
        canvas.style.width = `${container.offsetWidth}px`;
        canvas.style.height = `${container.offsetHeight}px`;
        ctx.scale(dpr, dpr);
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const colors = [
      "rgba(255, 255, 255, 0.5)", // Soft white
      "rgba(255, 255, 255, 0.3)", // Subtle white
      "rgba(200, 195, 255, 0.6)", // Very light purple
      "rgba(165, 160, 255, 0.7)", // Light lavender
      "rgba(140, 135, 255, 0.7)", // Soft lavender
      "rgba(115, 110, 245, 0.8)", // Light purple
      "rgba(95, 90, 235, 0.8)", // Lighter than brand
      "rgba(76, 66, 217, 0.8)", // Brand purple
      "rgba(86, 76, 227, 0.7)", // Slightly lighter brand
      "rgba(106, 96, 247, 0.6)", // Very soft purple
    ];

    const initParticles = () => {
      particlesRef.current = Array.from({ length: 250 }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const baseRadius = Math.random() * 2.5 + 1.5;
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.3 + 0.1;

        return {
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: baseRadius,
          baseRadius,
          angle,
          speed,
          originX: x,
          originY: y,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
      });
    };
    initParticles();

    const handleMouseMove = (e: MouseEvent) => {
      const interactionElement = interactionElementRef?.current;
      if (!interactionElement) return;

      const rect = interactionElement.getBoundingClientRect();
      const isWithinInteractionArea =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      if (isWithinInteractionArea) {
        const canvasRect = canvas.getBoundingClientRect();
        mouseRef.current = {
          x: (e.clientX - canvasRect.left) * (canvas.width / canvasRect.width),
          y: (e.clientY - canvasRect.top) * (canvas.height / canvasRect.height),
        };
      } else {
        mouseRef.current = { x: 0, y: 0 };
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;
      const time = Date.now() / 2000;

      // Draw background overlay first
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(28, 25, 43, 0.4)");
      gradient.addColorStop(1, "rgba(28, 25, 43, 0.5)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update particle positions first
      particles.forEach((particle) => {
        particle.angle += particle.speed / 60;
        const circleRadius = 40;
        const targetX =
          particle.originX + Math.cos(particle.angle + time) * circleRadius;
        const targetY =
          particle.originY + Math.sin(particle.angle + time) * circleRadius;

        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);
        const mouseInfluence = Math.min(300, mouseDistance) / 300;

        particle.x += (targetX - particle.x) * 0.02;
        particle.y += (targetY - particle.y) * 0.02;

        if (mouseDistance < 300) {
          const force = (1 - mouseInfluence) * 0.08;
          particle.x += dx * force;
          particle.y += dy * force;
        }
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.forEach((p2, j) => {
          if (i <= j) return;
          const connectionDx = particle.x - p2.x;
          const connectionDy = particle.y - p2.y;
          const distance = Math.sqrt(
            connectionDx * connectionDx + connectionDy * connectionDy
          );

          if (distance < 180) {
            ctx.beginPath();
            ctx.moveTo(Math.round(particle.x), Math.round(particle.y));
            ctx.lineTo(Math.round(p2.x), Math.round(p2.y));
            ctx.lineWidth = 1.1; // Increased connection width

            const xProgress = (particle.x + p2.x) / (2 * canvas.width);
            const baseOpacity = 0.5 + xProgress * 0.1; // Slightly increased base opacity
            const opacity = baseOpacity * (1 - distance / 180);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.stroke();
          }
        });
      });

      // Draw particles last (on top of everything)
      particles.forEach((particle) => {
        const xProgress = particle.x / canvas.width;
        const baseOpacity = 1 + xProgress * 0.3; // Increased particle opacity

        ctx.beginPath();
        const x = Math.round(particle.x);
        const y = Math.round(particle.y);
        ctx.arc(x, y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${baseOpacity})`); // Adjust opacity dynamically
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactionElementRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 right-0 w-full h-full pointer-events-none"
      style={{
        maskImage:
          "linear-gradient(to left, rgba(0,0,0,1) 50%, transparent 90%)",
        WebkitMaskImage:
          "linear-gradient(to left, rgba(0,0,0,1) 50%, transparent 90%)",
      }}
    />
  );
}
