import React from 'react';
import Swal from 'sweetalert2';
import sendMail from '../../utils/sendMail';
import './HomePage.css';

function Home() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const msg = await sendMail(event.target);
            Swal.fire({ icon: 'success', text: msg.data.toString() });
        } catch (e) {
            Swal.fire({ icon: 'error', text: e.toString() });
        }
        event.target.reset();
    };
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label>
                    SUBJECT:
                    <input name="subject" type="text" />
                </label>
                <br />
                <br />
                <label>
                    HTML:
                    <textarea name="html" />
                </label>
                <br />
                <br />
                <label>
                    TEXT (alternate text that will be displayed if html is not supported):
                    <textarea name="text" />
                </label>
                <br />
                <br />
                <label>
                    AUTHKEY:
                    {' '}
                    <span className="required">*</span>
                    <input name="auth" type="password" required />
                </label>
                <br />
                <br />
                <label>
                    TO (upload a .txt file):
                    {' '}
                    <span className="required">*</span>
                    <input name="to" type="file" accept="text/plain" required />
                </label>
                <br />
                <br />
                <input type="submit" value="SEND" />
            </form>
        </div>
    );
}

export default Home;
