import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from '../common/Icons';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    marginLeft: 4,
  },
});

const specials = {
  home: { name: 'Home', icon: 'md-home' },
  private: { name: 'Private messages', icon: 'md-chatboxes' },
  starred: { name: 'Starred', icon: 'md-star' },
  mentioned: { name: 'Mentions', icon: 'md-at' },
};

export default class TitleSpecial extends React.PureComponent {
  render() {
    const { narrow, color } = this.props;
    const { name, icon } = specials[narrow[0].operand];

    return (
      <View style={styles.wrapper}>
        <Icon name={icon} size={20} color={color} />
        <Text style={[styles.title, { color }]}>
          {name}
        </Text>
      </View>
    );
  }
}
