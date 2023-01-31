 
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { handleExchange, setCurrentRate, setFromRate, setFromValue, setToRate, setToValue } from '../store/redusers/currency.slice';
import InputSymbol from './UI/Input/InputSymbol';
import CurrencyExchangeTwoToneIcon from '@mui/icons-material/CurrencyExchangeTwoTone';
import { isEmpty } from "lodash"

const InputWrap = () => {

  const dispatch = useDispatch()


  const {
    currencyData,
    toRate,
    fromRate,
    toValue,
    fromValue,
    currentRate,
        } = useSelector(state => state.currency);
    

  const Rate = useMemo(
    () =>{
      if(!isEmpty(currencyData)){
        const curr1 =  currencyData.find(item => item.cc === fromRate).rate
        const curr2 = currencyData.find(item => item.cc === toRate).rate
        dispatch(setCurrentRate(curr1/curr2)) 
      }
    },
    [fromRate, toRate, currencyData]
  )
      
  useEffect(() => {
    dispatch(setToValue(fromValue))
  }, [fromRate, toRate])

  const simpleOption = []

  

  if(currencyData)
    currencyData.map((el)=>
      simpleOption.push(Object.entries(el)[3][1])
    )
     
  return (
    <Box display='flex' 
        justifyContent='center' 
        alignItems='center'
        flexDirection='column'
        height="80vh"
        gap="20px"
        >
      <Box display='flex' gap='15px'>
        <TextField
          value={fromValue}
          onChange = {e=>dispatch(setFromValue(Number(e.target.value)))}
          label = 'Input value'
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "orange",
              },
            },
          }}
        />
        <InputSymbol
          Rate = {fromRate}
          setRate = {(e)=> dispatch(setFromRate(e))}
          options = {simpleOption}
        />
      </Box>
      <CurrencyExchangeTwoToneIcon
        onClick={()=>dispatch(handleExchange())}
      />
      <Box display='flex' gap='15px'>
        <TextField
          value={toValue}
          onChange = {e=>dispatch(setToValue(Number(e.target.value)))}
          label = 'Input value'
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "orange",
              },
            },
          }}
        />
        <InputSymbol
          Rate = {toRate}
          setRate = {(e)=> dispatch(setToRate(e))}
          options = {simpleOption}
        />
      </Box>
    </Box>
  )
} 

export default InputWrap