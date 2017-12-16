import React from 'react';
import { render } from 'react-snapshot';

import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'moment/locale/ko';
import 'normalize.css/normalize.css';
import './index.css';

import App from './components/App';
import { unregister } from './registerServiceWorker';

render(<App />, document.getElementById('root'));
unregister();
