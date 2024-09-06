import React, { useState } from "react";
import add from "./assets/Add button.svg";

const FileUpload = ({
  onFileSelected,
  acceptedTypes = ".png, .jpg, .jpeg",
  maxFileSize = 5 * 1024 * 1024,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0]; // Only allow one file
    handleFileSelection(file);
  };

  const handleBrowseFiles = (e) => {
    const file = e.target.files[0]; // Only allow one file
    handleFileSelection(file);
  };

  const handleFileSelection = (file) => {
    if (file) {
      if (
        !acceptedTypes.split(",").includes(file.type) &&
        !acceptedTypes.includes(file.name.split(".").pop().toLowerCase())
      ) {
        setErrorMessage(
          `Invalid file type. Please select a file of type: ${acceptedTypes.replace(
            /,/g,
            ", "
          )}`
        );
        setFileName("");
      } else if (file.size > maxFileSize) {
        setErrorMessage(
          `File size exceeds the maximum limit of ${(
            maxFileSize /
            (1024 * 1024)
          ).toFixed(2)} MB.`
        );
        setFileName("");
      } else {
        setErrorMessage("");
        setFileName(file.name);
        if (onFileSelected) {
          onFileSelected(file);
        }
      }
    }
  };

  return (
    <div
      className={`mt-4 w-full border border-[#DAE0E6] border-dashed rounded-[5px] flex items-center justify-center flex-col p-3 ${
        isDragging ? "border-[#01903C] bg-[#F0FFF4]" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        className="hidden"
        id="fileInput"
        onChange={handleBrowseFiles}
        accept={acceptedTypes} // Specify allowed file types if needed
      />
      <img src={add} alt="Upload Icon" />
      <p className="mt-3 text-xl font-medium font-Inter text-[#272D37]">
        {fileName ? `Selected File: ${fileName}` : "Drop your File Here"}
      </p>
      <p className="mt-1 text-xs font-normal font-Inter text-[#5F6D7E]">
        <label
          htmlFor="fileInput"
          className="cursor-pointer font-medium text-[#01903C] mr-1"
        >
          {fileName ? "Change File" : "Browse File"}
        </label>
        from your Computer
      </p>
      {errorMessage && (
        <p className="text-red-500 text-xs mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default FileUpload;
