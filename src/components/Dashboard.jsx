import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Analytic from "./Analytic";
import History from "./History";
function Dashboard() {
  return (
    <Section>
      <div className="grid">
        <Navbar />
        <Analytic />
        <History />
      </div>
    </Section>
  );
}

export default Dashboard;
const Section = styled.section`
  margin-left: 5vw;
  margin-right: 14px;
  padding: 2rem;
  height: 60rem;
  background-color: #f5f5fd;
  .grid {
    margin-top: 0.5rem;
    z-index: 2;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
