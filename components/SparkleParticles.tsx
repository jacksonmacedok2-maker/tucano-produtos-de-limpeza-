import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

const SparkleParticles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      const count = 80; // Aumentada a quantidade para um efeito mais preenchido
      for (let i = 0; i < count; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 8 + 4, // Tamanho ligeiramente maior para as estrelas
          duration: Math.random() * 4 + 5, // Movimento mais suave e lento
          delay: Math.random() * -15, // Início bem distribuído
          rotation: Math.random() * 360,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute sparkle-star"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            bottom: '-20px',
            animation: `sparkle-rise ${p.duration}s linear infinite`,
            animationDelay: `${p.delay}s`,
            transform: `rotate(${p.rotation}deg)`,
            opacity: 0,
          }}
        />
      ))}
      <style>{`
        .sparkle-star {
          background-color: #FFFFFF;
          /* Formato de estrela de 4 pontas (Sparkle) */
          clip-path: polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%);
          box-shadow: 0 0 15px 2px rgba(255, 255, 255, 0.9), 0 0 5px #FFEA00;
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
        }

        @keyframes sparkle-rise {
          0% {
            transform: translateY(0) scale(0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
            transform: translateY(-15vh) scale(1.2) rotate(45deg);
          }
          40% {
            opacity: 0.7;
            transform: translateY(-40vh) scale(1) rotate(90deg);
          }
          70% {
            opacity: 0.4;
            transform: translateY(-70vh) scale(0.8) rotate(180deg);
          }
          100% {
            transform: translateY(-110vh) scale(0.3) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SparkleParticles;