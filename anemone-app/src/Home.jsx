import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import RainbowBrain from './image/rainbowBrain.png';
// import CollectIcon from './Collect';
// import './Organize';
// import './Modify';
import RetrieveIcon from './Retrieve';

export default function HomeSpeedDial(){
    const actions = [
        // { icon: <CollectIcon />, name: 'Collect'},
        // { icon: <OrganizeIcon />, name: 'Organize'},
        // { icon: <ModifyIcon />, name: 'Modify'},
        { icon: <RetrieveIcon />, name: 'Retrieve'},
    ];
    const [direction, setDirection] = React.useState('right');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Box sx={{ height: 120, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
            ariaLabel="Anemone Rainbow Brain"
            sx={{ position: 'absolute', right: 6 }}
            icon={<SpeedDialIcon icon={<img src={RainbowBrain} className="" alt=""/>} />}
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
                />
            ))}
            </SpeedDial>
        </Box>
    );
}