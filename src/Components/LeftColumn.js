import { Button, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import Logo from '../Images/Logo.png';
import Overview from "../Images/Overview.png";
import Students from "../Images/Students.png";
import UsersList from "../Images/UsersList.png";
import Logout from "../Images/Logout.png";
import './LeftColumn.css';
import { Stack } from '@mui/system';

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontWeightLight: 300,
    fontWeightMedium: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
});

function LeftColumn() {

  return (
    <div className="left-column">
      <div className="left-column__logo">
        <img src={Logo} alt="logo" />
      </div>
      <ThemeProvider theme={theme}>
        <Stack spacing={5} sx={{
          display: "flex",
          marginLeft: 0,
        }}>
          <Button
            variant="text" sx={{
              textTransform: 'none',
              justifyContent: "space-evenly",

              color: "black",
              marginTop: 5,
              '&:focus': {
                backgroundColor: "#fcffff",
                boxShadow: 5,
                borderStartStartRadius: 0,
                borderBottomLeftRadius: 0,
                marginLeft: 0,
                color: "#fe8627",
                fontWeight: 700,
                padding: 1,
              }
            }}>
            <img src={Overview} alt=" " />
            Overview</Button>
          <Button
            variant="text" sx={{
              textTransform: 'none',
              color: "black",
              marginTop: 5,
              justifyContent: "space-evenly",

              '&:focus': {
                backgroundColor: "#fcffff",
                boxShadow: 5,
                borderStartStartRadius: 0,
                borderBottomLeftRadius: 0,
                marginLeft: 0,
                color: "#fe8627",
                fontWeight: 700,
                padding: 1,
              }
            }}>
            <img src={Students} alt=" " />
            Students</Button>
          <Button
            variant="text" sx={{
              textTransform: 'none',
              color: "black",
              marginTop: 5,
              justifyContent: "space-evenly",
              '&:focus': {
                backgroundColor: "#fcffff",
                boxShadow: 5,
                borderStartStartRadius: 0,
                borderBottomLeftRadius: 0,
                marginLeft: 0,
                color: "#fe8627",
                fontWeight: 700,
                padding: 1,
              }
            }}>
            <img src={UsersList} alt=" " />
            Users List</Button>
        </Stack>

        <Stack spacing={5} sx={{
          display: "flex",
          marginLeft: 0,
          justifyContent: "flex-end",
          height: "100%",
        }}>
          <Button
            variant="text" sx={{
              textTransform: 'none',
              m: 3,
              justifyContent: "space-evenly",
              marginTop: 6,
              backgroundColor: "#fcffff",
              boxShadow: 5,
              borderRadius: 1,
              color: "#fe8627",
              fontWeight: 700,
              padding: 1, 
            }}>
            <img src={Logout} alt=" " />
            Logout
          </Button>
        </Stack>
      </ThemeProvider >
    </div>
  );
}

export default LeftColumn;