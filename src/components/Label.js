import React from 'react';
import {View} from 'react-native';
import {Colors} from 'react-native-paper';

const Label = ({round, children}) => {
  return (
    <View
      style={{
        backgroundColor: Colors.grey500,
        height: 33,
        minWidth: 105,
        minHeight: 30,
        maxHeight: 40,
        alignItems: 'center',
        opacity: 0.8,
        borderRadius: round ? round : 10,
        paddingTop: 3,
        paddingLeft: 3,
        paddingRight: 3,
      }}>
      {children}
    </View>
  );
};

export default Label;
