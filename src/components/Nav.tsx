import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = () => {
  return (
    <Container>
      <Title>
        <Link to="/" className="anchor">
          Motionlabs
        </Link>
      </Title>
    </Container>
  );
};

const Container = styled.nav`
  height: 70px;
  background-color: #000;
`;

const Title = styled.h1`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.fontWhite};
  line-height: 70px;

  .anchor {
    text-decoration: underline #00f 2px;
    font-weight: 900;
    font-size: 1.75rem;
    cursor: pointer;

    &:hover {
      text-decoration-color: #f00;
    }
  }
`;
