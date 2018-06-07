import React from "react";
import styled from "react-emotion";

import { Row, Span } from "../uikit/Core";

const Container = styled(Row)`
  ${({ theme }) => theme.center};
  height: 90px;
  background: ${({ theme }) => theme.colors.black};
`;

const ItemBase = x => <Span ml={3} mr={3} {...x} />;
const Item = styled(ItemBase)`
  color: ${({ theme }) => theme.colors.white};
`;

const Footer = () => (
  <Container color="white">
    <Item>© AssetMine Global Inc.</Item>
    <Item>Terms of Use</Item>
    <Item>Privacy Policy</Item>
  </Container>
);

export default Footer;
