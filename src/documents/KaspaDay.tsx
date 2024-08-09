import Link from 'next/link';

export default function KaspaDay() {
	return (
		<div className={'flex flex-col gap-3'}>
			<h1 className={'text-3xl font-extrabold'}>What is Kaspa Day?</h1>
			<p>
				Kaspa<b>Funding</b> did a soft launch on January 2024 and running smoothly ever since and now we
				are officially launching on 7th of November 2024 which is also considered as the Kaspa day. For
				the launch, KaspaFunding is hosting a grand meetup in Miami. Currently we are conducting a Kaspa
				miningthon to raise funds for the event.You can track the miningthon progress on the landing
				page.
				<br />
				<br /> Want to participate in the event? <br />
				<span className={'text-gray-400'}>Sign up coming soon</span>
				<br />
				Want to help organize the event?
				<br />
				<Link className={'text-primary'} href={'https://discord.gg/kaspafunding'} target={'_blank'}>
					Contact us on our Discord
				</Link>
			</p>
		</div>
	);
}
