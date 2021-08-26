import React from "react";
import Style from "./maker.module.css";

const Maker = ({ card, onDelete }) => {
  const { id, name, company, title, email, message, theme } = card;

  const deleteCard = event => {
    event.preventDefault();
    onDelete(id);
  }

  return (
    <form>
      <table className={Style.maker}>
        <tbody>
          <tr>
            <td>
              <input type="text" defaultValue={name} />
            </td>
            <td colSpan="2">
              <input type="text" defaultValue={company} />
            </td>
            <td>
              <select name="theme" defaultValue={theme}>
                <option value="light">light</option>
                <option value="dark">dark</option>
                <option value="colorful">colorful</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <input type="text" defaultValue={title} />
            </td>
            <td colSpan="2">
              <input type="text" defaultValue={email} />
            </td>
          </tr>
          <tr>
            <td colSpan="4">
              <textarea defaultValue={message}></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button className={Style.file_btn}>No File</button>
              {/* <button className={`${Style.file_btn} ${Style.exist}`}>No File</button> */}
            </td>
            <td colSpan="2">
              <button className={Style.delete_btn} onClick={deleteCard}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Maker;
