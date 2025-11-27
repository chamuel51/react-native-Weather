import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ForeCastCell from "../components/ForeCastCell";
import useFetch from "../hooks/useFetch";
import colors from "../utils/colors";
import getDayOfTheWeek from "../utils/dayOfTheWeek";

const WeatherDetailsScreen = ({ route }) => {
	const { city } = route.params;
	const URL =
		"https://api.openweathermap.org/data/2.5/forecast?q=" +
		city +
		"&appid=88848c8f5729ebcaa8a44aa0e3a85c4a&units=imperial";
	const { data: weather } = useFetch(URL);

	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					fontSize: 40,
					alignContent: "center",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
					fontWeight: "medium",
				}}
			>
				{weather?.city?.name}
			</Text>
			<Image
				style={styles.mainImage}
				source={{
					uri: weather?.list?.[0]?.weather?.[0]?.icon
						? `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png`
						: undefined,
				}}
			></Image>
			<View style={styles.mainTable}>
				<View style={styles.temperatureCell}>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							alignContent: "flex-start",
							justifyContent: "flex-start",
							columnGap: 20,
							alignItems: "flex-end",
							textAlignVertical: "bottom",
						}}
					>
						<Text
							style={{
								fontSize: 88,

								marginBottom: -16,

								textAlignVertical: "bottom",
								justifyContent: "flex-end",
								alignItems: "flex-end",
								color: colors.white,
							}}
						>
							{weather?.list?.[0]?.main?.temp != null
								? `${Math.round(Number(weather.list[0].main.temp))}°`
								: "0"}

							<Text
								style={{
									fontSize: 32,
									color: colors.white,
								}}
							>
								{weather?.list?.[0]?.weather?.[0]?.main}{" "}
							</Text>
						</Text>
					</View>

					<Text
						style={{
							fontSize: 28,
							color: colors.white,
						}}
					>
						{weather?.list?.[0]?.main?.temp_max != null
							? Math.round(Number(weather.list[0].main.temp_max))
							: 0}
						°/
						{weather?.list?.[0]?.main?.temp_min != null
							? Math.round(Number(weather.list[0].main.temp_max))
							: 0}
						°
					</Text>
				</View>

				<ForeCastCell
					day={getDayOfTheWeek(weather?.list?.[0]?.dt_txt)}
					maxTemp={Math.round(Number(weather?.list?.[0]?.main?.temp_max))}
					minTemp={Math.round(Number(weather?.list?.[0]?.main?.temp_min))}
					icon={weather?.list?.[0]?.weather?.[0]?.icon}
				></ForeCastCell>

				<ForeCastCell
					day={getDayOfTheWeek(weather?.list?.[8]?.dt_txt)}
					maxTemp={Math.round(Number(weather?.list?.[8]?.main?.temp_max))}
					minTemp={Math.round(Number(weather?.list?.[8]?.main?.temp_min))}
					icon={weather?.list?.[8]?.weather?.[0]?.icon}
				></ForeCastCell>

				<ForeCastCell
					day={getDayOfTheWeek(weather?.list?.[16]?.dt_txt)}
					maxTemp={Math.round(Number(weather?.list?.[16]?.main?.temp_max))}
					minTemp={Math.round(Number(weather?.list?.[16]?.main?.temp_min))}
					icon={weather?.list?.[16]?.weather?.[0]?.icon}
				></ForeCastCell>
			</View>

			{/* <Button style={{ backgroundColor: colors.white }} title="Hola"></Button> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.skyBlue,
		alignContent: "center",
		alignItems: "center",
		paddingHorizontal: 24,
		paddingBottom: 48,
	},
	mainImage: {
		flex: 5,
		alignContent: "center",
		justifyContent: "center",
		resizeMode: "contain",
		width: "100%",
	},
	mainTable: {
		flex: 4,
		rowGap: "16",
	},
	temperatureCell: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
	},
});

export default WeatherDetailsScreen;
