import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  x: number;
  size: number;
  speed: number;
  delay: number;
  opacity: number;
  swayDuration: number;
}

const SoapBubbles: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles: Bubble[] = [];
      const count = window.innerWidth < 768 ? 15 : 30;
      for (let i = 0; i < count; i++) {
        newBubbles.push({
          id: i,
          x: Math.random() * 100,
          size: Math.random() * 45 + 15,
          speed: Math.random() * 20 + 15, 
          delay: Math.random() * -30,
          opacity: Math.random() * 0.3 + 0.15,
          swayDuration: Math.random() * 6 + 4,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[45] overflow-hidden">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="soap-bubble absolute rounded-full"
          style={{
            left: `${bubble.x}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            animation: `float-up ${bubble.speed}s linear infinite, sway ${bubble.swayDuration}s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
            top: '110%', 
          }}
        />
      ))}
      <style>{`
        .soap-bubble {
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.9) 0%,
            rgba(255, 255, 255, 0.1) 35%,
            rgba(173, 216, 230, 0.2) 60%,
            rgba(238, 130, 238, 0.15) 80%,
            rgba(255, 255, 255, 0.4) 100%
          );
          box-shadow: 
            inset -2px -2px 8px rgba(255, 255, 255, 0.5),
            inset 2px 2px 10px rgba(173, 216, 230, 0.2),
            0 0 15px rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(1px);
        }
        
        .soap-bubble::after {
          content: '';
          position: absolute;
          top: 15%;
          left: 15%;
          width: 25%;
          height: 25%;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: blur(1px);
        }

        @keyframes float-up {
          0% { transform: translateY(0vh); opacity: 0; }
          10% { opacity: inherit; }
          90% { opacity: inherit; }
          100% { transform: translateY(-125vh); opacity: 0; }
        }

        @keyframes sway {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(50px); }
        }
      `}</style>
    </div>
  );
};

export default SoapBubbles;