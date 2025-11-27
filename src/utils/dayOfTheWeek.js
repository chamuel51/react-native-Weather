const getDayOfTheWeek = (date) => {
	let day = "";
	const newDate = new Date(date);
	// Date.prototype.getDay;
	switch (newDate.getUTCDay()) {
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		case 0:
			day = "Sunday";
			break;
	}

	return day;
};

export default getDayOfTheWeek;
