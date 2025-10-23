import { useState } from "react";

const Profile = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });


  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.name !== "" && input.password !== "" && input.phone !== "" && input.email !== "" && input.confirmPassword !== "") {
      //dispatch action from hooks
      if(input.password !== input.confirmPassword){
        alert("Password provided is invalid");
      }
    }
    alert("please provide a valid input");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="p-3 col-12">
        <h1>{'Registration'}</h1>
      </div>
      <div className="p-3 col-12">
        <div className="col-md-6 col-12">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Name" name="name" onChange={handleInput} />
        </div>
      </div>
      <div className="p-3 col-12">
        <div className="col-md-6 col-12">
          <label className="form-label">Phone Number</label>
          <input type="text" className="form-control" placeholder="Phone Number" name="phone" onChange={handleInput} />
        </div>
      </div>
      <div className="p-3 col-12">
        <div className="col-md-6 col-12">
          <label className="form-label">Email</label>
          <input type="text" className="form-control" placeholder="Email" name="email" onChange={handleInput} />
        </div>
      </div>
      <div className="p-3 col-12">
        <div className="col-md-6 col-12">
          <label className="form-label">Password:</label>
          <input
            className="form-control"
            type="password"
            id="password"
            name="password"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="p-3 col-12">
        <div className="col-md-6 col-12">
          <label className="form-label">Confirmation Password:</label>
          <input
            className="form-control"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            aria-describedby="user-password"
            aria-invalid="false"
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="p-3">
        <button type="button" className="btn btn-primary btn-submit" onClick={handleSubmitEvent}>Submit</button>
      </div>
    </>
  );
};

export default Profile;