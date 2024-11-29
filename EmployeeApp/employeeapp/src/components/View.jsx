import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const View = () => {
    var [emp,setemp]=useState([])
    var navigate = useNavigate();

    useEffect(()=>{
    axios.get("http://localhost:3004/view")
    .then((res)=>{
        setemp(res.data)
    })
},[])

const delValue = (id) => {
    console.log(id);
    axios.delete("http://localhost:3004/remove/" + id)
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
  };

  const updateValue = (val) => {
    console.log("up clicked");
    navigate("/add", { state: { val } });
  };
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>salary</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {emp.map((val)=>{
                        return(
                        <TableRow>
                        <TableCell>{val.Name}</TableCell>
                        <TableCell>{val.Age}</TableCell>
                        <TableCell>{val.Dept}</TableCell>
                        <TableCell>{val.Sal}</TableCell>
                        <TableCell>
                        <Button onClick={() => {delValue(val._id);}}>Delete</Button>
                        <Button onClick={() => {updateValue(val);}}>Update
                  </Button>
                        </TableCell>
                    </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default View