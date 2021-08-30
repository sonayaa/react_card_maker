import React, { useRef } from "react";
import Style from "./file_btn.module.css";

const ImgFileBtn = ({ uploadService, id, fileName, onFileChange }) => {
  const inputRef = useRef();

  const onChangeIpt = async (event) => {
    if (event.currentTarget == null) {
      return;
    }

    const uploaded = await uploadService.uploadImg(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <>
      <td colSpan="2">
        <label
          htmlFor={`idTest${id}`}
          className={fileName ? `${Style.file_exist}` : `${Style.file_default}`}
        >
          {fileName || "No File"}
        </label>
        <input
          ref={inputRef}
          id={`idTest${id}`}
          type="file"
          accept="image/*"
          className={Style.fileIpt}
          onChange={onChangeIpt}
        />
      </td>
    </>
  );
};

export default ImgFileBtn;
