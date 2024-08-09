import { useEffect, useState } from 'react';

const useCountdown = (targetDate: Date): [number, number, number, number, boolean] => {
	const countDownDate = new Date(targetDate).getTime();

	const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

	useEffect(() => {
		const interval = setInterval(() => {
			setCountDown(countDownDate - new Date().getTime());
		}, 1000);

		return () => clearInterval(interval);
	}, [countDownDate]);
	if (countDown < 0) {
		return [0, 0, 0, 0, true];
	}
	return getReturnValues(countDown);
};

const getReturnValues = (countDown: number): [number, number, number, number, boolean] => {
	// calculate time left
	const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
	const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

	return [days, hours, minutes, seconds, false];
};

export default useCountdown;

// https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks
