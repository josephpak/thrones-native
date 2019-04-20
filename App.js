/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState, useEffect} from 'react';
import {Platform, Text, View, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native'
import {charactersData} from  "./data/thronesData"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppContainer = styled.View`
  flex: 1;
  padding-top: 25;
  padding-left: 25;
`

const Header = styled.Text`
  font-size: 20;
  text-align: center;
  margin-bottom: 10;
  margin-top: 40;
`

const ListItem = styled.Text`
  padding-top: 10;
  padding-bottom: 10;
  font-size: 18;
  height: 44;
`

export default function App() {
    const [characters, setCharacters] = useState(charactersData)

    return (
      <AppContainer>
        <ScrollView>
        <Header>Thrones Watchlist</Header>
        <FlatList
          data={characters}
          renderItem={({item}) => <ListItem>{item.name}</ListItem>}
        />
        </ScrollView>
      </AppContainer>
    )
}
