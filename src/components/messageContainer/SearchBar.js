/**
 * Search bar for searching messages in app container.
 *
 * @author wesenbergg
 */
import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const SearchBar = () => {
  const searchIcon = 'Q';
  const searchPlaceholder = 'Search for messages or users';
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Text h1 bold spacing1 textSecondary>
          {searchIcon}
        </Text>
      </TouchableOpacity>
      <TextInput style={styles.search} placeholder={searchPlaceholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    marginVertical: theme.spacing.spacing1,
    marginHorizontal: theme.spacing.spacing4,
    flexDirection: 'row',
  },
  search: {
    fontSize: theme.fontSizes.body,
    flex: 1,
  },
});

export default SearchBar;
