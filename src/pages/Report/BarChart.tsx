import React from "react";
import styled from "styled-components";
import { Bar } from "./components/Bar";
import { UserDataType } from "./Report";

interface UserProps {
  userData: UserDataType[];
  periodData: number[];
}

export const BarChart = ({ userData }: UserProps) => {
  const periodData: number[] = userData.map((user) => user.period);

  return (
    <Container>
      {userData.map((user, i: number) => (
        <Bar
          user={user}
          periodData={periodData}
          key={i}
          index={i}
          max={0}
          findMaxValue={function (): number {
            throw new Error("Function not implemented.");
          }}
        />
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
