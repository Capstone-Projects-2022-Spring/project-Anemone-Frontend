import React, {useState} from "react";
import CollectBrainIcon from './CollectBrainIcon';
import DragDropFiles from './DragDropFiles';
import axios from 'axios';
import { Input, IconButton } from "@mui/material";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "MP4", "MOV"];


function getUserAccount() {
    return axios.get('http://localhost:8080/user/0');
  }
  
  function getUserPermissions() {
    return axios.get('http://localhost:8080/user/0/permissions');
  }
  
  Promise.all([getUserAccount(), getUserPermissions()])
    .then(function (results) {
      const acct = results[0];
      const perm = results[1];
    });

export default function CollectSpeedDial() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    }

    const postDocument = (file) => {
        let json
        axios.post('http://localhost:8080/documents', {Promise})
            .then(function(response){
                json = response.data
                handleChange(file)
                console.log(json)
            })
    }
    const actions = [{postDocument}]

    const state = {
        inDropZone: false,
        fileList: []
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "AddToDropZone":
                return { ...state, inDropZone: action.inDropZone };
            case "AddToList":
                return { ...state, fileList: state.fileList.concat(action.files) };
            default:
                return state;
        }
    };

    const [data, dispatch] = React.useReducer(reducer, state);

    return (
        <React.Fragment>
        <label htmlFor="icon-button-file">
            <Input accept={fileTypes} id="contained-button-file" multiple type="file" style={{ display: "none" }} />
            <IconButton
                size="small"
                ariaLabel="Anemone collect"
                sx={{ position: 'relative', bottom: 16, right: 170 }}
                icon={<CollectBrainIcon/>}
            >

                {actions.map((action) => (
                    <DragDropFiles/>
                ))}
            </IconButton>
         </label>
         </React.Fragment>
    );
}