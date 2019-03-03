/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './Components/Home';
import {name as appName} from './app.json';
import Navigation from "./Navigation/Navigation";

AppRegistry.registerComponent(appName, () => Navigation);
