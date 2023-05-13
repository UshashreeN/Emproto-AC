import React from "react";
import { Box, Grid, Avatar, Button, createTheme, ThemeProvider } from "@mui/material";
import Search from "./Search.png"
import './ContentDashboard.css';
import Card from "./Card";
import Reading from "./Reading.png";
import MortarBoard from "./MortarBoard.png";
import Office from "./Office.png";
import Group3 from "./Group3.png";
import Profile from "./Picture.png";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ApartmentIcon from '@mui/icons-material/Apartment';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
// import AnnualMaintenanceAmount from "./AnnualMaintenanceAmount";
// import Calender from "./Calender";
// import {
//     BiSearchAlt,
// } from "react-icons/bi";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#fcffff',
        },
    },
    typography: {
        fontFamily: "Open Sans",
        fontWeightLight: 300,
        fontWeightMedium: 400,
        fontWeightRegular: 500,
        fontWeightBold: 700
    }
});

function ContentDashboard() {
    return (
        <ThemeProvider theme={theme}>

            <Box sx={{
                width: "100vw",
                height: "100vh",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "#fcffff",
            }}>
                <Grid spacing={8} sx={{
                    // marginTop: 3,
                    // marginBottom: 0,
                    margin: 1,
                    display: 'flex',
                    justifyContent: "flex-end",
                }}>
                    <Grid item sx={{
                        backgroundColor: "#fafafa",
                        color: "#949494",
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: 3
                    }}>
                        <img src={Search} alt="search" />
                        {/* <input icon={<BiSearchAlt fontSize={21} className="text-white" />} type="text" key="search" placeholder="   Search Here..."></input> */}
                    </Grid>
                    <Grid item sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginLeft: 3,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Avatar alt="profile" src={Profile}></Avatar>
                        <Grid conatiner spacing={0} sx={{
                            m: 0,
                            marginLeft: 1,
                            textAlign: "center"
                        }}>
                            <h1>Name</h1>
                            <p>Designation</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        borderRadius: 0,
                        m: 0,
                        backgroundColor: "#fafafa",
                        display: "flex",
                        flexWrap: "nowrap",
                        flexDirection: "column",
                        height: "100%"
                    }}>
                    <Grid container sx={{
                        height: "auto",
                        padding: 3.2,
                        flexDirection: "row",
                        alignItems: "center",
                        flexWrap: "wrap",
                        justifyContent: "space-between"
                    }}>
                        <Grid Item>
                            <div className="dashboard">
                                <h1>Dashboard</h1>
                                <p>All Branches 2022-2023</p>
                            </div>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                startIcon={<CalendarMonthIcon />}
                                endIcon={<KeyboardArrowDownOutlinedIcon />}
                                sx={{
                                    textTransform: 'none',
                                    m: 2,
                                    color: "#fe8627",
                                    fontWeight: 700,
                                    '&:hover': {
                                        backgroundColor: "transparent"
                                    },
                                    // '&:focus': {
                                    //     color: "white",
                                    //     backgroundColor: '#fe8627',
                                    // },
                                }}>Financial Years
                            </Button>
                            <Button
                                variant="contained" color="secondary" startIcon={<ApartmentIcon />} endIcon={<KeyboardArrowDownOutlinedIcon />}
                                sx={{
                                    textTransform: 'none',
                                    m: 2,
                                    color: "#fe8627",
                                    // '&:focus': {
                                    //     color: "white",
                                    //     backgroundColor: '#fe8627',
                                    // },
                                    '&:hover': {
                                        backgroundColor: "transparent"
                                    },
                                    fontWeight: 700,
                                }}>
                                All Branch
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container sx={{
                        display: 'flex',
                        padding: 0.5,
                        width: "20%",
                        flexWrap: "nowrap",
                        overflow: "hidden",
                        justifyContent: "space-evenly",
                    }}>
                        <Card
                            className="card1"
                            image={Reading}
                            total="Total Students"
                            number="2000"
                            alt="Reading"
                        />

                        <Card
                            className="card2"
                            image={MortarBoard}
                            total="Total teachers"
                            number="200"
                            alt="MortarBoard"
                        />
                        <Card
                            className="card3"
                            image={Office}
                            total="Total Branches"
                            number="10"
                            alt="Office"
                        />
                        <Card
                            className="card4"
                            image={Group3}
                            total="Total Users"
                            number="20"
                            alt="Group3"
                        />
                    </Grid>
                    <Grid
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            padding: 0.5,
                            backgroundColor: "pink"
                        }}>
                        {/* <AnnualMaintenanceAmount /> */}
                        {/* <Calender /> */}
                    </Grid>
                </Box>
            </Box>
        </ThemeProvider >
    );
}

export default ContentDashboard;