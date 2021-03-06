import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const Container = ({children, style}) => {
  const myStyle = {...styles.container, ...style};

  return <View style={myStyle}>{children}</View>;
};

Container.prototype = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default Container;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingLeft: '7%',
    paddingRight: '7%',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
  },
});
