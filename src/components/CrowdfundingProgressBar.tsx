'use client';
import useBalance from '@/hooks/useBalance';
import { Progress } from '@nextui-org/react';

export default function CrowdfundingProgressBar() {
	const balance = useBalance(
		'kaspa:pry255gcrqhgy9cgaf8v4kryej83skz0qaktpqryr8e6zzcc5nhw60wpkhgx4',
		true
	);
	return (
		<div className={'flex w-full flex-col items-center justify-center gap-2'}>
			<Progress
				size="lg"
				radius="lg"
				classNames={{
					base: 'max-w-md',
					track: 'drop-shadow-md border border-default',
					indicator: 'bg-primary',
					label: 'tracking-wider font-medium text-default-600',
					value: 'text-foreground/60'
				}}
				showValueLabel={true}
				label="Crowdfunding Progress"
				value={(parseFloat(balance) / 200000) * 100}
			/>
			<span className={'text-lg'}>{balance.toLocaleString()} KAS / 200,000 KAS</span>
		</div>
	);
}
