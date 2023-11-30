import { Button, TextField } from '@mui/material'
import React from 'react'
import './Submission.css'
const Submissions = () => {
  return (
    <div className='form'>
       <div className='input'>
          <h2>Submissions</h2>
      
      <br />
     
      <TextField variant='outlined' label='Title' fullWidth name='title'/>
      <br /><br />
      <TextField variant='outlined' label='URL' fullWidth name='url'/>
      <br /><br />
      <TextField variant='outlined' label='Comments' fullWidth multiline rows={5}/>
      <br />
      <br />
      <Button variant='contained'>
        Save & Submit
      </Button>
      </div>
    </div>
  )
}

export default Submissions
