import React from "react";
import styled from "styled-components";
import { UserDataType } from "../Report";

interface UserProps {
  user: UserDataType;
  index: number;
  periodData: number[];
  max: number;
  findMaxValue: (arr: number[]) => number;
}

interface RectangleProps {
  period: number;
  getHeightArr: number[];
  index: number;
}

export const Bar = ({ user, index, periodData }: UserProps) => {
  const changeDateFormat = (date: string) => {
    const month: string = date.slice(-5, -3);
    const day: string = date.slice(-2);
    const newDateString: string = month + "/" + day;
    return newDateString;
  };

  const findMaxValue = (arr: number[]) => {
    const maxValue: number = Math.max.apply(null, arr);
    return maxValue;
  };

  const max: number = findMaxValue(periodData);
  const getHeightArr: number[] = periodData.map((item) => item / max);

  return (
    <Container index={index}>
      <Period>{user.period}일</Period>
      <Rectangle
        period={user.period}
        getHeightArr={getHeightArr}
        index={index}
      />
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

const Rectangle = styled.div<RectangleProps>`
  width: 30px;
  height: ${(props) => `calc(160px * ${props.getHeightArr[props.index]})`};
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 8px;
`;

const StartDate = styled.p`
  margin: 8px 0 20px;
  text-align: center;
`;
