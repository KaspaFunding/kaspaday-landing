import { Providers } from '@/app/providers';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'KaspaFunding Launch Party',
	description:
		'Register and Learn more about the KaspaFunding Launch Party in Miami happening on Novemember 7th, the Kaspa Day',
	keywords: 'Kaspa, KaspaFunding, Kaspa Day, Miami, Launch Party, Miningthon',
	twitter: {
		card: 'summary_large_image',
		site: '@fundingkaspa',
		title: 'KaspaFunding Launch Party',
		description:
			'Register and Learn more about the KaspaFunding Launch Party in Miami happening on Novemember 7th, the Kaspa Day',
		images: ['https://launch.kaspafunding.com/thumbnail.png']
	},
	openGraph: {
		url: 'https://launch.kaspafunding.com',
		title: 'KaspaFunding Launch Party',
		description:
			'Register and Learn more about the KaspaFunding Launch Party in Miami happening on Novemember 7th, the Kaspa Day',
		images: [
			{
				url: 'https://launch.kaspafunding.com/thumbnail.png',
				width: 1200,
				height: 627,
				alt: 'KaspaFunding Launch Party'
			}
		]
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
