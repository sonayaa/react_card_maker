import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import UploadService from './service/upload_service';
import ImgFileBtn from './components/file_btn/file_btn'

const authService = new AuthService();
const uploadService = new UploadService();
const FileBtn = (props) => (
  <ImgFileBtn {...props} uploadService={uploadService}/>
)
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileBtn={FileBtn}/>
  </React.StrictMode>,
  document.getElementById('root')
);
