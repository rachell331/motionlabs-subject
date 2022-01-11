import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Main } from "./pages/Main";
import { Report } from "./pages/Report/Report";
import { PassengerList } from "./pages/Passenger/PassengerList";

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/report" element={<Report />} />
        <Route path="/passenger" element={<PassengerList />} />
      </Routes>
    </BrowserRouter>
  );
};
