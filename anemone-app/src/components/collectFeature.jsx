import React from "react";
<<<<<<< HEAD
=======
//import "./IconCollect.css";
>>>>>>> 7984b4e4edf1cca3c61f2a2f90e6f6aee65cb0d9
import CollectBrain from '../image/icon-collect@1x.png';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
<<<<<<< HEAD
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


const Input = styled('input')({
    display: 'none',
});

const actions = [
    { icon: <IconButton />, name: 'Upload' },
    { icon: <Button />, name: 'Upload button' },
];

export default function CollectSpeedDial() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ height: 300, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial anemone collect"
                sx={{ position: 'relative', bottom: 16, right: 70 }}
                icon={<SpeedDialIcon icon={<img src={CollectBrain} className="CollectBrain" alt="" />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}


=======



export default function CollectSpeedDial() {
    return (
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial anemone example"
                sx={{ position: 'relative', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon icon={<img src={CollectBrain} style={{ position: "absolute", bottom: 0, right: 0 }} className="CollectBrain" alt="" />} />}
            >
>>>>>>> 7984b4e4edf1cca3c61f2a2f90e6f6aee65cb0d9
            </SpeedDial>
        </Box>
    );
}