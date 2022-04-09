import React from "react";
//import "./IconCollect.css";
import CollectBrain from '../image/icon-collect@1x.png';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';



export default function CollectSpeedDial() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial anemone example"
                sx={{ position: 'relative', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon icon={<img src={CollectBrain} style={{ position: "absolute", bottom: 0, right: 0 }} className="CollectBrain" alt="" />} />}
            >
            </SpeedDial>
        </Box>
    );
}