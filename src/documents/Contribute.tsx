import Link from 'next/link';

export default function Contribute() {
	return (
		<div className={'flex flex-col gap-3'}>
			<h1 className={'text-3xl font-extrabold'}>Contribute</h1>
			<p>
				You can contribute financially to the initiative by pointing your Kaspa ASIC miners to our
				operator wallet, or donating directly to the{' '}
				<Link
					className={'text-primary'}
					href={
						'https://kas.fyi/address/kaspa:pry255gcrqhgy9cgaf8v4kryej83skz0qaktpqryr8e6zzcc5nhw60wpkhgx4'
					}
					target={'_blank'}
				>
					KF Operator Wallet
				</Link>
				. Our{' '}
				<Link
					href={'https://kaspafunding.com/tools/miner-wizard'}
					target={'_blank'}
					className={'text-primary'}
				>
					Mining Wizard
				</Link>{' '}
				will help you get started.
			</p>
			<p>
				If you&apos;d like to learn about other ways to contribute, join{' '}
				<Link className={'text-primary'} href={'https://discord.gg/kaspafunding'} target={'_blank'}>
					our discord server
				</Link>
			</p>
		</div>
	);
}
