import { useEffect, useState } from "react";
import axios from "axios"

export const Login = () => {

const [data,setData]= useState([])

useEffect(()=>{
  
  getdata()
},[])

const getdata=()=>{
  axios.get(`http://localhost:8080/users`).then(res=>{
    setData(res.data);

   //  if(data.username == "1"){
       console.log("success")

   //  }
  })
}



  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={getdata}>Login</button>
    </div>
  );
};
