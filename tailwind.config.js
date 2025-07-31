/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      // Blues
      primaryblue: "#2563EB", // blue-600
      lightblue: "#60A5FA", // blue-400
      darkblue: "#1E3A8A", // blue-900
      paleblue: "#E0F2FE", // blue-100 / highlight
      bluegray: "#F0F4F8", // light bluish background

      // Cyans
      lightcyan: "#22D3EE", // cyan-400
      cyan: "#06B6D4", // cyan-500
      deepcyan: "#0E7490", // cyan-700

      // Grays (Expanded)
      white: "#FFFFFF",
      lightestgray: "#F8FAFC", // slate-50
      extralightgray: "#F1F5F9", // slate-100
      lightgray: "#E2E8F0", // slate-200
      gray: "#CBD5E1", // slate-300
      mediumgray: "#94A3B8", // slate-400 (bordergray)
      darkgray: "#64748B", // slate-500
      darkergray: "#475569", // slate-600
      deepgray: "#334155", // slate-700
      darktext: "#1E293B", // slate-800
      darkestgray: "#0F172A", // slate-900

      // Feedback Colors
      successgreen: "#10B981", // emerald-500
      warningyellow: "#FBBF24", // amber-400
      lightred: "#EF4444", // red-500
      darkred: "#DC2626", // red-600
      errorred: "#B91C1C", // red-700
      lightpink: "#FECACA", // red-200 for error backgrounds
    },
    extend: {
      boxShadow: {
        cyanShadow: "0px 0px 20px 0px rgba(94, 206, 220, 0.5)",
        cyanBigShadow: "10px 10px 1000px 500px rgba(94, 206, 220, 0.3)",
        cyanMediumShadow: "10px 10px 200px 150px rgba(94, 206, 220, 0.5)",
        orangeBigShadow: "10px 10px 10000px 500px rgba(240, 169, 79, 0.3)",
        orangeMediumShadow: "10px 10px 2000px 150px rgba(240, 169, 79, 0.5)",
      },
            keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 24px 4px #22d3ee, 0 0 80px 12px #60a5fa' },
          '50%': { opacity: '1', boxShadow: '0 0 40px 8px #22d3ee, 0 0 120px 18px #60a5fa' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateX(-50%) translateY(-10px)' },
          '10%': { opacity: '1', transform: 'translateX(-50%) translateY(0px)' },
          '90%': { opacity: '1', transform: 'translateX(-50%) translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateX(-50%) translateY(-10px)' },
        },
        'meteor-fall': {
          '0%': { 
            transform: 'translateX(-200px) translateY(-200px) rotate(45deg) scale(2)',
            opacity: '1',
            boxShadow: '0 0 30px 10px currentColor, 0 0 60px 20px currentColor'
          },
          '20%': { 
            transform: 'translateX(20vw) translateY(20vh) rotate(45deg) scale(1.5)',
            opacity: '0.9',
            boxShadow: '0 0 25px 8px currentColor, 0 0 50px 15px currentColor'
          },
          '60%': { 
            transform: 'translateX(60vw) translateY(60vh) rotate(45deg) scale(0.8)',
            opacity: '0.5',
            boxShadow: '0 0 15px 5px currentColor, 0 0 30px 10px currentColor'
          },
          '90%': { 
            transform: 'translateX(90vw) translateY(90vh) rotate(45deg) scale(0.3)',
            opacity: '0.2',
            boxShadow: '0 0 8px 2px currentColor, 0 0 15px 5px currentColor'
          },
          '100%': { 
            transform: 'translateX(120vw) translateY(120vh) rotate(45deg) scale(0.1)',
            opacity: '0',
            boxShadow: '0 0 0px currentColor'
          },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'shooting-star': {
          '0%': { 
            transform: 'translateX(-50px) translateY(-50px) rotate(30deg)',
            opacity: '0'
          },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { 
            transform: 'translateX(150vw) translateY(150vh) rotate(30deg)',
            opacity: '0'
          },
        },
        'pulse-slow': {
          '0%, 100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': { 
            opacity: '0.5',
            transform: 'scale(1.02)'
          },
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(-10px) translateX(5px) rotate(2deg)' 
          },
          '66%': { 
            transform: 'translateY(5px) translateX(-8px) rotate(-1deg)' 
          },
        },
        'float-reverse': {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px) rotate(0deg)' 
          },
          '33%': { 
            transform: 'translateY(8px) translateX(-6px) rotate(-2deg)' 
          },
          '66%': { 
            transform: 'translateY(-12px) translateX(4px) rotate(1deg)' 
          },
        },
        'drift': {
          '0%, 100%': { 
            transform: 'translateX(0px) translateY(0px)' 
          },
          '25%': { 
            transform: 'translateX(10px) translateY(-5px)' 
          },
          '50%': { 
            transform: 'translateX(-5px) translateY(-10px)' 
          },
          '75%': { 
            transform: 'translateX(-10px) translateY(5px)' 
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
        'fade-in': 'fade-in 3s ease-in-out forwards',
        'meteor-fall': 'meteor-fall 3s infinite linear',
        'meteor-fall-slow': 'meteor-fall 5s infinite linear',
        'meteor-fall-fast': 'meteor-fall 2s infinite linear',
        'star-twinkle': 'star-twinkle 2s infinite ease-in-out',
        'star-twinkle-slow': 'star-twinkle 3s infinite ease-in-out',
        'shooting-star': 'shooting-star 4s infinite linear',
      }
    },
    fontFamily: {
      body: ["Josefin Sans"],
      special: ['"Nunito"'],
    },
  },
  plugins: [],
};
