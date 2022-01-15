import React from "react";
import styled from "styled-components";
import { UserDataType } from "./Report";
import { Dot } from "./components/Dot";
import lineSVG from "../../assets/Line.svg";

interface UserProps {
  userData: UserDataType[];
}

interface CycleProps {
  cycle: number;
  cycleData: number[];
  index: number;
  getAngleDeg(x: number | undefined, y: number): number;
  getWidth(params: number): number;
  bottomErrorCorrection(params: number, cycle: number): string | undefined;
  leftErrorCorrection(params: number): string;
}

export const LineChart = ({ userData }: UserProps) => {
  const cycleData: Array<number> = userData.map((user) => user.cycle);

  const getAngleDeg = (x: number, y: number) => {
    const angleRad: number = Math.atan(y / x);
    const angleDeg = (angleRad * 180) / Math.PI;
    return angleDeg;
  };

  const getWidth = (params: number) => {
    const cosValue: number = 93 / Math.cos(params);
    return cosValue;
  };

  const bottomErrorCorrection = (params: number, cycle: number) => {
    switch (params) {
      case 0:
        return `calc(0.9091% * ${cycle} - 1px)`;
      case 1:
        return `calc(0.9091% * ${cycle} + 3.5px)`;
      case 2:
        return `calc(0.9091% * ${cycle} - 3.5px)`;
      case 3:
        return `calc(0.9091% * ${cycle} - 6px)`;
    }
  };

  const leftErrorCorrection = (params: number) => {
    return `calc(100%/6 * (${params} + 1.12))`;
  };

  return (
    <Container>
      {userData.map((user, i: number) => (
        <React.Fragment key={i}>
          <Dot user={user} i={i} />
          {i < userData.length - 1 && (
            <Line
              src={lineSVG}
              cycle={user.cycle}
              cycleData={cycleData}
              getAngleDeg={getAngleDeg}
              getWidth={getWidth}
              bottomErrorCorrection={bottomErrorCorrection}
              leftErrorCorrection={leftErrorCorrection}
              index={i}
            />
          )}
        </React.Fragment>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  top: 20px;
  height: 220px;
`;

const Line = styled.img<CycleProps>`
  display: inline-block;
  position: absolute;
  left: ${(props) => props.leftErrorCorrection(props.index)};
  bottom: ${(props) => props.bottomErrorCorrection(props.index, props.cycle)};
  width: ${(props) =>
    props.index !== 3
      ? `${props.getWidth(
          props.getAngleDeg(
            -93,
            2.00002 *
              (props.cycleData[props.index + 1] - props.cycleData[props.index])
          )
        )}px`
      : "173px"};
  height: ${(props) => (props.index === 3 ? "2.44px" : "2px")};
  transform-origin: left bottom;
  transform: ${(props) =>
    `rotate(${props.getAngleDeg(
      -93,
      2.00002 *
        (props.cycleData[props.index + 1] - props.cycleData[props.index])
    )}deg)`};
`;
