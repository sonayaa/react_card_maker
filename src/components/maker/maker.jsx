import React, { memo, useRef } from "react";
import Style from "./maker.module.css";

const Maker = memo(({ FileBtn, card, addOrUpdateCard, deleteCard }) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const { id, name, company, title, email, message, theme, fileName } = card;

  const onFileChange = (file) => {
    addOrUpdateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChangeCard = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    addOrUpdateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value, // point!
    });
  };

  const onClickDelete = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  return (
    <form>
      <table className={Style.maker}>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                defaultValue={name}
                name="name"
                ref={nameRef}
                onChange={onChangeCard}
              />
            </td>
            <td colSpan="2">
              <input
                type="text"
                defaultValue={company}
                name="company"
                ref={companyRef}
                onChange={onChangeCard}
              />
            </td>
            <td>
              <select
                name="theme"
                ref={themeRef}
                defaultValue={theme}
                onChange={onChangeCard}
              >
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input
                type="text"
                defaultValue={title}
                name="title"
                ref={titleRef}
                onChange={onChangeCard}
              />
            </td>
            <td colSpan="2">
              <input
                type="text"
                defaultValue={email}
                name="email"
                ref={emailRef}
                onChange={onChangeCard}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <textarea
                defaultValue={message}
                name="message"
                ref={messageRef}
                onChange={onChangeCard}
              ></textarea>
            </td>
          </tr>
          <tr>
            <FileBtn id={id} fileName={fileName} onFileChange={onFileChange} />
            <td colSpan="2">
              <button className={Style.delete_btn} onClick={onClickDelete}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
});

export default Maker;
