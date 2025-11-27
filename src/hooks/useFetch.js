import { useEffect, useState } from "react";

export default function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const URL = url;

		await fetch(URL)
			.then((result) => {
				return result.json();
			})
			.catch((err) => {
				setError(err);
			})
			.then((data) => {
				setData(data);
			});
	};
	return {
		data,
		error,
	};
}
