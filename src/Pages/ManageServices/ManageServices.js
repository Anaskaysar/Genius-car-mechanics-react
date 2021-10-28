import React, { useEffect, useState } from 'react';
import './style.css'

const ManageServices = () => {
    const [services,setServices]=useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleDelete=id=>{
        const url=`http://localhost:5000/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                alert("Deleted")
                const remaining=services.filter(service=>service._id!==id);
                setServices(remaining);
            
            }
        })
    }
    return (
        <div>
            <h1>Manage Services</h1>
            {
                services.map(service=><div className="service-manage" key={service._id}>
                    <h3>Name: {service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;