import React from "react";
import styled from "styled-components";
import { UserDataType } from "../Report";

interface UserProps {
  user: UserDataType;
  i: number;
}
export const Dot = ({ user, i }: UserProps) => {
  return (
    <Container cycle={user.cycle} i={i}>
      <Index cycle={user.cycle}>{user.cycle}일</Index>
      <Circle />
    </Container>
  );
};

const Container = styled.div<{ cycle: number; i: number }>`
  position: absolute;
  left: ${(props) => `calc(100%/6 * (${props.i} + 1))`};
  bottom: ${(props) => `calc(0.9091% * ${props.cycle})`};
  width: 30px;
  height: 20px;
  text-align: center;
`;

const Index = styled.p<{ cycle: number }>`
  padding-bottom: 4px;
  font-size: 0.65rem;
  color: ${(props) => (props.cycle >= 100 ? "red" : "#333")};
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
`;
