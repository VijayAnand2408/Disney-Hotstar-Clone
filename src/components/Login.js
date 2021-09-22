import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Header from './Header';
import { adminContext } from '../App'


const Login = (props) => {
  const [state, setstate] = useContext(adminContext)
  const history = useHistory();
  const [name, setname] = useState("");
  const [pword, setpword] = useState("");

  const buttonHandler = (e) => {
    e.preventDefault()
    if (name === "Admin" && pword === "123") {
      setstate(true)
      history.push('/admin')
    } else {
      window.alert("Please Sign Up!!!")
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Content>
          <CTA>
            <Box>
              <Input>
                Username:
                <User placeholder="Username"
                  type="text"
                  onChange={(e) => setname(e.target.value)}>
                </User><br />
                Password:
                <User placeholder="Password"
                  type="password"
                  onChange={(e) => setpword(e.target.value)}>
                </User><br />
              </Input>
              <SignUp onClick={buttonHandler}>LOGIN</SignUp><Line />

            </Box>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional fee
              with a Disney+ subscription. As of 03/26/21, the price of Disney+
              and The Disney Bundle will increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          <BgImage />
        </Content>
      </Container>
    </>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 22rem;
  border: 1px solid rgba(255,255,255,0.4);
  background-color: rgba(255,255,255,0.1);
  box-shadow:10px 10px 10px black;
  backdrop-filter: blur(15px);
  border-radius: 15px;
  margin-bottom:4rem;
  margin-top: 7rem;
  transform: all 0.3s ease-in-out;
  font-family: Avenir-Roman, sans-serif;

`;

const User = styled.input`
  width: 15rem;
  border-radius: 0.4rem;
  height: 2rem;
`;

const Input = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   font-family: 'Yomogi', cursive;
   
`;

const SignUp = styled.button`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  
  width: 35%;
  letter-spacing: 1.5px;
  
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  height: 3rem;

  &:hover {
    background-color: #0483ee;
    cursor: pointer;
  }
`;

const Line = styled.hr`
  width: 60%;
  margin-top: 5%;
  border:.5px solid gray;
`;

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

export default Login;
