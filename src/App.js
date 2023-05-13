import React from "react";
import LeftColumn from "./Components/LeftColumn";
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import ContentDashboard from './Components/ContentDashboard/ContentDashboard';
function App() {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          '& > :not(style)': {
            m: 0
          },
          flexDirection: "row",
          height:'100%'
        }}
      >
        <LeftColumn /> 
        <ContentDashboard />
      </Box>
    </div>
  );
}

export default App;
