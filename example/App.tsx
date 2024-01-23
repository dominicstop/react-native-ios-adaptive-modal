import * as React from "react";
import { View, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "./src/screens/HomeScreen";
import * as radix from "@radix-ui/colors";

// import { TestScreen } from './src/screens/Test01Screen';

import { SHARED_ENV } from "./src/constants/SharedEnv";
import { ExampleScreen } from "./src/screens/Example";

const shouldEnableTabs =
  SHARED_ENV.enableReactNavigation && SHARED_ENV.enableTabNavigation;

function Tab1StackScreen() {
  if (shouldEnableTabs) {
    const Tab1Stack = createNativeStackNavigator();

    return (
      <Tab1Stack.Navigator initialRouteName='Home'>
        <Tab1Stack.Screen name='Home' component={HomeScreen} />
      </Tab1Stack.Navigator>
    );
  } else {
    return null;
  }
}

export default function App() {
  if (shouldEnableTabs) {
    const TabNavigator = createBottomTabNavigator();

    return (
      <NavigationContainer>
        <TabNavigator.Navigator>
          <TabNavigator.Screen name='Tab1' component={Tab1StackScreen} />
          <TabNavigator.Screen name='Tab2' component={HomeScreen} />
        </TabNavigator.Navigator>
      </NavigationContainer>
    );
  } else if (SHARED_ENV.enableReactNavigation) {
    const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            contentStyle: {
              backgroundColor: "black",
            },
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        >
          <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              headerTitle: () => (
                <Image
                  source={require("./assets/beatgig-black.png")}
                  style={{
                    height: 45,
                    width: 115,
                    resizeMode: "contain",
                  }}
                />
              ),
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name='Example'
            component={ExampleScreen}
            options={{
              presentation: "fullScreenModal",
              headerTitle: () => (
                <Image
                  source={require("./assets/beatgig-black.png")}
                  style={{
                    height: 45,
                    width: 115,
                    resizeMode: "contain",
                  }}
                />
              ),
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <HomeScreen />;
}
