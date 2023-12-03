import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: ''
    }
    );

    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/users', value)
            .then(res => {
                console.log(res);
                navigate('/')
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="d-flex vh-100 w-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white px-5 pt-3 shadow pb-5 rounded">

                <h1>Add a user</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name"
                            onChange={(e) => setValue({ ...value, name: e.target.value })} placeholder="Enter user name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email"
                            onChange={(e) => setValue({ ...value, email: e.target.value })} placeholder="Enter user email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control" id="phone"
                            onChange={(e) => setValue({ ...value, phone: e.target.value })} placeholder="Enter user phone number" />
                    </div>
                    <button className="btn btn-success" type="submit">Submit</button>
                    <Link to="/" className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
}