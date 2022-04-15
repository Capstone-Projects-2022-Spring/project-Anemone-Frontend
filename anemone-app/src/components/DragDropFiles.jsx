import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "MP4", "MOV"];


function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader
        accept={fileTypes}
        handleChange={handleChange} 
        name="file" 
        hoverTitle="Drop Here"
        onDrop={document}
        multiple type="file"
    />
  );
}

export default DragDrop;