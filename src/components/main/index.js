import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  Button,
  ImageBackground, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import styles from './styles';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Fulano de talco', emial: '', cpf: '', user_id: '' };
  }
  
  async getToken() {
    const value = await AsyncStorage.getItem('@MySuperStore:token');
    let options = { headers: { Authorization: `Bearer ${value}` } };
    await axios.get(`${api.apiUrl}/user`, options)
      .then((res) => {
        this.setState({ name: res.data.name, email: res.data.email, cpf: res.data.cpf, user_id: res.data.id });
        console.log('usuario logado', res.data)
      })
      .catch(error => console.log('erro ao trazer dados do usuario logado', error));
  }
   
  componentWillMount() {
    //this.getToken();
  }
  
  render() {
    return (
      <View style={styles.bg}>
     
        <View style={styles.cotainer}>
          
          <View style={styles.logo}>
            
          </View>
  
          <Text style={styles.wellcomeClient}>Bem vindo, {this.state.name}</Text>
                    
        </View>
      </View>
    );
  }
}