import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'react-native-paper';

const MyText = (props) => {
  return <MyText theme={{fonts: {regular: 'Montserrat-Bold'}}} {...props} />;
};

MyText.prototype = {
  children: PropTypes.element.isRequired,
  style: PropTypes.object,
};

export default MyText;
