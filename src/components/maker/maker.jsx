import React from 'react';
import Style from './maker.module.css';

const Maker = (props) => {
    return (
        <table className={Style.maker}>
            <tbody>
                <tr>
                    <td>
                        <input type="text" placeholder="Name" />
                    </td>
                    <td colSpan="2">
                        <input type="text" placeholder="Company" />
                    </td>
                    <td>
                        <select name="color" id="">
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                            <option value="colorful">Colorful</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <input type="text" placeholder="Title" />
                    </td>
                    <td colSpan="2">
                        <input type="text" placeholder="Email" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4">
                        <textarea name="" id="" placeholder="Message"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2">
                        <button className={Style.file_btn}>No File</button>
                        {/* <button className={`${Style.file_btn} ${Style.exist}`}>No File</button> */}
                    </td>
                    <td colSpan="2">
                        <button className={Style.delete_btn}>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default Maker;