import React, { useState } from 'react'
import { LoginTypeModel, loginSubmit } from '../requests/login';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [user, setUser] = useState({} as LoginTypeModel);
  const navigate = useNavigate();
  return (
    <form onSubmit={(e)=>{
      loginSubmit(e,user).then((data)=>{
        if(data.isAuthenticated){
          localStorage.setItem("token",data.token);
          navigate("/");
        }
      }).catch((err)=>{console.log(err.message);})
    }}>
      <div className="mb-3" >
        <label htmlFor="exampleInputEmail1" className="form-label">User Name </label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setUser({ ...user, userName: e.target.value })} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setUser({ ...user, password: e.target.value })} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}
