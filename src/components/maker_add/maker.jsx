import React, { useRef } from 'react';
import Style from './maker.module.css';

const MakerAdd = ({ onAdd }) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const addCard = event => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        }
        formRef.current.reset();
        onAdd(card);
    }
    return (
        <form ref={formRef}>
            <table className={Style.maker}>
                <tbody>
                    <tr>
                        <td>
                            <input ref={nameRef} type="text" placeholder="Name"/>
                        </td>
                        <td colSpan="2">
                            <input ref={companyRef} type="text" placeholder="Company"/>
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
                        <td colSpan="2">
                            <button className={Style.file_btn}>No File</button>
                            {/* <button className={`${Style.file_btn} ${Style.exist}`}>No File</button> */}
                        </td>
                        <td colSpan="2">
                            <button className={Style.add_btn} onClick={addCard}>Add</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    )
};

export default MakerAdd;