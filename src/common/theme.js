import { css } from "emotion";

import darkWool from "../img/darkWool.jpg";
import lightWool from "../img/lightWool.png";

const theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96, 128],
  colors: {
    black: "#000",
    white: "#fff",
    modalBackground: "rgba(0, 0, 0, 0.65)"
  },
  backgroundDark: css`
    background-image: url(${darkWool});
  `,
  backgroundLight: css`
    background-image: url(${lightWool});
  `,
  flex: css`
    display: flex;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  contained: css`
    max-width: 1000px;
    margin: 0 auto;
  `,
  responsiveImage: css`
    max-width: 100%;
    display: block;
    height: auto;
  `
};

export default theme;
