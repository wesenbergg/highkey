/**
 * Custom Text component (utility). Makes styling easier.
 *
 * @author wesenbergg
 */
import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import toUpperCase from '../../utils/toUpperCase';

const ToUppercaseForm = () => {
  const [value, onChangeText] = React.useState('Start typing...');
  return (
    <View style={styles.container}>
      <Text>{toUpperCase(value)}</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder={'Start typing...'}
          onChangeText={(text) => onChangeText(text)}
          value={value}
          clearTextOnFocus
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    marginVertical: theme.spacing.spacing1,
    marginHorizontal: theme.spacing.spacing4,
    flexDirection: 'row',
  },
  search: {
    fontSize: theme.fontSizes.body,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    // flexDirection: 'row',
    flex: 1,
  },
});

export default ToUppercaseForm;
