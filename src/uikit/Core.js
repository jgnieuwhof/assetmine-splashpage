import React from "react";
import styled from "react-emotion";
import { space, width, fontSize, color } from "styled-system";

export const Div = styled("div")`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const Row = styled(Div)`
  ${({ theme }) => theme.flex};
  ${({ contained, theme }) => (contained ? theme.contained : ``)};
  flex-direction: row;
`;

export const Column = styled(Div)`
  ${({ theme }) => theme.flex};
  ${({ contained, theme }) => (contained ? theme.contained : ``)};
  flex-direction: column;
`;

export const Img = styled("img")`
  ${({ responsive, theme }) => (responsive ? theme.responsiveImage : ``)};
`;

const PBase = styled("p")`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
export const P = x => <PBase fontSize="18px" {...x} />;

const SpanBase = styled("span")`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;
export const Span = styled(SpanBase)``;
