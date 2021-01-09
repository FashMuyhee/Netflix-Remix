import React, {useState} from 'react';
import {View, Image, StyleSheet, StatusBar} from 'react-native';
import {Text, withTheme, Colors} from 'react-native-paper';
import {
  ScrollContainer,
  Container,
  NavBar,
  BigMovieCard,
  SmallMovieCard,
  ListHeader,
  Label,
} from '../components';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MovieDetail = ({navigation, theme}) => {
  const [state, setState] = useState([
    {title: 'Movie 1'},
    {title: 'Movie 2'},
    {title: 'Movie 3'},
  ]);

  const {colors} = theme;
  return (
    <View style={{backgroundColor: colors.black}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View
        style={{
          height: hp(33),
          width: wp(100),
        }}>
        <Image
          source={require('../assets/img/bg_2.png')}
          style={styles.movieImage}
        />
        <NavBar
          left={
            <Icon
              name="arrow-left"
              color="white"
              size={25}
              onPress={() => navigation.goBack()}
            />
          }
          center={<Image source={require('../assets/img/logo.png')} />}
          right={<Icon name="heart" size={25} color="white" />}
          bgColor="transparent"
          customStyles={{marginTop: 20}}
        />
        <View style={styles.labels}>
          <Label>
            <Text>Crime Film</Text>
          </Label>
          <Label>
            <Text>Thriller</Text>
          </Label>
        </View>
        <View style={styles.movieAction}>
          <View style={styles.actionContainer}>
            <Icon
              name="upload"
              size={20}
              color="white"
              style={styles.iconStyle}
            />
            <Text style={styles.actionText}>Share</Text>
          </View>
          <View style={styles.actionContainer}>
            <Icon
              name="thumbs-up"
              size={20}
              color="white"
              style={styles.iconStyle}
            />
            <Text style={styles.actionText}>Like</Text>
          </View>
          <View style={styles.actionContainer}>
            <Icon
              name="play"
              size={20}
              color="white"
              style={{...styles.iconStyle, paddingTop: 10, paddingLeft: 5}}
            />
            <Text style={styles.actionText}>Play</Text>
          </View>
          <View style={styles.actionContainer}>
            <Icon
              name="download"
              size={20}
              color="white"
              style={styles.iconStyle}
            />
            <Text style={styles.actionText}>Download</Text>
          </View>
        </View>
      </View>
      <Container>
        <ScrollContainer>
          <Text>Movie Details</Text>
        </ScrollContainer>
      </Container>
    </View>
  );
};

export default withTheme(MovieDetail);

const styles = StyleSheet.create({
  movieImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  labels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(45),
    marginLeft: 20,
    position: 'absolute',
    top: hp(23),
  },
  movieAction: {
    backgroundColor: '#3e3e40',
    height: 80,
    width: wp(80),
    borderRadius: 30,
    alignSelf: 'center',
    top: hp(21),
    zIndex: 20,
    elevation: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 13,
  },
  iconStyle: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'center',
    paddingTop: 6,
  },
});
