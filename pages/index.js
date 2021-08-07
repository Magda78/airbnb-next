import Head from 'next/head';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';
import Footer from '../components/Footer';

export default function Home({ smallCardsData, bigCardsData }) {
	return (
		<div>
			<Head>
				<title>AirBnB Clone</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{smallCardsData.map((item) => (
							<SmallCard
								key={item.img}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
				<section>
					<h2 className="text-4xl font-semibold pb-5">Live Anywhere</h2>
					<div className="flex space-x-4 p-3 overflow-scroll scrollbar-hide">
						{bigCardsData.map((item) => <MediumCard key={item.img} img={item.img} title={item.title} />)}
					</div>
				</section>
				<LargeCard
					img="https://links.papareact.com/4cj"
					title="The Greatest Outdoors"
					description="Wishlists created by AirBnb"
					buttonText="Get Inspired"
				/>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const smallCardsData = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
	const bigCardsData = await fetch('https://links.papareact.com/zp1').then((res) => res.json());
	return {
		props: {
			smallCardsData,
			bigCardsData
		}
	};
}
