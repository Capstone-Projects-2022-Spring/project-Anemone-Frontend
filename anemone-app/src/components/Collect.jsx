import React from "react";
import CollectBrain from '../image/collectBrain.png';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';


import "../styles.css";

const DragAndDrop = props => {
    const { data, dispatch } = props;

    const handleDragEnter = event => {
        event.preventDefault();
        dispatch({ type: "AddToDropZone", inDropZone: true });
    };

    const handleDragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
        dispatch({ type: "AddToDropZone", inDropZone: true });
    };

    const handleDrop = event => {
        event.preventDefault();
        let files = [...event.dataTransfer.files];
        let files_with_preview = [];

        files.map(file => {
            file["preview"] = URL.createObjectURL(file);
            files_with_preview.push(file);
        });

        if (files) {
            dispatch({ type: "AddToList", files });
            dispatch({ type: "AddToDropZone", inDropZone: false });
        }
    };

    return (
        <>
            <div
                id="container"
                className={"drag-drop-zone"}
                onDrop={event => handleDrop(event)}
                onDragOver={event => handleDragOver(event)}
                onDragEnter={event => handleDragEnter(event)}
            >
                <p>Drag your files here</p>
                <ol>
                    {data.fileList.map(file => {
                        return (
                            <li key={file.name}>
                                <p>{file.name}</p>
                                <img
                                    src={file.preview}
                                    alt=""
                                    style={{ width: "auto", height: 100 }}
                                />
                            </li>
                        );
                    })}
                </ol>
            </div>
        </>
    );
};


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
        <Box sx={{ height: 150, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <h1>React drag-and-drop component</h1>
            <DragAndDrop data={data} dispatch={dispatch} />
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