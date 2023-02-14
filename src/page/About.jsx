import { Stack, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputDate from '../components/UI/Input/InputDate'
import { dataFetch } from '../services/dataServices'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name,
  calories,
  fat,
  carbs,
  protein,
) {
  return { name, calories, fat, carbs, protein };
}
  
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const About = () => {

  const [value, setValue] = useState('2022-10-05');

  const dispatch = useDispatch()

  const {currencyAddData} = useSelector(state => state.currencyAdd);

  

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // let simple = new Date(value).getTime()
  // let simple = '20200302'
  
  useEffect(() => {
    
    let simple = new Date(value).toLocaleString("fr-CA", options).replace(/(\.|-|\/|\\| )/g,"")
    console.log(simple)
    dispatch(dataFetch(simple))
    console.log(currencyAddData)
  }, [value]);

  return (
    <Container sx={{ pt: 3, pb: 3 }}>
      <Toolbar/>
      <Stack spacing={2}>
        <InputDate
          value = {value}
          setValue = {setValue}
          label = 'simple'
        />
        {/* <Typography>1 UAH = {currencyAddData[0].rate} {currencyAddData[0].cc}</Typography> */}
      
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">rate</TableCell>
            <TableCell align="right">cc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencyAddData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.txt}
              </TableCell>

              <TableCell align="right">{row.rate}</TableCell>
              <TableCell align="right">{row.cc}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Stack>
    </Container>
  )
}

export default About