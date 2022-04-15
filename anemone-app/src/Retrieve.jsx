import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearchOutlined';
import RetrieveBrainIcon from './components/RetrieveBrainIcon';
import SearchBar from './components/SearchBar';

const actions = [
  { icon: <SearchIcon />, name: 'Search' },
  { icon: <SavedSearchIcon />, name: 'Save Search' },
];

<div className="Bluebutton">
  <SearchIcon id="searchbtn" onClick={<SearchBar />} />
</div>

export default function RetrieveSpeedDial({goView}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    
    <Box sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial Anemone Home"
        sx={{ position: 'relative', start: 100, right: 26 }}
        icon={<RetrieveBrainIcon/>}
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

    
  );
}