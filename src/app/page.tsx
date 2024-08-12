import AlternateCountdown from '@/components/AlternateCountdown';
import CrowdfundingProgressBar from '@/components/CrowdfundingProgressBar';
import DocumentModal from '@/components/DocumentModal';
import Contribute from '@/documents/Contribute';
import KaspaDay from '@/documents/KaspaDay';
import { faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center gap-8 p-6 md:p-24">
			<div className={'space-y-1 text-center'}>
				<h1 className={'text-4xl font-extrabold'}>Kaspa Day</h1>
				<h1 className={'text-xl'}>
					Kaspa<b>Funding</b> Launch Event
				</h1>
				<h2>November 7 s, 2024</h2>
			</div>
			<AlternateCountdown toDate={new Date(2024, 11, 1, 0, 0, 0)} />
			<CrowdfundingProgressBar />
			<div className={'flex flex-wrap justify-center gap-3'}>
				<DocumentModal id={'kaspa-day'} buttonText={'What is Kaspa Day?'} document={KaspaDay()} />
				<DocumentModal id={'contribute'} buttonText={'Contribute'} document={Contribute()} />
				<Link
					href={'https://lu.ma/event/evt-vG0HXrSWbL9sIKB'}
					aria-label={'Attend KaspaFunding Launch Day'}
					target={'_blank'}
				>
					<Button variant={'flat'} color={'primary'}>
						Attend
					</Button>
				</Link>
			</div>

			<div className={'flex items-center gap-3 text-lg'}>
				<Link href={'https://kaspafunding.com'} target={'_blank'}>
					Kaspa<b>Funding</b>
				</Link>

				<div className={'flex gap-2'}>
					<Link
						href={'https://github.com/kaspafunding'}
						target={'_blank'}
						className={'transition-colors hover:text-primary'}
					>
						<FontAwesomeIcon icon={faGithub} />
					</Link>
					<Link
						href={'https://discord.gg/kaspafunding'}
						target={'_blank'}
						className={'transition-colors hover:text-primary'}
					>
						<FontAwesomeIcon icon={faDiscord} />
					</Link>
					<Link
						href={'https://twitter.com/fundingkaspa'}
						target={'_blank'}
						className={'transition-colors hover:text-primary'}
					>
						<FontAwesomeIcon icon={faTwitter} />
					</Link>
				</div>
			</div>
		</main>
	);
}
