import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import Tab from '../Tab';

const {width} = Dimensions.get('window');
const DRAWER_WIDTH = width;

function CustomDrawer() {
  const translateX = useSharedValue(0);
  const yOffset = useSharedValue(0);
  const borderRadius = useSharedValue(0);

  const animatedDrawerStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: translateX.value / 1.5},
      {translateY: translateX.value / 7},
      {
        rotate: `${interpolate(
          translateX.value,
          [DRAWER_WIDTH, 0],
          [-10, 0],
        )}deg`,
      },
    ],
    borderRadius: borderRadius.value,
  }));

  const animatedSidebarStyle = useAnimatedStyle(() => ({
    marginTop: yOffset.value,
    borderTopLeftRadius: borderRadius.value,
  }));

  const toggleDrawer = () => {
    const isOpen = translateX.value === 0;
    translateX.value = withTiming(isOpen ? DRAWER_WIDTH : 0, {duration: 500});
    yOffset.value = withTiming(isOpen ? 30 : 0, {duration: 500});
    borderRadius.value = withTiming(isOpen ? 30 : 0, {duration: 500});
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.drawer, animatedDrawerStyle]}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Text style={styles.drawerText}>START</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[styles.mainContent, animatedSidebarStyle]}>
        <Text style={styles.toggleText}>Beka</Text>
        <View style={styles.tabGroup}>
          <Tab label="Start" onPress={toggleDrawer} />
          <Tab label="Your cart" onPress={toggleDrawer} />
          <Tab label="Favorites" onPress={toggleDrawer} />
          <Tab label="Your Orders" onPress={toggleDrawer} />
        </View>
      </Animated.View>
    </View>
  );
}

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  drawer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 9,
    backgroundColor: '#f3f3f3',
    padding: 32,
  },
  drawerText: {
    color: '#9a9aa1',
    fontSize: 20,
  },
  mainContent: {
    flex: 1,
    backgroundColor: '#241721',
    paddingHorizontal: 50,
    paddingVertical: 30,
  },
  toggleText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabGroup: {
    rowGap: 30,
    paddingVertical: 40,
  },
});
