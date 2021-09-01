import React, { useRef, useState } from "react";
import Style from "./maker.module.css";

const MakerAdd = ({ FileBtn, addOrUpdateCard }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onClickAdd = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      title: titleRef.current.value || "",
      email: emailRef.current.value || "",
      message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileURL: file.fileURL || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, fileURL: null });
    addOrUpdateCard(card);
  };

  const [file, setFile] = useState({ fileName: null, fileURL: null });
  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileURL: file.url,
    });
  };

  return (
    <form ref={formRef}>
      <table className={Style.maker}>
        <tbody>
          <tr>
            <td>
              <input ref={nameRef} type="text" placeholder="Name" />
            </td>
            <td colSpan="2">
              <input ref={companyRef} type="text" placeholder="Company" />
            </td>
            <td>
              <select ref={themeRef} name="theme" placeholder="Theme">
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input ref={titleRef} type="text" placeholder="Title" />
            </td>
            <td colSpan="2">
              <input ref={emailRef} type="text" placeholder="Email" />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <textarea ref={messageRef} placeholder="Message"></textarea>
            </td>
          </tr>
          <tr>
            <FileBtn
              id={"111"}
              fileName={file.fileName}
              onFileChange={onFileChange}
            />
            <td colSpan="2">
              <button className={Style.add_btn} onClick={onClickAdd}>
                Add
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default MakerAdd;
