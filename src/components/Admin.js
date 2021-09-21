import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adminContext } from '../App'
import db from '../firebase'
import Sam from './Sam'


function Admin(props) {
    const [state, setstate] = useContext(adminContext);
    const [list, setlist] = useState();
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
                setlist(querySnapshot.docs);
            });
    }


    return (
        <>
            
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Sam data={list}/>
                    </div>
                </div>
           
        </>
    )
}

export default Admin;


