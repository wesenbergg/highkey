/**
 * Bottom tab navigation bar for application. Includes also menu item component.
 *
 * @author wesenbergg
 */

import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import theme from '../theme';
import Text from './Text';

const MenuItem = ({icon, disabled}) => {
  return (
    <TouchableOpacity style={styles.menuBtn}>
      <Text bold header center textSecondary={disabled}>
        {icon}
      </Text>
      <View style={disabled ? {} : styles.activeBall} />
    </TouchableOpacity>
  );
};

MenuItem.defaultProps = {
  icon: 'A',
  disabled: true,
};

const AppFooter = () => {
  const messagesIcon = 'M';
  const feedIcon = 'F';
  const settingsIcon = 'S';

  return (
    <View style={styles.container}>
      <MenuItem icon={messagesIcon} />
      <MenuItem disabled icon={feedIcon} />
      <MenuItem disabled icon={settingsIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuBtn: {
    paddingVertical: theme.spacing.spacing1,
    flex: 1,
  },
  activeBall: {
    height: theme.menuBall.height,
    width: theme.menuBall.width,
    backgroundColor: theme.colors.textPrimary,
    borderRadius: theme.borderRadius.ball,
    alignSelf: 'center',
  },
});

export default AppFooter;
