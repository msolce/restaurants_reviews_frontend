import React, { useState } from "react";


export default function Login(props) {

  const { user, setUser } = props;
  console.log("🚀 ~ file: Login.js ~ line 7 ~ Login ~ user", user)

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

  };

  const login = e => {
    const name = document.getElementById('name');
    const id = document.getElementById('id');
    const user = {
      name: name.value,
      id: id.value,
      login: true
    };
    setUser(user);
  }



  return (
    <>
      {user.login ? (<button onClick={props.logout} className="btn btn-success">Logout</button>) : (<>
        <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="user">Username</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={user.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={user.id}
                onChange={handleInputChange}
                name="id"
              />
            </div>

            <button onClick={login} className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      </>)}
      <h1>
        {user.name}
        _________
        {user.id}
      </h1>
    </>
  );
}
