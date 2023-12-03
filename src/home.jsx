import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {

    // State variable to hold the fetched data
    const [data, setData] = useState([]);

     // useEffect hook to fetch data when the component mounts
    useEffect(() => {
        axios.get('http://localhost:3000/users')
            .then(res => setData(res.data))  // Update the state with the fetched data
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("do you want to delete record?");
        if (confirm) {
            axios.delete('http://localhost:3000/users/' + id)
                .then(res => {
                    window.location.reload();
                }).catch(err => console.log(err));
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>Users</h1>
            <div className="w-75 shadow bg-white rounded border p-4">
                <div className="d-flex justify-content-end">
                    <Link to="/add" className="btn btn-success">Add New</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>
                                        <Link to={`/get/${item.id}`} className="btn btn-sm btn-info me-2">View</Link>
                                        <Link to={`/update/${item.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <button onClick={(e) => handleDelete(item.id)} className="btn btn-sm btn-danger">Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}