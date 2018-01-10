import path from 'path';
require('app-module-path').addPath(path.join(process.cwd(), 'src'));

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

global.__SERVER__ = false;

switch(process.env.TARGET) {
  case 'staging':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__     = true;
    break;
  case 'production':
    global.__DEVELOPMENT__ = false;
    global.__STAGING__     = false;
    global.__PRODUCTION    = true;
    break;
  case 'development':
    global.__DEVELOPMENT__ = true;
    break;
}
