import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				// Inlighn Brand Colors
				'inlighn': {
					primary: '#5B00B7',
					secondary: '#3E0E94',
					dark: '#400F95',
					accent: '#FFC107',
					lightBg: '#F4F4F4'
				},
				// shadcn/ui Colors (preserved)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				// Inlighn custom animations
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.3)' },
					'50%': { boxShadow: '0 0 30px rgba(37, 99, 235, 0.6)' }
				},
				// New Engen inspired animations
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				// Eduard Bodak inspired animations
				'svg-morph': {
					'0%': { d: 'path("M0,0 L100,0 L100,100 L0,100 Z")' },
					'50%': { d: 'path("M0,0 L100,20 L100,80 L0,100 Z")' },
					'100%': { d: 'path("M0,0 L100,0 L100,100 L0,100 Z")' }
				},
				'clip-reveal': {
					'0%': { clipPath: 'inset(0 100% 0 0)' },
					'100%': { clipPath: 'inset(0 0% 0 0)' }
				},
				// Micro inspired animations
				'fade-slide-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'3d-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'spring-back': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				marquee: 'marquee 25s linear infinite',
				'float': 'float 3s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
				'ripple': 'ripple 0.6s ease-out',
				'gradient-shift': 'gradient-shift 3s ease infinite',
				'svg-morph': 'svg-morph 2s ease-in-out infinite',
				'clip-reveal': 'clip-reveal 0.8s ease-out',
				'fade-slide-up': 'fade-slide-up 0.6s ease-out',
				'3d-flip': '3d-flip 0.6s ease-in-out',
				'spring-back': 'spring-back 0.3s ease-out'
			},
			// New Engen inspired gradients
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(45deg, #2563eb, #7c3aed, #06b6d4, #2563eb)',
				'gradient-code': 'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(124, 58, 237, 0.1) 50%, rgba(6, 182, 212, 0.1) 100%)'
			},
			// Micro inspired spacing
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem'
			},
			// Eduard Bodak inspired typography
			letterSpacing: {
				'tighter': '-0.05em',
				'tight': '-0.025em',
				'wide': '0.025em',
				'wider': '0.05em',
				'widest': '0.1em'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
