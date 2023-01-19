import React from "react";
import styled from "styled-components";
import { BsCreditCard } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AiOutlineMore } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { BsBank } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiCreditsCurrency } from "react-icons/gi";

function Analytic() {
  return (
    <Section>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BsCreditCard />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Transfer via</h6>
          <h6>Card number</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BiTransfer />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Current </h6>
          <h6>Balance</h6>
        </div>
        <div className="money">
          <h5>$1200</h5>
        </div>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BsFillArrowDownCircleFill style={{ color: "green" }} />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Total </h6>
          <h6>Credits</h6>
        </div>
        <div className="money">
          <h5>$1500</h5>
        </div>
      </div>
      <div className="analytic ">
        <div className="design">
          <div className="logo">
            <BsFillArrowUpCircleFill style={{ color: "red" }} />
          </div>
          <div className="action">
            <AiOutlineMore />
          </div>
        </div>
        <div className="transfer">
          <h6>Total </h6>
          <h6>Debits</h6>
        </div>
        <div className="money">
          <h5>$1500</h5>
        </div>
      </div>
    </Section>
  );
}

export default Analytic;
const Section = styled.section`
  display: flex;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  margin: 0 60px;
  .analytic {
    justify-content: space-between;
    padding: 1rem 2rem 1rem 2rem;
    border-radius: 1rem;
    color: black;
    background-color: white;
    justify-content: space-evenly;
    align-items: center;
    transition: 0.5s ease-in-out;
    width: 170px;

    .design {
      display: flex;
      align-items: center;

      .logo {
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          font-size: 2rem;
        }
      }
      .action {
        margin-left: 80px;
        svg {
          font-size: 1.5rem;
        }
      }
    }
    .transfer {
      margin-top: 20px;
      color: grey;
    }
    .money {
      margin-top: 20px;
    }
  }
`;
