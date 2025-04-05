
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
			colors: {
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
				// Eco-friendly color palette
				eco: {
					'50': '#f2fcee',
					'100': '#e4f8dc',
					'200': '#c7f0ba',
					'300': '#9de58c',
					'400': '#74d35e',
					'500': '#4fb839',
					'600': '#3c942c',
					'700': '#307226',
					'800': '#2a5a23',
					'900': '#244d20',
					'950': '#0f2a0e',
				},
				leaf: {
					'50': '#eefee6',
					'100': '#d8fcc9',
					'200': '#b5f79e',
					'300': '#88ec66',
					'400': '#62da39',
					'500': '#3eba19',
					'600': '#2f9511',
					'700': '#267212',
					'800': '#225b14',
					'900': '#1f4d15',
					'950': '#0b2a05',
				},
				forest: {
					'50': '#edf8f0',
					'100': '#d5eedd',
					'200': '#addcbe',
					'300': '#7cc297',
					'400': '#50a272',
					'500': '#308455',
					'600': '#226a46',
					'700': '#1d563a',
					'800': '#1b4530',
					'900': '#173a28',
					'950': '#0c2116',
				},
				soil: {
					'50': '#f8f5f2',
					'100': '#eee7e0',
					'200': '#ddd0c2',
					'300': '#c7b19d',
					'400': '#b29178',
					'500': '#a47b5e',
					'600': '#976652',
					'700': '#7d5345',
					'800': '#6a473d',
					'900': '#5a3d35',
					'950': '#301f1c',
				},
				sky: {
					'50': '#f0f8ff',
					'100': '#e1f0fe',
					'200': '#bce2fd',
					'300': '#8acefb',
					'400': '#54b4f8',
					'500': '#2c97f3',
					'600': '#1b7bea',
					'700': '#1965d6',
					'800': '#1c53ac',
					'900': '#1c4889',
					'950': '#142d56',
				},
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
				'pulse-gentle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-gentle': 'pulse-gentle 3s infinite ease-in-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
