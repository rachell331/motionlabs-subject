import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Passenger } from "./components/Passenger";

export interface PassengerDataType {
  _id: string;
  name: string;
  trips: number;
  airline: {
    id: number;
    name: string;
    country: string;
    logo: string;
    slogan: string;
  }[];
}

export const PassengerList = () => {
  const [pageNum, setPageNum] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [passengerData, setPassengerData] = useState<PassengerDataType[]>([
    {
      _id: "",
      name: "",
      trips: 0,
      airline: [
        {
          id: 1,
          name: "",
          country: "",
          logo: "",
          slogan: "",
        },
      ],
    },
  ]);

  const moreFetchData = async () => {
    setIsLoading(true);
    setPassengerData((prev) => [...prev, ...passengerData]);
    setPageNum((prev) => prev + 1);
    setIsLoading(false);
  };

  const infiniteScroll = useCallback(() => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );

    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    const clientHeight = document.documentElement.clientHeight;

    scrollHeight -= 100;
    if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
      moreFetchData();
    }
  }, []);

  // Data fetching
  useEffect(() => {
    axios
      .get(`https://api.instantwebtools.net/v1/passenger?page=0&size=10`)
      .then((res) => {
        setPassengerData(res.data.data);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  }, []);

  //infinitescroll with pagination
  const getFetchData = async () => {
    await axios
      .get(
        `https://api.instantwebtools.net/v1/passenger?page=${pageNum}&size=10`
      )
      .then((res) => {
        const result = res.data.data;
        setPassengerData((prev) => [...prev, ...result]);
        setPageNum(pageNum + 1);
        setIsLoading(true);
      })
      .catch((err) => {
        return Promise.reject(err);
      });
  };

  useEffect(() => {
    getFetchData();
  }, [infiniteScroll]);

  useEffect(() => {
    window.addEventListener("scroll", infiniteScroll, true);
    return () => window.removeEventListener("scroll", infiniteScroll, false);
  }, [infiniteScroll]);

  return (
    <Container>
      <Title>Passenger List</Title>
      {passengerData.map((passenger, i: number) => (
        <Passenger
          passenger={passenger}
          key={i}
          airlineObj={{
            id: 0,
            name: "",
            country: "",
            logo: "",
            slogan: "",
          }}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  ${({ theme }) => theme.wrapper};
  margin-top: 70px;
  padding-top: 30px;
`;

const Title = styled.h2`
  padding: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;
