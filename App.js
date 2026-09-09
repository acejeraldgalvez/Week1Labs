import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import AddTaskScreen from "./screens/AddTaskScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  function onAuthStateChange(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, onAuthStateChange);
    return subscriber; 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name = "AddTask"
            component = {AddTaskScreen}
            options = {{ title: "My Tasks" }}
          />
        ) : (
          <>
            <Stack.Screen
              name = "Login"
              component = {LoginScreen}
              options = {{ headerShown: false }}
            />
            <Stack.Screen
              name = "Signup"
              component = {SignupScreen}
              options = {{ title: "Sign Up" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}