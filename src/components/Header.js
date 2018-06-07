import React from "react";
import styled from "react-emotion";

import { Div, Img, Column, Row } from "../uikit/Core";
import { Search } from "../uikit/Icons";

import logo from "../img/logo.png";

const Logo = styled(x => <Img src={logo} alt="AssetMine" {...x} />)`
  object-fit: contain;
`;

const NavItemBase = ({ children, ...props }) => (
  <Div color="white" fontSize={2} ml={3} mr={3} {...props}>
    {children}
  </Div>
);

const NavItem = styled(NavItemBase)`
  ${({ theme }) => theme.center};
  font-style: italic;
`;

const NavBar = styled(Row)`
  ${({ theme }) => theme.backgroundDark};
  height: 50px;
`;

const Container = styled(Column)`
  height: 160px;
`;

const Header = () => (
  <Container>
    <Row p={3} contained>
      <Logo />
    </Row>
    <NavBar>
      <Row contained alignSelf="flex-start">
        <NavItem>Home</NavItem>
        <NavItem>About Us</NavItem>
        <NavItem>Services</NavItem>
        <NavItem>FAQ</NavItem>
        <NavItem>Contact Us</NavItem>
        <NavItem>Global Partnerships</NavItem>
        <NavItem>Blog</NavItem>
      </Row>
      <Row alignSelf="flex-end">
        <NavItem>
          <Search color="white" />
        </NavItem>
      </Row>
    </NavBar>
  </Container>
);

export default Header;
