import React, { useContext, useEffect, useState } from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adminContext } from '../App'
import db from '../firebase'
import Sam from './Sam'
import './Admin.css'
import { Link } from "react-router-dom";


function Admin(props) {
    const [state, setstate] = useContext(adminContext);
    const [list, setlist] = useState([]);
    const [id, setid] = useState([])
    const history = useHistory();

    useEffect(() => {
        getMarkers();
    }, [])

    useEffect(() => {
        if (state === true) {
            history.push('/admin');
        } else {
            history.push('/')
        }
    }, [state])

    const getMarkers = async () => {
        await db.collection('movies').get()
            .then(querySnapshot => {
                foo(querySnapshot.docs, querySnapshot)
            });
    }

    var data = [];
    var Id = [];
    const foo = (a, b) => {
        a.map((b) => {
            data.push(b.data())
        })
        setlist(data);
        b.forEach(id => {
            Id.push(id.id);
        })
        setid(Id)
    }



    return (
        <>
            <Sam data={list} id={id} />
            <Dah>
                <ul className="find">
                    <h3>Add</h3>
                    <Link to={'/add'}>
                        <li><i >+</i></li>
                    </Link>
                </ul>
            </Dah>
        </>
    )
}

export default Admin;

const Dah = styled.div`
h3{
  text-decoration: none;
}

li{
    list-style-type:none;
    text-decoration: none;
}
`;

