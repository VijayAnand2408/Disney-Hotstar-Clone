import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import db from "../../firebase";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'



function Add() {

    const initialState = {
        title: '',
        cardImg: '',
        titleImg: '',
        backgroundImg: '',
        subTitle: '',
        description: '',
        iframe: '',
        type: ''
    }

    const [values, setvalues] = useState(initialState);
    const history = useHistory();


    if ((window.localStorage.getItem("AdminLogged"))) {
        history.push('/add');
    } else {
        history.push('/')
    }


    const handler = e => {
        var name = e.target.name;
        var value = e.target.value;
        setvalues({
            ...values,
            [name]: value
        })
    }

    const hand = (e) => {
        e.preventDefault();
        if (window.confirm("Please Confirm !")) {
            db.collection('movies').add(values);
            history.push('/admin')
        }
    }


    return (
        <EditForm>
            <h3 className="text-center">Add a New Movie</h3>
            <div className="border rounded-lg ">
                <form className="mr-5 mt-5 ml-5 mb-3">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label >Title</label>
                            <input className="form-control" placeholder="Enter the Title" value={values.title} name="title"
                                onChange={handler} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Type</label>
                            <input className="form-control" placeholder="Enter the Type" value={values.type} name="type" onChange={handler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label >Background-Image</label>
                        <input className="form-control" placeholder="Background Image Url" value={values.backgroundImg} name="backgroundImg" onChange={handler} />
                    </div>
                    <div className="form-group">
                        <label >Card-Image</label>
                        <input className="form-control" placeholder="Card Image Url" value={values.cardImg} name="cardImg" onChange={handler} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label> Subtitle</label>
                            <input className="form-control" placeholder="year • hr min • Genre" value={values.subTitle} name="subTitle" onChange={handler} />
                        </div>
                        <div className="form-group col-md-6">
                            <label >Title-Image</label>
                            <input className="form-control" placeholder="Title Image Url" value={values.titleImg} name="titleImg" onChange={handler} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Trailer</label>
                        <input className="form-control" placeholder="Place the Trailer Url " value={values.iframe} name="iframe" onChange={handler} />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input className="form-control" placeholder="description" value={values.description} name="description" onChange={handler} />
                    </div>
                    <button type="submit" className="btn btn-primary col mt-5" onClick={hand} >Add</button>
                </form>
            </div>
        </EditForm>
    )
}

export default Add


const EditForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: gray;
  flex-direction: column;

  input{
      color:black;
  }
`;