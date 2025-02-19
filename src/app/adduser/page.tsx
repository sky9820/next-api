"use client"

import { useState } from "react"

export default function Page(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const addUser = async ()=>{
        console.log(name, age, email);
        let response = await fetch("/api/users",{
            method: "POST",
            body: JSON.stringify({name, age, email})
        });
        const data = await response.json();
        if(data.success){
            alert('User Added');
        }else{
            alert('Some Error in adding user data, please try again.');
        }
        //console.log(response);
    } 
    return(
        <div  className="userlists align-center">
            <h1>Add New User:</h1>
            <input type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />
            <input type="text" name="age" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter Age" />
            <input type="text" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <button onClick={addUser} className="link">Add User</button>
        </div>
    )
}