import React from 'react'
import styled from "styled-components";

function Show({ data , id}) {
    // console.log(id)

    var i = -1;
    return (
        <Dash>
            <h3 className="text-center">Edit  Or  Delete</h3>
            <table id="dtDynamicVerticalScrollExample" className="table table-striped table-bordered col-md-12" cellspacing="0"
  width="100 ">
                <thead>
                    <tr>
                        <th scope="col">title</th>
                        <th scope="col">Id</th>
                        <th scope="col">card-Img</th>
                        <th scope="col">Title-Img</th>
                        <th scope="col">BackGround-Img</th>
                        <th scope="col">Subtitle</th>
                        <th scope="col">Description</th>
                        <th scope="col">type</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    
                       
                        {
                            data.map(movies => {
                                i++;
                                return (
                                    <tr className="col-12">
                                        <td scope="col-6">{movies.title}</td>
                                        <td scope="col-6">{id[i]}</td>
                                        <td scope="col-3">{movies.cardImg}</td>
                                        <td scope="col-3">{movies.titleImg}</td>
                                        <td scope="col-3">{movies.backgroundImg}</td>
                                        <td scope="col-3">{movies.subTitle}</td>
                                        <td scope="col-3">{movies.description}</td>
                                        <td scope="col-4">{movies.type}</td>
                                        <td scope="col-2"></td>
                                        <td scope="col-2"></td>
                                        </tr>
                                )
                            })
                        }

                    
                </tbody>
            </table>
        </Dash>
    )
}

export default Show

const Dash = styled.div`


td {
  word-wrap:break-word;
  word-break:break-all;
}
`;
