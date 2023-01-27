import React from 'react'
import Graph from './Graph'
import { Button,Box, Typography} from '@mui/material'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Stats = ({wpm,accuracy,graph,retake,acrcyGraph}) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event,newValue) => {
    setValue(newValue);
  };
 return (
    <div>
      <Box sx={{display:'flex',
      flexDirection:'column'
      ,
      alignItems:'center',
      justifyContent:'center',
      
      color:'#6d1b7b'
      }}>
      <Typography variant='h4' sx={{m:2,}}>WPM : {wpm()}</Typography>
       <Typography variant='h4' >Accuracy : {accuracy()+'%'}</Typography>
       <Button variant='contained' onClick={()=>retake()} sx={{m:3}}>Restake</Button>
       </Box>

        <Box sx={{marginLeft:'200px',marginRight:'200px'}}> 
        <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        >
        <Tab value="one" label="WPM" />
        <Tab value="two" label="Accuracy" />
        </Tabs>
        <Box >{value==='one'?
        <Graph value='one' graph={graph} labeld='WPM'/>:
        <Graph value='two' graph={acrcyGraph} labeld='Accuracy'/>}
        </Box>

        </Box>
       
    </div>
  )
}

export default Stats