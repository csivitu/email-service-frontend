import React from 'react';
import './HomePage.css';

function Home() {
    const state = { submitted: '' };
    const handleSubmit = (event) => {
        event.preventDefault();
        state.submitted = 'done!';
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
                    TEXT (alternate text that will only be displayed if html is not supported):
                    <textarea name="text" />
                </label>
                <br />
                <br />
                <label>
                    AUTHKEY
                    <input name="auth" type="password" required />
                </label>
                <br />
                <br />
                <label>
                    TO (upload txt file):
                    <input name="to" type="file" accept="text/plain" required />
                </label>
                <br />
                <br />
                <input type="submit" value="SEND" />
            </form>
            <p>{state.submitted}</p>
        </div>
    );
}

export default Home;
