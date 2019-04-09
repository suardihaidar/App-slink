import React, {Component} from 'react'
import { Alert, Text, View, ImageBackground, Image, TextInput, TouchableOpacity} from 'react-native'
import logo from '../component/images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons.js'
import styles from './styles'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showPass: true,
      press: false
    }
  }

  validation = () => {
    const {username, password} = this.state
    if (username == '' && password == '') {
      Alert.alert('Please fill the Username and Password')
    } else if (username == 'user' && password == '123') {
      Alert.alert('Welcome! ' + username)
      this.props.navigation.navigate('dashboard')
    } else if (username != 'user' && password != '123') {
      Alert.alert('User not found!')
    } else if (username == 'user' && password == '') {
      Alert.alert('Password empty!')
    } else if (username == '' && password == '123') {
      Alert.alert('Username empty!')
    } else {
      Alert.alert('Data not found!') 
    }
  }

  showPass = () => {
      this.setState(prevState => ({showPass : !prevState.showPass, press: !prevState.press}))
  }
    
  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>URL Shortener</Text>
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'md-person'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
          style={styles.inputIcon}/>
          <TextInput
            style={styles.input}
            placeholder={'Username'}
            onChangeText={username => this.setState({username})}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name={'md-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'} 
            style={styles.inputIcon}/>
          <TextInput
            style={styles.input} 
            placeholder={'Password'}
            onChangeText={password => this.setState({password})}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
            underLineColorAndroid='transparent'
          />

          <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
            <Icon name={this.state.press == false ? 'md-eye-off' : 'md-eye'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.btnLogin} onPress={this.validation}> 
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}