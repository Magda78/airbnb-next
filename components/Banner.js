import Image from 'next/image';

function Banner() {
	return (
		<div className="relative h-[400px] sm:h-[500px] sm:scale-x-2 lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
			<Image
				src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
				layout="fill"
				objectFit="cover"
			/>
			<div className="absolute top-1/5 w-1/2 text-center left-[25%] p-2 sm:top-1/3 sm:w-1/3 sm:text-left sm:left-[10%] ">
				<p className="text-3xl font-bold sm:text-4xl text-white">Olympian & Paralympian Online Experiences</p>
				<button className="bg-white py-2 px-4 rounded-xl mt-2 text-sm active:scale-90 transition duration-150">
					Explore now
				</button>
			</div>
		</div>
	);
}

export default Banner;
