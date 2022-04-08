// import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import './Collect';
// import './Organize';
// import './Modify';
// import './Retrieve';

export default function OpenHomeIconSpeedDial(){
    // const action = [
    //     { icon: <CollectIcon />, name: 'Collect'},
    //     { icon: <OrganizeIcon />, name: 'Organize'},
    //     { icon: <ModifyIcon />, name: 'Modify'},
    //     { icon: <RetrieveIcon />, name: 'Retrieve'},
    // ];

    const [actions, setActions] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
            ariaLabel="Anemone Rainbow Brain"
            sx={{ position: 'absolute', bottom: 6, right: 6 }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
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