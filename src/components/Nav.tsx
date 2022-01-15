import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <Container>
      <Link to="/">
        <Title>Motionlabs</Title>
      </Link>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background-color: #000;
  z-index: 10000;
`;

const Title = styled.h1`
  ${({ theme }) => theme.wrapper};
  background-color: #000;
  color: ${({ theme }) => theme.fontWhite};
  font-weight: 900;
  font-size: 1.75rem;
  line-height: 70px;
  cursor: pointer;

  .anchor {
    text-decoration: underline #00f 2px;
    font-weight: 900;
    font-size: 1.75rem;
    cursor: pointer;

    &:visited {
      color: ${({ theme }) => theme.fontWhite};
    }

    &:hover {
      text-decoration-color: #f00;
    }
  }
`;
