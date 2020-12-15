/**
 * Scaffold. Includes Screens header and a button for writing messages.
 *
 * @author wesenbergg
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';

const AppHeader = ({switchScreen}) => {
  const writeMessageIcon = 'W';
  const headerText = 'Messages';
  return (
    <View style={styles.container}>
      <Text spacing1 header bold>
        {headerText}
      </Text>
      <TouchableOpacity onPress={switchScreen}>
        <Text header bold textSecondary style={styles.dmBtn}>
          {writeMessageIcon}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  title: {
    padding: 10,
  },
  dmBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default AppHeader;
