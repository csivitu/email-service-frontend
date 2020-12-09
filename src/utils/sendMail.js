import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:5001',
});

function parseFile(file) {
    const reader = new FileReader();
    reader.readAsText(file);
    return new Promise((resolve) => {
        reader.onload = (e) => {
            const text = (e.target.result);
            resolve(text);
        };
    });
}

const sendEmail = async ({
    text, html, subject, to, auth,
}) => {
    const txt = (await parseFile(to.files[0])).replaceAll('\n', ', ');
    return api.post('/email', {
        text: text.value, html: html.value, subject: subject.value, to: txt, auth: auth.value,
    });
};

export default sendEmail;
