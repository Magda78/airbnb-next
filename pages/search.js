import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/dist/client/router';
import { format } from 'date-fns';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';

function Search({ results }) {
	const router = useRouter();
	const { location, startDate, endDate, guests } = router.query;
	const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
	const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
	const range = `${formatedStartDate} - ${formatedEndDate}`;

	return (
		<div className="h-screen">
			<Header placeholder={`${location} | ${range} | ${guests} guests`} />
			<main className="flex">
				<section className="flex-grow pt-14 px-6">
					<p className="text-xs">
						300+ Stays - {range} - for {guests} guests
					</p>
					<h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>
					<div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
						<p className="button">Cancellation Flexibillity</p>
						<p className="button">Type of Place</p>
						<p className="button">Price</p>
						<p className="button">Rooms and Beds</p>
						<p className="button">More filters</p>
					</div>
					<div className="flex flex-col">
						{results.map((item) => (
							<InfoCard
								key={item.img}
								img={item.img}
								title={item.title}
								location={item.location}
								description={item.description}
								star={item.star}
								price={item.price}
								total={item.total}
							/>
						))}
					</div>
				</section>
				<section className="hidden xl:inline-flex xl:min-w-[600px]">
					<Map results={results}/>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Search;

export async function getServerSideProps() {
	const results = await fetch('https://links.papareact.com/isz').then((res) => res.json());
	return {
		props: {
			results
		}
	};
}
