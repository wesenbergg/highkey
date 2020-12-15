/**
 * Custom Text component (utility). Makes styling easier.
 *
 * @author wesenbergg
 */
import React from 'react';
import People from '../../data/people';
import {View, StyleSheet, FlatList} from 'react-native';
import Card, {ActiveCard} from './Card';
import SearchBar from './SearchBar';

const MessageContainer = () => {
  const renderItem = ({item}) =>
    item.unreadCount === 0 ? (
      <Card item={item} />
    ) : (
      <ActiveCard item={item} active />
    );

  return (
    <View style={styles.container}>
      <SearchBar />
      <FlatList
        data={People}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MessageContainer;
