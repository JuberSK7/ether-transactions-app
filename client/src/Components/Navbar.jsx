import React from "react";
import ethLogo from "../Images/ethLogo.png";
import styled from "styled-components";
import { setGlobalState } from "../Data/data";

const Navbar = () => {
  return (
    <HeadeContainer>
      <HeaderLogo>
        <img src={ethLogo} width={52} />
      </HeaderLogo>

      <HeaderMenu>
        <a href="#">Transfer</a>
        <a href="#">Recives</a>
        <a href="#">Docs</a>
        <a href="#">Maneage</a>
        <a href="#">
          <button onClick={() => setGlobalState("modal", "scale-100")}>
            Transfer
          </button>
        </a>
      </HeaderMenu>
    </HeadeContainer>
  );
};

export default Navbar;

const HeadeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 74px;
  background-color: #c0c0c0;
`;

const HeaderLogo = styled.div`
  margin-left: 44px;
  cursor: pointer;
`;

const HeaderMenu = styled.div`
  margin-left: 38px;
  margin-right: 24px;

  a {
    color: #101522;
    text-decoration: none;
    font-weight: bold;
    padding: 0 20px;
  }

  button {
    border: none;
    border-radius: 1rem;
    cursor: pointer;
    color: #fff;
    background-color: #154360;
    font-size: 1rem;
    font-weight: 100;
    overflow: hidden;
    padding: 1rem 2rem;
    position: relative;
    text-decoration: none;
    transition: 0.2s transform ease-in-out;
    will-change: transform;
    z-index: 0;
  }
`;
