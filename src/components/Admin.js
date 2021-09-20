import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { adminContext } from '../App'
import './Admin.css'


function Admin() {
    const [state, setstate] = useContext(adminContext)
    const history = useHistory();

    useEffect(() => {
        if (state === true) {
            history.push('/admin');
        } else {
            history.push('/')
        }
    }, state)

    return (
       <>
        <div >
            <ul className ="plus">
                <li><i >+</i></li>
                <li className="find"><i >find</i></li>
            </ul>
        </div>
    </>
    )
}

export default Admin;
