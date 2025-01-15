import React from 'react';
import DrawerMenu from './src/components/CustomDrawer';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import {StyleSheet} from 'react-native';

function App(): React.JSX.Element {
  const Drawer = createDrawerNavigator();

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics} style={styles.main}>
      <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
          <Drawer.Screen name="X" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: 'yellow'},
});

export default App;
