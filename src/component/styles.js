import {Dimensions} from 'react-native'
const {width: WIDTH} = Dimensions.get('window')

const styles = {
    backgroundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#29b6f6',
    },
    logoContainer: {
      alignItems: 'center',
      marginBottom: 50,
    },
    logo: {
      width: 120,
      height: 120,
    },
    logoText: {
      color: 'white',
      fontSize: 20,
      fontWeight: '500',
      marginTop: 10,
      opacity: 1,
    },
    inputContainer: {
      marginTop: 10,
    },
    input: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      fontSize: 16,
      paddingLeft: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
      color: 'rgba(255, 255, 255, 1.0)',
      marginHorizontal: 25
    },
    inputIcon: {
      position: 'absolute',
      top: 8,
      left: 37
    },
    btnEye: {
      position: 'absolute',
      top: 8,
      right: 37
    },
    btnLogin: {
      width: WIDTH - 55,
      height: 45,
      borderRadius: 25,
      backgroundColor: '#003c8f',
      justifyContent: 'center',
      marginTop: 20,
    },
    text: {
      color: 'rgba(255, 255, 255, 1.0)',
      fontSize: 18,
      textAlign: 'center'
    },
}

export default styles
  