import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

function Show({ data, id }) {
    // console.log(id)
    var i = -1;
    return (
        <Dash>
            <h3 className="text-center">Edit  Or  Delete</h3>
            <table id="dtDynamicVerticalScrollExample" className="table table-striped table-bordered col-md-12">
                <thead>
                    <tr>
                        <th scope="col">**Title**</th>
                        <th scope="col">Id</th>
                        <th scope="col">card-Img</th>
                        <th scope="col">Title-Img</th>
                        <th scope="col">BackGround-Img</th>
                        <th scope="col">Subtitle</th>
                        <th scope="col">Description</th>
                        <th scope="col">type</th>
                        <th scope="col">Edit/Delete</th>
                    </tr>
                </thead>


                {
                    data.map(movies => {
                        i++;
                        return (
                            <tbody key={i}>
                                <tr key={id[i]}>
                                    <td scope="col">{movies.title}</td>
                                    <td scope="col-6">{id[i]}</td>
                                    <td scope="col-3">{movies.cardImg}</td>
                                    <td scope="col-3">{movies.titleImg}</td>
                                    <td scope="col-3">{movies.backgroundImg}</td>
                                    <td scope="col-3">{movies.subTitle}</td>
                                    <td scope="col-3">{movies.description}</td>
                                    <td scope="col-4">{movies.type}</td>
                                    <Wap>
                                        <Link to={`/edit/` + id[i]}>
                                            <td scope="col"><i className="far fa-edit"></i></td>
                                        </Link>
                                        <Link to={`/delete/` + id[i]}>
                                            <td scope="col"><i className="fas fa-trash-alt fa-5x"></i></td>
                                        </Link>
                                    </Wap>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </Dash>
    )
}

export default Show

const Dash = styled.div`

.table td{
    vertical-align: auto;
}

td {
  word-wrap:break-word;
  word-break:break-all;
  height: 100%;
}

Link{
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
}

h3{
    padding: 2rem;
    text-align: center;
    font-family: 'Yomogi', cursive;
    font-weight: 900;
}

@media screen and (max-width: 640px) {
    h3{
        margin-left: 12rem;
    }
}
`;

const Wap = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
 a{
     color:white;
 }

 a:hover{
     color: orange;
 }
`;