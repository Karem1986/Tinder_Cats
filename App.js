import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Card from './src/components/TinderCard/index';
import users from './assets/data/users';

import Swiper from 'react-native-deck-swiper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000',
};

export default function App() {
  const [index, setIndex] = React.useState(0);
  const onSwiped = () => {
    setIndex((index + 1) % data.length);
  };
  const swiperRef = React.createRef(); //allows to access the bottom/html element in the DOM.
  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          ref={swiperRef}
          cards={users}
          cardIndex={index}
          renderCard={user => <Card user={user} />}
          infinite
          onSwiper={onSwiped}
          stackSize={9}
          stackScale={10}
          stackSeparation={14}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          backgroundColor={'transparent'}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: {
                  backgroundColor: colors.red,
                  borderColor: colors.red,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: colors.blue,
                  borderColor: colors.blue,
                  color: colors.white,
                  borderWidth: 1,
                  fontSize: 24,
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContainerButtons}>
          <AntDesign
            name="closecircleo"
            size={54}
            color={colors.red}
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <AntDesign
            name="checkcircleo"
            size={54}
            color={colors.blue}
            onPress={() => swiperRef.current.swipeRight()}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  swiperContainer: {
    flex: 0.5,
  },
  bottomContainer: {
    flex: 0.49,
    justifyContent: 'space-evenly',
  },
  bottomContainerButtons: {
    flex: 0.4,
    // backgroundColor: colors.red,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
