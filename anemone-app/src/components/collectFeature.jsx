import React from "react";
import CollectBrain from '../image/collectBrain.png';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
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
        <Box sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial anemone collect"
                sx={{ position: 'relative', bottom: 16, right: 170 }}
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
            </SpeedDial>
        </Box>
    );
}