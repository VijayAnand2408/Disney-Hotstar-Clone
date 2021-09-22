import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adminContext } from '../App'
import db from '../firebase'
import Sam from './Sam'
import './Admin.css'


function Admin(props) {
    const [state, setstate] = useContext(adminContext);
    const [list, setlist] = useState([]);
    const [id, setid] = useState([])
    const history = useHistory();

    useEffect(() => {
        if (state === true) {
            history.push('/admin');
            getMarkers()
        } else {
            history.push('/')
        }
    }, state)


    const getMarkers = async () => {
        await db.collection('movies').get()
            .then(querySnapshot => {
                foo(querySnapshot.docs, querySnapshot)
                querySnapshot.forEach(a => {
                    // console.log(a.id)
                });
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


    //    console.log(id)

    return (
        <>
            <Sam data={list} id={id} />
            <ul >
                <li><i >+</i></li>
            </ul>
        </>
    )
}

export default Admin;


