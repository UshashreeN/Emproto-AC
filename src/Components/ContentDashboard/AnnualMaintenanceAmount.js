import React from "react";
import "./AnnualMaintenanceAmount.css";
import Button from '@mui/material/Button';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const AnnualMaintenanceAmount = () => {
    return (
        <div className="card">                    
            Annual Maintenance Amount
            <Button variant="contained" endIcon={<KeyboardArrowDownOutlinedIcon />}
                sx={{
                    m: 2,
                    color: "#fe8627",
                    backgroundColor: "#fcffff",
                    '&:hover': {
                        backgroundColor: "#fcffff"
                    }
                }}>
                Month
            </Button>
            <div>
                <div>500,000</div>
                <div className="text">Total Amount</div>
            </div>
        </div >
    );
}

export default AnnualMaintenanceAmount;