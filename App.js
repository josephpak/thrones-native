/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import styled from 'styled-components/native'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`

const Header = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 10;
`

const SubHeader = styled.Text`
  text-align: center;
  color: #333333;
  margin-bottom: 5;
`

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer>
        <Header>Thrones Watchlist</Header>
        <SubHeader>To get started, edit App.js</SubHeader>
        <SubHeader>{instructions}</SubHeader>
      </AppContainer>
    );
  }
}
