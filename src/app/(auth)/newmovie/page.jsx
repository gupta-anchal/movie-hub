"use client";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const NewMovie = () => {
  const fileTypes = ["JPEG", "PNG", "GIF"];
  const [file, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        className="hello"
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
};

export default NewMovie;
