import React, {useState} from "react";
export default function Hookother(){
    const[user,setUser] = useState({
        name : "Guest",
        age : 20,
        ce : true,
        city : "Rajkot" 
    });
    return (
    <>
        <input type="text" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}></input>
        <br/>

        <input type="text" value={user.age} onChange={(e) => setUser({...user, age: e.target.value})}></input>
        <br/>

        <input type="text" value={user.city} onChange={(e) => setUser({...user, city: e.target.value})}></input>
        <br/>

        <label>CE</label>

        <input type="checkbox" checked={user.ce} onChange={(e)=> setUser({...user,ce:e.target.value})}></input>
        <br/>

        <h1>{user.name} is {user.age} years old and lives in {user.city}</h1>
    </>
    );
}