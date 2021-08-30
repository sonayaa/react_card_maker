import React, { useState } from "react";
import Style from "./maker.module.css";

const Maker = ({ FileBtn, card, updateCard, deleteCard }) => {
  const { id, name, company, title, email, message, theme, fileName, fileURL } =
    card;

  const onChangeCard = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value, // point!
    });
  };

  const onClickDelete = (event) => {
    event.preventDefault();
    deleteCard(card);
  };

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
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
                onChange={onChangeCard}
              />
            </td>
            <td colSpan="2">
              <input
                type="text"
                defaultValue={company}
                name="company"
                onChange={onChangeCard}
              />
            </td>
            <td>
              <select
                name="theme"
                defaultValue={theme}
                name="theme"
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
                onChange={onChangeCard}
              />
            </td>
            <td colSpan="2">
              <input
                type="text"
                defaultValue={email}
                name="email"
                onChange={onChangeCard}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <textarea
                defaultValue={message}
                name="message"
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
};

export default Maker;
