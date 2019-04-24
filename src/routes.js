import {
    createAppContainer,
    createNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import Login from './views/Login'
import Home from './views/Home'

const appNavigator = createStackNavigator({
    login : { screen : Login, navigationOptions:{header:null}},
    home : { screen : Home, navigationOptions:{header:null}},
},{
    initialRouteName:'Home'
})

export default createAppContainer(appNavigator)