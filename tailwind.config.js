/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    50: '#EFF3F8',
                    100: '#D5E0EF',
                    200: '#AAC1DF',
                    300: '#7FA2CF',
                    400: '#5483BF',
                    500: '#2964AF',
                    600: '#1E3A5F',
                    700: '#162C47',
                    800: '#0F1E30',
                    900: '#070F18',
                },
                blue: {
                    400: '#60A5FA',
                    500: '#3B82F6',
                    600: '#2563EB',
                },
                amber: {
                    400: '#FBBF24',
                    500: '#F59E0B',
                    600: '#D97706',
                }
            },
            fontFamily: {
                serif: ['Playfair Display', 'Georgia', 'serif'],
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.8s ease-out forwards',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}
