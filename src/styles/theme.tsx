export interface ThemeProps {
  [key: string]: string | object;
}

export const theme: ThemeProps = {
  bgColor: "#f0f3f8",
  mainColor: "#333333",
  fontBlack: "#000000",
  fontWhite: "#ffffff",
  wrapper: {
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
  },
};
