import React from "react";
import styled from "styled-components";
import { Bar } from "./components/Bar";
import { UserDataType } from "./Report";

interface UserProps {
  userData: UserDataType[];
}

export const BarChart = ({ userData }: UserProps) => {
  return (
    <Container>
      {userData.map((user, i: number) => (
        <Bar user={user} key={i} index={i} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 20px;
  height: 200px;
`;
