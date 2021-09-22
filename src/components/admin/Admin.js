import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import db from '../../firebase'
import Sam from './Sam'
import './Admin.css'
import { Link } from "react-router-dom";
import AdminHead from './AdminHead';


function Admin(props) {
    const [list, setlist] = useState([]);
    const [id, setid] = useState([])
    const history = useHistory();

    useEffect(() => {
        getMarkers();
    }, [])

    if ((window.sessionStorage.getItem("AdminLogged"))) {
        history.push('/admin');
    } else {
        history.push('/')
    }


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
            <AdminHead />
            <Dah>
                <ul className="find">
                    <h3>Add</h3>
                    <Link to={'/add'}>
                        <li><i >+</i></li>
                    </Link>
                </ul>
            </Dah>
            <Sam data={list} id={id} />
        </>
    )
}

export default Admin;

const Dah = styled.div`
h3{
  text-decoration: none;
  margin-top: 5rem;
}

li{
    list-style-type:none;
    text-decoration: none;
}
`;

