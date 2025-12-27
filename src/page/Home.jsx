import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate({
      pathname: "/data",
    });
  };

  return (
    <>
      <h1>Home Page</h1>
      <button type="button" onClick={handleNavigate}>
        Go to Data Page
      </button>
    </>
  );
}
