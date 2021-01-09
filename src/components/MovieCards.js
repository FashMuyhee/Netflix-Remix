import React from 'react';
import {View, TouchableWithoutFeedback, StyleSheet} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const BigMovieCard = ({data}) => {
  const navigation = useNavigation();
  const _renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('movie')}>
        <View
          key={index}
          style={{
            backgroundColor: Colors.red600,
            height: 150,
            borderRadius: 10,
            padding: 20,
          }}>
          <Text>{item.title}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={wp(100)}
      itemWidth={wp(70)}
      containerCustomStyle={{
        padding: 10,
        height: 180,
        marginTop: 20,
        marginBottom: 20,
      }}
      loop={true}
      loopClonesPerSide={2}
      autoplay
      autoplayDelay={1}
      layout="default"
      layoutCardOffset={2}
      enableMomentum={true}
    />
  );
};

const ContinueWatchingCard = ({data}) => {
  const navigation = useNavigation();

  const _renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('movie')}>
        <View
          key={index}
          style={{
            backgroundColor: Colors.blueA400,
            height: hp(20),
            borderRadius: 10,
            marginRight: 5,
          }}>
          <View style={styles.movieImage}></View>
          <View>
            <View style={styles.progressBarFull} />
            <View style={styles.progressBarCurrent} />
            <View style={styles.details}>
              <Text>{item.title}</Text>
              <FeatherIcon name="play-circle" color="white" size={26} />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={wp(100)}
      itemWidth={wp(27)}
      containerCustomStyle={{
        padding: 10,
        height: hp(24),
        marginTop: 20,
        marginBottom: 20,
      }}
      layout="default"
      activeAnimationType="spring"
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={1}
      loop={true}
      loopClonesPerSide={2}
    />
  );
};
const SmallMovieCard = ({data}) => {
  const navigation = useNavigation();

  const _renderItem = ({item, index}) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('movie')}>
        <View
          key={index}
          style={{
            backgroundColor: Colors.blueA400,
            height: hp(20),
            borderRadius: 10,
            marginRight: 5,
          }}></View>
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Carousel
      data={data}
      renderItem={_renderItem}
      sliderWidth={wp(100)}
      itemWidth={wp(27)}
      containerCustomStyle={{
        padding: 10,
        height: hp(24),
        marginTop: 20,
        marginBottom: 20,
      }}
      layout="default"
      activeAnimationType="spring"
      inactiveSlideScale={0.94}
      inactiveSlideOpacity={1}
      loop={true}
      loopClonesPerSide={2}
    />
  );
};
export {BigMovieCard, SmallMovieCard, ContinueWatchingCard};

const styles = StyleSheet.create({
  progressBarFull: {
    backgroundColor: Colors.lightGreenA400,
    height: 4,
  },
  progressBarCurrent: {
    backgroundColor: Colors.redA100,
    height: 4,
    width: '40%',
    position: 'absolute',
  },
  details: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  movieImage: {
    backgroundColor: Colors.white,
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});
