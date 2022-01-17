import React from "react";
import { HomeContent, Herohome, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Navbar bg="65vh">Login/Signup</Navbar>
      <Herohome />
      <HomeContent />
    </>
  );
}
