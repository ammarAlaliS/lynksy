// Tema con claves dinámicas (tu definición de ThemeColors)
export type ThemeColors = {
    [key: string]: string;
  };
  
  // Propiedades de Index, donde themeColors es del tipo ThemeColors
  export interface IndexProps {
    themeColors: ThemeColors;
  }
  