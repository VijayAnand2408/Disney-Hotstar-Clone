import React, {  useEffect } from 'react'
import Show from './Show'
import styled from "styled-components";

function Sam({ data, id }) { 
    // console.log(id)   
    return (
        <AdminD>
            <Show data={data} id={id}/>
        </AdminD>
    )
}

export default Sam

const AdminD = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 margin: 0;

`;