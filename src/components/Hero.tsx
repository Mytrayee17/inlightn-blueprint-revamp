
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating shapes animation
    const shapes: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      rotation: number;
      rotationSpeed: number;
      opacity: number;
    }> = [];

    // Create shapes
    for (let i = 0; i < 5; i++) {
      shapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 40 + 20,
        speed: Math.random() * 0.5 + 0.2,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        ctx.save();
        ctx.translate(shape.x, shape.y);
        ctx.rotate(shape.rotation);
        ctx.globalAlpha = shape.opacity;

        // Create gradient
        const gradient = ctx.createLinearGradient(-shape.size/2, -shape.size/2, shape.size/2, shape.size/2);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#8b5cf6');
        ctx.fillStyle = gradient;

        // Draw rounded rectangle
        const radius = 8;
        ctx.beginPath();
        ctx.roundRect(-shape.size/2, -shape.size/2, shape.size, shape.size, radius);
        ctx.fill();

        ctx.restore();

        // Update position
        shape.y -= shape.speed;
        shape.rotation += shape.rotationSpeed;

        // Reset if off screen
        if (shape.y < -shape.size) {
          shape.y = canvas.height + shape.size;
          shape.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-60"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Empowering Careers Through
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
              Quality Education
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of students who have transformed their careers with our industry-leading 
            internship and certification programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center space-x-2">
              <span className="text-lg font-semibold">Explore Programs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="text-slate-700 hover:text-blue-600 px-8 py-4 rounded-xl border-2 border-slate-300 hover:border-blue-600 transition-all duration-200 transform hover:scale-105 bg-white/50 backdrop-blur-sm">
              <span className="text-lg font-semibold">Watch Demo</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {[
            { number: '10K+', label: 'Students Trained' },
            { number: '500+', label: 'Companies' },
            { number: '95%', label: 'Placement Rate' },
            { number: '4.8★', label: 'Average Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
