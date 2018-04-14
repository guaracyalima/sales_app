import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import styles from './styles';
const logo = require('../../../../assets/img/logo.png');

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', cpf: '' };
    this.auth = this.register.bind(this);
  }
  
  async register() {
    await axios.post('http://127.0.0.1:8000/api/register', {
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
        AsyncStorage.setItem('@MySuperStore:token', res.data.success.token);
        Actions.login();
      })
      .catch((err) => {
        console.log('Erro ao se logar', err);
      });
  }
  
  render() {
    return (
      <View style={styles.bg}>
        <StatusBar
          barStyle="light-content"
        />
        <View style={styles.loginCotainer}>
          
          <View style={styles.logo}>
            <Image source={logo} style={styles.logoImage} />
          </View>
          
          <TextInput
            style={styles.input}
            value={this.state.cpf}
            onChangeText={name => this.setState({ name })}
            placeholder="CPF"
            multiline={false}
            placeholderTextColor="#fff"
          />

           <TextInput
            style={styles.input}
            value={this.state.name}
            onChangeText={name => this.setState({ cpf })}
            placeholder="Nome"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="Usuario"
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="Senha"
            secureTextEntry
            maxLength={12}
            multiline={false}
            placeholderTextColor="#fff"
          />
          
          <TouchableOpacity style={styles.button} underlayColor="#328fe6" onPress={() => Actions.login() }>
            <Text style={styles.label}>Cadastrar</Text>
          </TouchableOpacity>
          
          <TouchableHighlight onPress={() => Actions.login()}>
            <Text style={styles.signup}> Ja possuo casdastro</Text>
          </TouchableHighlight>
        </View>
        {/* </View> */}
      </View>
    );
  }
}