/**
 * Custom Text component (utility).
 * Makes styling and applying changes easier.
 *
 * @author wesenbergg
 */
import React from 'react';
import {Text as NativeText, StyleSheet, Platform} from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  ios: {
    fontFamily: theme.fonts.ios,
  },
  android: {
    fontFamily: theme.fonts.android,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  h1: {
    fontSize: theme.fontSizes.h1,
  },
  light: {
    color: theme.colors.textLight,
  },
  spacing1: {
    margin: theme.spacing.spacing1,
  },
  header: {
    fontSize: theme.fontSizes.header,
  },
  small: {
    fontSize: theme.fontSizes.small,
  },
  badge: {
    padding: theme.spacing.spacing05,
    backgroundColor: theme.colors.primary,
    color: theme.colors.textLight,
    borderRadius: theme.borderRadius.badge,
  },
  center: {
    textAlign: 'center',
  },
});

const Text = ({
  textPrimary,
  textSecondary,
  fontSize,
  fontWeight,
  bold,
  subheading,
  style,
  h1,
  light,
  spacing1,
  badge,
  center,
  header,
  small,
  ...props
}) => {
  const textStyle = [
    styles.text,
    Platform.OS === 'android' && styles.android,
    Platform.OS === 'ios' && styles.ios,
    textSecondary && styles.colorTextSecondary,
    textPrimary && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    bold && styles.fontWeightBold,
    subheading && styles.fontSizeSubheading,
    h1 && styles.h1,
    light && styles.light,
    spacing1 && styles.spacing1,
    badge && styles.badge,
    center && styles.center,
    header && styles.header,
    small && styles.small,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
