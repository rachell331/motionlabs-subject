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
    backgroundColor: "#ffffff",
  },

  flexCenter: {
    display: "flex",
    justifyContnet: "center",
    alignItems: "center",
  },

  positionRelativeTop: {
    position: "relative",
    top: 0,
    left: 0,
  },

  positionRelativeCenter: {
    position: "relative",
    top: "50%",
    left: "50%",
    trasnform: "translate(-50%, -50%)",
  },

  positionAbsoluteCenter: {
    position: "absolute",
    top: "50%",
    left: "50%",
    trasnform: "translate(-50%, -50%)",
  },
};
