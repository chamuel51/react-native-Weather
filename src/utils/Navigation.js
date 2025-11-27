import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import WeatherDetailsScreen from "../screens/WeatherDetailsScreen";
import colors from "../utils/colors";

const WeatherNavigator = createNativeStackNavigator();

function WeatherNavigatorStack() {
	return (
		<WeatherNavigator.Navigator
			initialRouteName="Main"
			screenOptions={{
				headerTintColor: "white",
				headerStyle: {
					backgroundColor: colors.skyBlue,
				},
			}}
		>
			<WeatherNavigator.Screen
				name="Main"
				component={MainScreen}
				options={{
					title: "Weather App",
				}}
			></WeatherNavigator.Screen>

			<WeatherNavigator.Screen
				name="WeatherDetails"
				component={WeatherDetailsScreen}
			></WeatherNavigator.Screen>
		</WeatherNavigator.Navigator>
	);
}

export default function Navigation() {
	return (
		<NavigationContainer>
			<WeatherNavigatorStack></WeatherNavigatorStack>
		</NavigationContainer>
	);
}
