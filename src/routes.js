import {
    createAppContainer,
    createNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import Login from './views/Login'
import Dashboard from './views/Dashboard/Dashboard'

const appNavigator = createStackNavigator({
    login : { screen : Login, navigationOptions:{header:null}},
    dashboard : { screen : Dashboard, navigationOptions:{header:null}},
},{
    initialRouteName:'login'
})

export default createAppContainer(appNavigator)