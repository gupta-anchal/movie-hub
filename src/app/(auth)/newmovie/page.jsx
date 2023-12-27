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
    <div className="new-movie-page">
      <div className="container">
        <div className="heading-two">Create a new movie</div>
        <div className="form-section">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <FileUploader
                  multiple={true}
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  className="file-uploader"
                />
                <p>
                  {file
                    ? `File name: ${file[0].name}`
                    : "no files uploaded yet"}
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                <input type="text" name="" placeholder="Title" id="" />
                <input type="text" placeholder="Publishing year" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMovie;
