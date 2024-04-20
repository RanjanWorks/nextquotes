"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Quote from './Quote';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%',background:"#0D0D0D"}}>
      <Box sx={{ borderBottom: 1, borderColor: '#27272a', backgroundColor:"#131316",paddingLeft:"20px" }}>
        <Tabs  textColor="#d5d5e3"
        indicatorColor="secondary" value={value} onChange={handleChange}  variant="scrollable"  allowScrollButtonsMobile scrollButtons="auto" aria-label="basic tabs example" sx={{background:"#131316",color:"white"}} > 
          <Tab  label="Random" {...a11yProps(0)}  />
          <Tab  label="Success" {...a11yProps(1)} />
          <Tab label="Motivation" {...a11yProps(2)} />
          <Tab label="sad" {...a11yProps(3)} />
          <Tab label="Love" {...a11yProps(4)} />
          <Tab label="Positive" {...a11yProps(5)}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Quote/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Quote url={"https://hindi-quotes.vercel.app/random/success"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Quote url={"https://hindi-quotes.vercel.app/random/motivational"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Quote url={"https://hindi-quotes.vercel.app/random/sad"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <Quote url={"https://hindi-quotes.vercel.app/random/love"}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      <Quote url={"https://hindi-quotes.vercel.app/random/positive"}/>
      </CustomTabPanel>
    
    </Box>
  );
}