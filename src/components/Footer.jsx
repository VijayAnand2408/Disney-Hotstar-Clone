import React from 'react'
import styled from "styled-components";

function Footer() {
    return (
        <div className="container-fluid">
            <Foot>
                <div className="container-fluid">
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <p className="lead text-center">This Hotstar-Clone is bulit for education purpose not for commercial purpose.<br /><span className="text-center">Created By <a href="https://vijay-anand.netlify.app" target="_blank">Vijay Anand.M</a></span></p>
                        </div>
                    </div>
                </div>
            </Foot>
        </div>
    )
}

export default Footer

const Foot = styled.div`
  .jumbotron{
      background-color: #090b13 !important;
      padding-bottom:0;
  }

  .lead{
      margin-top: 2rem;
      margin-bottom: 0;
      padding-bottom: 0;
      font-size: larger;

      a{
          color:orange;
      }
  }

  @media only screen and (min-width: 480px){
    .lead{
        margin-top: 5rem;
        font-size: medium;
    }
}
`;