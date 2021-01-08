import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListHeader = ({title}) => {
  const listTitle = title.split(' ');
  return (
    <View style={styles.listHeader}>
      <View style={styles.titleContainer}>
        <Text style={styles.left}>{listTitle[0]}</Text>
        <Text style={styles.right}>{listTitle[1]}</Text>
      </View>
      <Icon name="chevron-right" color="white" size={25} />
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({
  listHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    textTransform: 'uppercase',
    marginRight: 10,
    fontFamily: 'Montserrat-Medium',
  },
  right: {
    textTransform: 'uppercase',
    marginRight: 5,
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
  },
});
