import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import CourseManager from './components/CourseManager';
import WhiteBoard from './containers/WhiteBoard';


const courses=[
    {
        title: 'CS5200'
    },
    {
        title: 'CS5610'
    }

]

ReactDOM.render(
    <div>
        <CourseManager/>
        {/*<WhiteBoard courses={courses}/>*/ }
    </div>,
    document.getElementById('root'));
registerServiceWorker();
