import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            contentStyle: { backgroundColor: Colors.gray700 },
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: "Your Favorite Places",
              headerRight: ({ tintColor }) => (
                <IconButton
                  color={tintColor}
                  icon="add"
                  size={24}
                  onPress={() => navigation.navigate("AddPlace")}
                />
              ),
            })}
          />
          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: "Add a new Place",
            }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
