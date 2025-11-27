import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utils/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { React, useState } from "react";
import { TextInput, TouchableOpacity } from "react-native";

const MainScreen = () => {
	const [cityInput, setCityInput] = useState(null);
	const navigation = useNavigation();
	const imageWeather = require("../../assets/images/raining-day.png");

	return (
		<SafeAreaView
			style={{
				flex: 1,
				padding: 16,
				backgroundColor: colors.skyBlue,
				alignContent: "center",
				alignItems: "center",
			}}
		>
			<Image style={styles.mainImage} source={imageWeather}></Image>
			<View style={{ flex: 2, rowGap: 20, width: "100%", marginTop: 24 }}>
				<TextInput
					style={{
						fontSize: 24,
						borderRadius: 8,
						padding: 8,
						color: colors.white,
						fontWeight: "600",
						borderWidth: 1,
						borderColor: colors.white,
					}}
					placeholder="Type a city"
					value={cityInput}
					onChangeText={setCityInput}
				></TextInput>

				<TouchableOpacity
					onPress={() =>
						navigation.navigate("WeatherDetails", {
							city: cityInput,
						})
					}
				>
					<View style={styles.button}>
						<Text style={styles.buttonText}>Get Weather</Text>
					</View>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	button: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: colors.white,
		backgroundColor: colors.white,
		alignItems: "center",
		justifyContent: "center",
		padding: 8,
	},
	buttonText: {
		color: colors.skyBlue,
		fontWeight: "800",
		fontSize: 24,
		textAlign: "center",
		width: "100%",
	},
	mainImage: {
		flex: 1,
		height: 300,
		width: 300,
		alignContent: "center",
		justifyContent: "center",
		resizeMode: "contain",
	},
});

export default MainScreen;
