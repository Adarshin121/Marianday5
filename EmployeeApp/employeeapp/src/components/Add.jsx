import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Add = (props) => {
  var [inputs, setInputs] = useState({ Name: "", Age: "", Dept: "", Sal: "" });
  var navigate=useNavigate()
  var location =useLocation()
  console.log("hi",location.state);
  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  const addHandler=()=>{
    if (location.state !== null) {
      axios
        .put("http://localhost:3004/edit/"+location.state.val._id,inputs)
        .then((res) => {
            alert(res.data.message)
            navigate('/')
            
        })
    }else{
        axios
        .post("http://localhost:3004/add", inputs)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          navigate('/')
        })
        .catch((err) => {
          console.log(err);
        });
  }
}

  useEffect(() => {
    if (location.state !== null) {
      setInputs({
        ...inputs,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Sal: location.state.val.Sal,
      });
    }
  }, []);

  return (
    <div>
        <TextField
        variant='outlined'
        label="Name"
        name="Name"
        value={inputs.Name}
        onChange={inputHandler}
        />
        <br /><br />
        <TextField
        variant='outlined'
        label="Age"
        name="Age"
        value={inputs.Age}
        onChange={inputHandler}
        />
        <br /><br />

      <TextField
        variant="outlined"
        label="Department"
        onChange={inputHandler}
        name="Dept"
        value={inputs.Dept}
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Salary"
        onChange={inputHandler}
        name="Sal"
        value={inputs.Sal}
      />
        <br /><br />
        <Button variant='contained' color='secondary' onClick={addHandler}>submit</Button>
    </div>
  )
}

export default Add