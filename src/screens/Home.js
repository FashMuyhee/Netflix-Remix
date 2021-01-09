import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import {
  ScrollContainer,
  NavBar,
  BigMovieCard,
  SmallMovieCard,
  ListHeader,ContinueWatchingCard
} from '../components';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
  const [state, setState] = useState([
    {title: 'Movie 1'},
    {title: 'Movie 2'},
    {title: 'Movie 3'},
  ]);

  return (
    <>
      <NavBar
        left={<Icon name="menu" color="white" size={25} />}
        center={<Image source={require('../assets/img/logo.png')} />}
        right={
          <Avatar.Image
            source={require('../assets/img/avatar.png')}
            size={40}
          />
        }
      />
      <ScrollContainer>
        <BigMovieCard data={state} />
        <ListHeader title="continue watching" />
        <ContinueWatchingCard data={state} />
        <ListHeader title="my list" />
        <SmallMovieCard data={state} />
        <ListHeader title="netflix originals" />
        <SmallMovieCard data={state} />
      </ScrollContainer>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({});
