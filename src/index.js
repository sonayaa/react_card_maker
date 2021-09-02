import React from "react";
import ReactDOM from "react-dom";
import Style from "./index.module.css";
import App from "./app";
import AuthService from "./service/auth_service";
import UploadService from "./service/upload_service";
import ImgFileBtn from "./components/file_btn/file_btn";
import CardRepository from "./service/card_repository";

const authService = new AuthService();
const cardRepository = new CardRepository();
const uploadService = new UploadService();
const FileBtn = (props) => (
  <ImgFileBtn {...props} uploadService={uploadService} />
);
ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      cardRepository={cardRepository}
      FileBtn={FileBtn}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
