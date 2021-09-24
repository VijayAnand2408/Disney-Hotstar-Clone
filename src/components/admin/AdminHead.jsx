import React from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



function AdminHead() {

  const history = useHistory();


    const out = ()=>{
        history.push('/')
        window.sessionStorage.removeItem("AdminLogged");
    }
    return (
        <div>
            <Nav>
                <Logo>
                    <img src="/images/logo.svg" alt="Disney+" />
                </Logo>
                <Login onClick={out} >Sign Out</Login>
            </Nav>
        </div>
    )
}

export default AdminHead

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  color: #000;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #000;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
    cursor: pointer;
  }
`;
