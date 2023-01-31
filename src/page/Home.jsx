import { Box, Container, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import InputWrap from '../components/InputWrap';
import { dataFetch, ratesFetch } from '../services/dataServices';


const Home = () => {

  const dispatch = useDispatch()
   
  useEffect(() => {
    dispatch(dataFetch())
    dispatch(ratesFetch())
  }, []);

  return (
    <Container>
      <Box component="main" sx={{ pt: 3 }}>
        <InputWrap/>
      </Box>
    </Container>
  )
}

export default Home