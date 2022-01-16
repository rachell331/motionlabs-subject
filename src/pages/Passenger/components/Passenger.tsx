import React from "react";
import styled from "styled-components";
import { PassengerDataType } from "../PassengerList";

interface PassengerProps {
  passenger: PassengerDataType;
  airlineObj: {
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
  };
}

export const Passenger = ({ passenger }: PassengerProps) => {
  const airlineObj = passenger.airline[0];

  return (
    <Container>
      <PassengerInfoBox>
        <PassengerName>{passenger.name}</PassengerName>
        <Trips>{passenger.trips} trips</Trips>
      </PassengerInfoBox>
      <AirlineInfoBox>
        <AirlineLogo src={airlineObj.logo} />
        <AirlineSlogan>{airlineObj.slogan}</AirlineSlogan>
      </AirlineInfoBox>
      <PassengerId>{passenger._id}</PassengerId>
    </Container>
  );
};

const Container = styled.div`
  width: 560px;
  margin: 0 auto;
  padding: 20px 0;
  border-top: 1px solid #f1f3f9;
`;

const PassengerInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PassengerName = styled.p`
  font-weight: bold;
`;

const Trips = styled.p`
  font-size: 0.85rem;
  text-align: right;
`;

const AirlineInfoBox = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 20px;
  background-color: #f2f2f2;
`;

const AirlineLogo = styled.img`
  display: block;
  width: 80px;
  height: 16px;
  object-fit: contain;
`;

const AirlineSlogan = styled.p`
  height: 16px;
  padding-left: 20px;
  color: ${({ theme }) => theme.mainColor};
  font-size: 0.9rem;
  line-height: 1.15;
`;

const PassengerId = styled.p`
  margin-top: 10px;
  color: #d3d3d3;
  font-size: 0.9rem;
  font-weight: bold;
  text-align: right;
`;
