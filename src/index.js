import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myelements = (
    <table>
        <th>
            <td>1</td>
            <td>2</td>
        </th>
        <tbody>
            <tr>
                <td>123</td>
                <td>asdf</td>
            </tr>
        </tbody>
    </table>
)
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
