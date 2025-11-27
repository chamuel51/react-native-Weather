import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../utils/colors";

const ForeCastCell = ({
	day = "--",
	maxTemp = 0,
	minTemp = 0,
	icon = "01n",
}) => {
	return (
		<View style={styles.temperatureCell}>
			<View
				style={{
					flexDirection: "row",
					columnGap: 20,
					alignItems: "center",
				}}
			>
				<Image
					source={{ uri: `https://openweathermap.org/img/wn/${icon}@4x.png` }}
					style={{
						height: 32,
						width: 32,
					}}
				></Image>
				<Text style={styles.dayText}>{day}</Text>
			</View>

			<Text style={styles.temperatureText}>
				{maxTemp ?? 0}°/{minTemp ?? 0}°
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.skyBlue,
		alignContent: "center",
		alignItems: "center",
	},
	mainImage: {
		flex: 6,

		alignContent: "center",
		justifyContent: "center",
		alignItems: "center",
		padding: 80,
		resizeMode: "contain",
	},
	mainTable: {
		flex: 4,
	},
	temperatureCell: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},
	dayText: {
		fontSize: 32,
		color: colors.white,
		fontWeight: 400,
	},
	temperatureText: {
		color: colors.white,
		fontSize: 24,
	},
});

export default ForeCastCell;
