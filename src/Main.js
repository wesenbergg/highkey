/**
 * Main component, an entry point.
 *
 * @author wesenbergg
 */

import React, {useState} from 'react';
import AppHeader from './components/AppHeader';
import MessageContainer from './components/messageContainer';
import AppFooter from './components/AppFooter';
import {SafeAreaView, StyleSheet} from 'react-native';
import ToUppercaseForm from './components/toUppercaseForm';

const Main = () => {
  const [switchNav, setSwitchNav] = useState(false);
  const switchScreen = () => setSwitchNav(!switchNav);
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader switchScreen={switchScreen} />
      {switchNav ? <MessageContainer /> : <ToUppercaseForm />}
      <AppFooter />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Main;
