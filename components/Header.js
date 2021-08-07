import Image from 'next/image';
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';

function Header() {
	return (
		<header className="sticky top-0 z-50 grid grid-cols-3 py-5 px-5 md:px-10">
			<div className="relative flex items-center h-10 cursor-pointer my-auto">
				<Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
			</div>
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					className="text-sm text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none flex-grow"
					type="text"
					placeholder="Start your search..."
				/>
				<SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer" />
			</div>
			<div className="flex items-center justify-end text-gray-500 space-x-4">
				<p className="hidden md:inline cursor-pointer">Become a host</p>
				<GlobeAltIcon className="h-6 cursor-pointer" />
				<div className="flex items-start space-x-2 border-2 p-2 rounded-full">
					<MenuIcon className="h-6 cursor-pointer" />
					<UserCircleIcon className="h-6 cursor-pointer" />
				</div>
			</div>
		</header>
	);
}

export default Header;