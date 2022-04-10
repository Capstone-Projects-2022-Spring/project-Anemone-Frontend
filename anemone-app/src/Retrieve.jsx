import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import SearchIcon from '@mui/icons-material/SearchOutlined';
import SavedSearchIcon from '@mui/icons-material/SavedSearchOutlined';
import RetrieveBrain from './image/retrieveBrain.png';
import SearchBar from "./Components/SearchBar";
import BookData from "./Data.json";
import './App.css';


const actions = [
  { icon: <SearchIcon />, name: 'Search' },
  { icon: <SavedSearchIcon />, name: 'Save Search' },
];

function useSearchBar(actions){
    if(actions.SearchIcon){
        return(
            <div className="Search">
                <SearchBar placeholder="Enter the key words: " data={BookData} />
            </div>
        );
    }
}

export default function RetrieveSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'relative', center: 16, right: 46 }}
        icon={<SpeedDialIcon icon={<img src={RetrieveBrain} className="RetrieveBrain" alt=""/>} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        //   for if the action is SearchIcon clicked navigate to SearchBar Page useSearchBar()
        ))}
      </SpeedDial>
    </Box>
  );
}