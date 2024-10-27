/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ["var(--font-inter)", "sans-serif"],
  			poppins: ["var(--font-poppins)", "sans-serif"]
  		},
  		colors: {
  			primary: 'var(--color-primary)',
  			secondary: 'var(--color-secondary)',
  			tertiary: 'var(--color-tertiary)',
  			palebdanger: 'var(--color-palebdanger)',
  			light: 'var(--color-light)',
  			paleblue: 'var(--color-paleblue)'
  		},
  		boxShadow: {
  			basic: '0 1px 3px rgba(0, 0, 0, 0.1)',
  			medium: '0 2px 6px rgba(0, 0, 0, 0.2)',
  			large: '0 4px 12px rgba(0, 0, 0, 0.25)',
  			inset: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
  			custom: '0 4px 30px rgba(242, 248, 255, 0.5), 0 1px 3px rgba(255, 255, 255, 0.3)'
  		},
  		animation: {
  			meteor: 'meteor 5s linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
