import React from 'react';
import {View} from 'react-native';
import {Text, Colors} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const BigMovieCard = ({data}) => {
  const _renderItem = ({item, index}) => {
    return (
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
      onTouchEnd={() => console.log('pressed')}
    />
  );
};

const SmallMovieCard = ({data}) => {
  const _renderItem = ({item, index}) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: Colors.blue700,
          height: hp(20),
          borderRadius: 10,
          padding: 20,
          marginRight: 5,
        }}>
        <Text>{item.title}</Text>
      </View>
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
export {BigMovieCard, SmallMovieCard};
