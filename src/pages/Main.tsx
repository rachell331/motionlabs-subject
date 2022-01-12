import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = () => {
  return (
    <Container>
      <ListWrapper>
        <List>
          <Link to="/report" className="anchor">
            레포트
          </Link>
        </List>
        <List>
          <Link to="/passenger" className="anchor">
            승객목록
          </Link>
        </List>
      </ListWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  padding: 60px 40px 0;
`;

const ListWrapper = styled.ul``;

const List = styled.li`
  padding: 20px;
  font-size: 1.125rem;
  font-weight: 700;
  list-style: inside;

  .anchor {
    display: inline-block;
    border-bottom: 1px solid #00f;

    &:active {
      border-bottom: 1px solid #f00;
    }
  }
`;
