import {
    createAppContainer,
    createNavigator,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation';

import Login from './screens/Login'
import Dashboard from './screens/Dashboard'

const appNavigator = createStackNavigator({
    login : { screen : Login, navigationOptions:{header:null}},
    dashboard : { screen : Dashboard, navigationOptions:{header:null}},
},{
    initialRouteName:'login'
})

export default createAppContainer(appNavigator)