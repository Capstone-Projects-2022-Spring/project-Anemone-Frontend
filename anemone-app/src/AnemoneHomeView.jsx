import * as React from 'react';
import Box from '@mui/material/Box';
import {SpeedDial, Fab} from '@mui/material/';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import RainbowBrainIcon from './components/RainbowBrainIcon';
 import Collect from './components/Collect';
import Retrieve from './Retrieve';

const actions = [
    { icon: <Collect />, name: 'Collect'},
    { icon: <Retrieve />, name: 'Retrieve'},
];

export default function HomeSpeedDial(props){

    const [direction, setDirection] = React.useState('right');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Box
        sx={{ height: 5, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
            hasBackdrop={false}
            ariaLabel="Anemone Rainbow Brain"
            sx={{ position: 'absolute', center: 10 }}
            icon={<RainbowBrainIcon/>}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
            >
            {actions.map((action) => (
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={()=>{props.setParentContext(action.name)}}
                />
            ))}
            </SpeedDial>
        </Box>
    );
}