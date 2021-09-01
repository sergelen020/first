import React, {useRef, useState, useEffect} from 'react';
import {View, Dimensions, StyleSheet, Animated, Switch} from 'react-native';
import Background from './images/background.svg';
import Background2 from './images/back2.svg';
import Rock from './images/rock.svg';
import RockTexture from './images/rock-texture.svg';
import House from './images/house.svg';
import Window from './images/window.svg';
import Sun from './images/sun.svg';
import Front from './images/front.svg';
import Front1 from './images/front1.svg';
import Front2 from './images/front2.svg';
import Front3 from './images/front3.svg';
import Mountain from './images/mountain.svg';
import MountainTexture from './images/mountain-texture.svg';
import MountainTexture2 from './images/mountain-texture2.svg';
import RockTree from './images/rock-tree.svg';
import Clouds from './images/clouds.svg';
import FrontTrees from './images/front-trees.svg';
import Mountain2 from './images/mountain2.svg';
import Front13 from './images/front13.svg';
import Front12 from './images/front12.svg';
import Front11 from './images/front11.svg';
import Window2 from './images/window2.svg';
import Stars from './images/stars.svg';

export const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    if (isEnabled === false) {
      setIsEnabled(true);
      fadeOut();
    } else {
      setIsEnabled(false);
      fadeIn();
    }
  };
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      isEnabled: true,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
      isEnabled: false,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <View style={styles.back2}>
        <Background2 style={styles.back2} />
        <Stars style={styles.stars} />
        <House style={styles.house2} />
        <Window2 style={styles.window2} />
        <Mountain2 style={(styles.mountain, styles.mountain2Margin)} />
        <Front13 style={styles.front13Margin} />
        <Front12 style={styles.front12} />
        <Front11 style={styles.front11} />
      </View>
      <Animated.View style={(styles.back, {opacity: fadeAnim})}>
        <Background style={styles.back}></Background>
        <House style={styles.house} />
        <Window style={styles.window} />
        <Mountain style={styles.mountain} />
        <Front3 style={styles.front3} />
        <Front2 style={styles.front2} />
        <Front1 style={styles.front1} />
      </Animated.View>
      <Clouds style={styles.clouds} />
      <Sun style={styles.sun} />
      <Front style={styles.front} />
      <MountainTexture2 style={styles.mountainTexture2} />
      <RockTree style={styles.rockTree} />
      <Rock style={styles.rock} />
      <RockTexture style={styles.rockTexture} />
      <MountainTexture style={styles.mountainTexture} />
      <FrontTrees style={styles.frontTrees} />
      <Switch
        style={styles.container}
        trackColor={{false: '#27173A', true: '#27173A'}}
        thumbColor={isEnabled ? '#FDDA01' : '#FDDA01'}
        ios_backgroundColor="#27173A"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    marginTop: 40,
    marginLeft: 330,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    position: 'relative',
    height: 875,
    width: 525,
  },
  back2: {
    position: 'absolute',
    marginLeft: -30,
    height: 875,
    width: 525,
  },
  rock: {
    position: 'absolute',
    marginLeft: 148,
    marginTop: 485,
    height: 360,
    width: 270,
  },
  rockTexture: {
    position: 'absolute',
    marginLeft: 146,
    marginTop: 509,
    height: 272,
    width: 198,
  },
  house: {
    position: 'absolute',
    marginLeft: 223,
    marginTop: 456,
    height: 85,
    width: 83,
  },
  house2: {
    position: 'absolute',
    marginLeft: 253,
    marginTop: 456,
    height: 85,
    width: 83,
  },
  window: {
    position: 'absolute',
    marginLeft: 250,
    marginTop: 473,
    height: 18,
    width: 18,
  },
  window2: {
    position: 'absolute',
    marginLeft: 280,
    marginTop: 473,
    height: 18,
    width: 18,
  },
  sun: {
    position: 'absolute',
    height: 105,
    width: 105,
    marginTop: 400,
    marginLeft: 90,
  },
  front: {
    position: 'absolute',
    marginTop: 601,
    width: 440,
    height: 300,
  },
  front1: {
    position: 'absolute',
    marginTop: 570,
    width: 360,
    height: 350,
  },
  front11: {
    position: 'absolute',
    marginTop: 570,
    marginLeft: 30,
    width: 360,
    height: 350,
  },
  front2: {
    position: 'absolute',
    marginTop: 533,
    marginLeft: 32,
    width: 353,
    height: 350,
  },
  front12: {
    position: 'absolute',
    marginTop: 536,
    marginLeft: 46,
    width: 353,
    height: 350,
  },
  front3: {
    position: 'absolute',
    marginTop: 570,
    width: 180,
    height: 250,
  },
  front13Margin: {
    position: 'absolute',
    marginTop: 570,
    marginLeft: 30,
    width: 180,
    height: 250,
  },
  mountain: {
    position: 'absolute',
    marginTop: 545,
    width: 289,
    height: 189,
  },
  mountain2Margin: {
    marginLeft: 30,
    marginTop: 545,
    width: 289,
    height: 189,
  },
  mountainTexture: {
    position: 'absolute',
    marginTop: 542,
    marginLeft: 17,
    height: 130,
    width: 140,
  },
  mountainTexture2: {
    position: 'absolute',
    marginTop: 605,
    marginLeft: 160,
    height: 130,
    width: 140,
  },
  rockTree: {
    position: 'absolute',
    marginTop: 347,
    marginLeft: 247,
    height: 160,
    width: 220,
  },
  clouds: {
    position: 'absolute',
    marginTop: 100,
    marginLeft: -173,
    height: 210,
    width: 775,
  },
  frontTrees: {
    position: 'absolute',
    marginTop: 340,
  },
  stars: {
    position: 'absolute',
    marginTop: 35,
    marginLeft: -50,
    width: 555,
    height: 350,
  },
});

export default App;
