import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GradingIcon from '@mui/icons-material/Grading';

const Grades = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/grade/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);








  return (
    <div>

<h2>
       <GradingIcon/>  &nbsp;Grades
      </h2>
<br /><br />

     <Grid container spacing={2}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{ backgroundColor: "#3c40c6" }}>
              <TableRow>
                <TableCell style={{ color: "white" }}>Grade Item</TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Range
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                Mark 
                </TableCell>
                <TableCell style={{ color: "white" }} align="right">
                  Feedback
                </TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((val, i) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {val.project}
                  </TableCell>
                  <TableCell align="right">{val.range}</TableCell>
                  <TableCell align="right">{val.mark} </TableCell>
                  <TableCell align="right">{val.feedback}</TableCell>
              
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>
  )
}

export default Grades
