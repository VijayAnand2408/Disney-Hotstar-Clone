import React,{useContext, useEffect} from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {adminContext} from '../App'


function Admin() {
    const [state,setstate] = useContext(adminContext)
    const history = useHistory();
   
    useEffect(() => {
       if(state===true){
          history.push('/admin');
       } else {
           history.push('/')
       }
    }, state)

    return (
        
        <div>
            <p>Hello There</p>
        </div>
    )
}

export default Admin;
