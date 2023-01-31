import { Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import InputDate from '../components/UI/Input/InputDate'

const About = () => {

  const [value, setValue] = useState();

  return (
    <Container sx={{ pt: 3 }}>
      <Toolbar/>
      <InputDate
        value = {value}
        setValue = {setValue}
        label = 'simple'
      />
    </Container>
  )
}

export default About