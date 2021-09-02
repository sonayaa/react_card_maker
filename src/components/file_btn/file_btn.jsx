import React, { useRef, useState } from "react";
import Style from "./file_btn.module.css";

const ImgFileBtn = ({ uploadService, id, fileName, onFileChange }) => {
  const inputRef = useRef();
  const [loding, setLoading] = useState(false);

  const onChangeIpt = async (event) => {
    if (event.currentTarget == null) {
      return;
    }

    setLoading(true);
    const uploaded = await uploadService.uploadImg(event.target.files[0]);
    setLoading(false);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <td colSpan="2">
      {!loding && (
        <>
          <label
            htmlFor={`fileIpt${id}`}
            className={
              fileName ? `${Style.file_exist}` : `${Style.file_default}`
            }
          >
            {fileName || "No File"}
          </label>
          <input
            ref={inputRef}
            id={`fileIpt${id}`}
            type="file"
            accept="image/*"
            className={Style.fileIpt}
            onChange={onChangeIpt}
          />
        </>
      )}
      {loding && <div className={Style.loding}></div>}
    </td>
  );
};

export default ImgFileBtn;
