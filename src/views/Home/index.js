import React, { Component } from "react"
import { Text, Clipboard, View, AsyncStorage, Linking} from "react-native"
import { Header, Button, Input } from "react-native-elements"
import shortid from 'shortid'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      originalUrl: '',
      resultUrl: '',
      shortUrl: '' 
    }
  }

  saveData = () => {
    const {originalUrl, resultUrl, shortUrl} = this.state
    let data = {
        originalUrl: originalUrl,
        resultUrl: shortid.generate(originalUrl),
        shortUrl: shortUrl
    }

    AsyncStorage.setItem('userUrl', JSON.stringify(data))
    this.setState({resultUrl : data.resultUrl})
    // alert('short.ly/'+data.resultUrl)
  }

  reset = () => {
    AsyncStorage.clear()
    this.setState({
      originalUrl: '',
      resultUrl: '',
      shortUrl: ''
    })
  }

  // getData = async() => {
  //   let data = await AsyncStorage.getItem('userUrl')
  //   let fetch = JSON.parse(data)
  //   this.setState({resultUrl : fetch.resultUrl})
  // }

  render() {
    return (
      <View>
        <Header containerStyle={{height: 65, justifyContent:'space-around'}}
          leftComponent={<Button title="logout" onPress={() => this.props.navigation.navigate('login')}/>} 
          centerComponent={{ text: "URL shortener", style:{fontSize: 16, fontWeight:'bold'}}}
        />
        <View style={{ margin: 20 }}>
          <Input placeholder="original url" onChangeText={originalUrl => this.setState({ originalUrl })} value={this.state.originalUrl} />
          <Input placeholder="your short url" 
            onChangeText={value => this.setState({resultUrl: value})}
            value={'short.ly/'+this.state.resultUrl}
          />
          <Button containerStyle={{ margin: 10 }} raised title="shorten" 
            onPress={this.saveData}
          />
          <Button containerStyle={{ margin: 10 }} raised title="reset data" 
            onPress={this.reset}
          />
          
          <Input placeholder="short url" onChangeText={shortUrl => this.setState({shortUrl})} value={this.state.shortUrl}/>
          <Button containerStyle={{ margin: 10 }} raised title="track" />
        </View>
      </View>
    );
  }
}