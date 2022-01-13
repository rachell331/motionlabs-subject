import React from "react";
import styled from "styled-components";
import { UserDataType } from "../Report";

interface UserProps {
  user: UserDataType;
  index: number;
}

export const Bar = ({ user, index }: UserProps) => {
  const changeDateFormat = (date: string) => {
    const month: string = date.slice(-5, -3);
    const day: string = date.slice(-2);
    const newDateString: string = month + "/" + day;
    return newDateString;
  };

  return (
    <Container index={index}>
      <Period>{user.period}일</Period>
      <Rectangle period={user.period} />
      <StartDate>{changeDateFormat(user.startDate)}</StartDate>
    </Container>
  );
};

const Container = styled.div<{ index: number }>`
  position: absolute;
  left: ${(props) => `calc(100%/6 * (${props.index} + 1))`};
  bottom: 0;
  font-size: 0.67rem;
  font-weight: 600;
`;

const Period = styled.p`
  margin-bottom: 4px;
  text-align: center;
`;

const Rectangle = styled.div<{ period: number }>`
  width: 30px;
  height: ${(props) => `calc(${props.period} * 10px)`};
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 8px;
`;

const StartDate = styled.p`
  margin: 4px 0 20px;
`;
