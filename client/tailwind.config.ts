import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        neutralBg: "#F3EFE9",   // Fondo general
        main1: "#AEC4B2",       // Verde salvia claro
        main2: "#E5C3B3",       // Rosa melocotón
        fontDark: "#496C5B",    // Verde bosque oscuro
        minor: "#C9A89C",       // Terracota suave
        accent: "#8B9B88",      // Oliva grisáceo
      },
    },
  },
} satisfies Config;
