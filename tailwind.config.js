/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0A1128", // Deep Navy
                secondary: "#00FFFF", // Cyan (Electric Blue)
                accent: "#5E2BFF", // Electric Purple
                "electric-blue": "#00FFFF",
                "deep-purple": "#8A2BE2",
                "deep-lead": "#1A1A1A",
                text: "#F0F0F0", // Light Gray
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
