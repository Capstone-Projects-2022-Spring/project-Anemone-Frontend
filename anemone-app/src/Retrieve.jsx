import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearchOutlined';
import RetrieveBrain from './image/retrieveBrain.png';

const actions = [
  { icon: <SearchIcon />, name: 'Search' },
  { icon: <SavedSearchIcon />, name: 'Save Search' },
];

export default function RetrieveSpeedDial({goView}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <Box sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'relative', start: 100, right: 26 }}
        icon={<SpeedDialIcon icon={<img src={RetrieveBrain} className="RetrieveBrain" alt=""/>} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=>{goView(action.name)}}
          />
        ))}
      </SpeedDial>
    </Box>
    </>
  );
}