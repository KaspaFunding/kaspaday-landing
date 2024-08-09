'use client';
import useCountdown from '@/hooks/useCountdown';
import { useIsClient } from 'usehooks-ts';

export default function AlternateCountdown(props: { toDate: Date }) {
	const [days, hours, minutes, seconds, isFinished] = useCountdown(props.toDate);
	const isClient = useIsClient();

	return isClient ? (
		isFinished ? (
			<p className="text-3xl font-bold md:text-5xl">🎉 Event started! 🎉</p>
		) : (
			<div className="flex items-center gap-6">
				<div className="flex flex-col items-center">
					<span className="text-3xl font-bold md:text-5xl">{days}</span>
					<span className="text-base font-medium">Days</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl font-bold md:text-5xl">{hours}</span>
					<span className="text-base font-medium">Hours</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl font-bold md:text-5xl">{minutes}</span>
					<span className="text-base font-medium">Minutes</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-3xl font-bold md:text-5xl">{seconds}</span>
					<span className="text-base font-medium">Seconds</span>
				</div>
			</div>
		)
	) : (
		<div className="flex items-center gap-6">
			<div className="flex flex-col items-center">
				<span className="text-3xl font-bold md:text-5xl">000</span>
				<span className="text-base font-medium">Days</span>
			</div>
			<div className="flex flex-col items-center">
				<span className="text-3xl font-bold md:text-5xl">00</span>
				<span className="text-base font-medium">Hours</span>
			</div>
			<div className="flex flex-col items-center">
				<span className="text-3xl font-bold md:text-5xl">00</span>
				<span className="text-base font-medium">Minutes</span>
			</div>
			<div className="flex flex-col items-center" suppressHydrationWarning>
				<span className="text-3xl font-bold md:text-5xl">00</span>
				<span className="text-base font-medium">Seconds</span>
			</div>
		</div>
	);
}
