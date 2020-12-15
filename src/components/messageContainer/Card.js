/**
 * Card components.
 * ActiveCard component is for incoming messages.
 * Card component is for outgoing messages.
 *
 * @author wesenbergg
 */

import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import theme from '../../theme';
import Text from '../Text';

export const ActiveCard = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardPart}>
        <Image style={styles.thumb} source={item.avatar} />
        <View style={item.active ? styles.activeBall : {}} />
      </View>
      <View style={styles.messagePart}>
        <Text bold h1 flex1>
          {item.name}
        </Text>
        <Text flex1 bold>
          {item.message}
        </Text>
      </View>
      <View style={styles.detailPart}>
        <Text textSecondary style={styles.details}>
          {item.time}
        </Text>
        <View style={styles.details}>
          <Text textSecondary badge bold small>
            {item.unreadCount}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Card = ({item}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardPart}>
        <Image style={styles.thumb} source={item.avatar} />
        <View style={item.active ? styles.activeBall : {}} />
      </View>
      <View style={styles.messagePart}>
        <Text bold h1 style={styles.messageTitle}>
          {item.name}
        </Text>
        <Text textSecondary style={styles.messageText}>
          {item.message}
        </Text>
      </View>
      <View style={styles.detailPart}>
        <Text textSecondary style={styles.details}>
          {item.time}
        </Text>
        <Text textSecondary style={styles.details}>
          {item.status}
        </Text>
      </View>
    </View>
  );
};

const defaultItem = {
  name: 'Loading',
  message: 'Loading',
  avatar: require('../../images/thumb.png'),
  unreadCount: -1,
  active: false,
  time: '0 min',
};

Card.defaultProps = {
  item: defaultItem,
};

ActiveCard.defaultProps = {
  item: defaultItem,
};

const styles = StyleSheet.create({
  cardContainer: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.spacing2,
  },
  cardPart: {
    paddingHorizontal: theme.spacing.spacing1,
  },
  detailPart: {
    paddingHorizontal: theme.spacing.spacing1,
    marginRight: theme.spacing.spacing2,
  },
  thumb: {
    width: theme.card.thumbSize.width,
    height: theme.card.thumbSize.height,
    borderRadius: theme.borderRadius.cardThumb,
  },
  messagePart: {
    flex: 1,
    height: theme.card.height,
    marginRight: theme.spacing.spacing1,
  },
  details: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  activeBall: {
    position: 'absolute',
    bottom: theme.cardBall.bottom,
    right: theme.cardBall.right,
    height: theme.cardBall.height,
    width: theme.cardBall.width,
    backgroundColor: theme.colors.success,
    borderRadius: theme.borderRadius.ball,
    borderWidth: theme.cardBall.borderWidth,
    borderColor: 'white',
    alignSelf: 'center',
  },
});

export default Card;
