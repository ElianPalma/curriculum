import React, { useEffect, useRef, useState } from 'react';
import { throttle } from 'lodash'; // Necesitas instalar lodash: npm install lodash

const CodingCursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = throttle((e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    }, 50); // Ejecuta la función como máximo cada 50ms (ajusta este valor)

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor, { passive: true });

    document.querySelectorAll('[data-skill]').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('[data-skill]').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      moveCursor.cancel(); // Limpia la función throttled
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed w-6 h-6 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-100 ${isHovering ? 'scale-150' : 'scale-100'}`}
      style={{
        backgroundImage: 'url(https://carmor138.dreamhosters.com/wp-content/uploads/2025/05/vecteezy_3d-random-shape-cursor-prism-dispersion-glass-effect-light_49501071.png)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        boxShadow: isHovering ? '0 0 0 2px white, 0 0 20px 5px rgba(0, 128, 0, 0.5)' : 'none',
      }}
    />
  );
};

export default CodingCursor;