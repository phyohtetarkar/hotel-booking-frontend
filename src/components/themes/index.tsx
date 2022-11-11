import { StylesConfig, ThemeConfig } from "react-select";

export const reactSelectStyles: StylesConfig = {
  control: (css, state) => {
    return {
      ...css,
      padding: "0.375rem 0.375rem",
      boxShadow: "none",
      borderRadius: 0
    };
  }
};

export const reactSelectTheme: ThemeConfig = (theme) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#f3f4f6",
      primary: "#2E294E"
    }
  };
};
