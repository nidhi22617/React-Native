import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import Header from './components/Header';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards/>
        <ContactList/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
