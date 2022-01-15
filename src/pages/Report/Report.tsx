import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BarChart } from "./BarChart";
import { LineChart } from "./LineChart";

export interface UserDataType {
  startDate: string;
  endDate: string;
  period: number;
  cycle: number;
}
export const Report = () => {
  const [userData, setUserData] = useState<UserDataType[]>([
    { startDate: "", endDate: "", period: 0, cycle: 0 },
  ]);
  useEffect(() => {
    axios
      .get("https://motionz-kr.github.io/playground/apis/report.json")
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <Title>User Report</Title>
      <ChartWrapper>
        <IndexBox>
          <Cycle></Cycle>
          <Unit>활동 주기</Unit>
          <Period></Period>
          <Unit>활동 기간, 시작일</Unit>
        </IndexBox>
        <LineChart userData={userData} />
        <BarChart userData={userData} periodData={[]} />
      </ChartWrapper>
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.wrapper};
  height: 100vh;
  padding: 20px;
  overflow: hidden;
`;

const Title = styled.h2`
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;

const ChartWrapper = styled.div`
  width: 560px;
  height: 480px;
  border: 1px solid #eaeaea;
  border-radius: 10px;
`;

const IndexBox = styled.div`
  padding: 10px;
  text-align: right;
`;
const Cycle = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 5px;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 50%;
`;
const Unit = styled.span`
  font-size: 0.65rem;
  font-weight: 100;
`;
const Period = styled.span`
  display: inline-block;
  width: 24px;
  height: 8px;
  margin: 0 5px 0 15px;
  background-color: ${({ theme }) => theme.mainColor};
  border-radius: 4px;
`;
