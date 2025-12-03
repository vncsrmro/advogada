/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#101010", // Deep Lead
                secondary: "#A17A38", // Gold/Bronze
                accent: "#A17A38", // Gold/Bronze
                "gold": "#A17A38",
                "deep-lead": "#101010",
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
