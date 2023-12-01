import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function GetUser() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:3000/users/' + id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div className="d-flex vh-100 w-100 justify-content-center align-items-center bg-light">
            <div className="pb-5 rounded w-50 border shadow px-5 pt-3 bg-white ">
                <h1>Details of User</h1>
                <div className="mb-2">
                    <strong>Name {data.name}</strong>
                </div>
                <div className="mb-2">
                    <strong>Email {data.email}</strong>
                </div>
                <div className="mb-3">
                    <strong>Phone Number {data.phone}</strong>
                </div>
                <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
                <Link to="/" className="btn btn-primary ms-3">Back</Link>
            </div>
        </div>
    );
}