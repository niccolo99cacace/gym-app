import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import Home from "./pages/Home";
import Timer from "./components/Timer";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
  


      


      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}  options={{
        headerShown: false
      }}/>
      </Stack.Navigator>
 **/
