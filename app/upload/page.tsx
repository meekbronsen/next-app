'use client'
import React from "react";
import { CldUploadWidget } from "next-cloudinary";

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="cwxkesij">
      {({open}) => (
        <button onClick={() => open()} className="btn btn-primary">
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
