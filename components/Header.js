import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { SearchIcon, MenuIcon, GlobeAltIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header({placeholder}) {
	const input = useRef();
	const guestsNumber = useRef();
	const [ userInput, setUserInput ] = useState('');
	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());
	const [ guests, setGuests ] = useState(1);
	const [ navBackground, setNavBackground ] = useState(false);
	const router = useRouter();

	const inputHandler = () => {
		setUserInput(input.current.value);
		console.log(userInput);
	};

	const selectionRange = {
		startDate: startDate,
		endDate: endDate,
		key: 'selection'
	};

	const handleSelect = (ranges) => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const guestsHandler = () => {
		setGuests(guestsNumber.current.value);
	};

	const cancelButtonHandler = () => {
		setUserInput('');
	};

	const searchButtonHandler = () => {
		router.push({
			pathname: '/search',
			query: {
				location: userInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toISOString(),
				guests,
			}
		});
		console.log(startDate,endDate)
	}

	useEffect(()=>{
		const scrollHandler = () => {
			if(window.scrollY <= 100) {
				setNavBackground(false)
			}
			else {
				setNavBackground(true)
			}
			console.log(window.scrollY)
		}
		window.addEventListener('scroll', scrollHandler)
		return () => window.removeEventListener('scroll', scrollHandler)
		},[])
	

	return (
		<header className={`sticky top-0 z-50 grid grid-cols-3 py-5 px-5 md:px-10 ${navBackground ? 'bg-white' : 'bg-transparent'}`}>
			<div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
				<Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
			</div>
			<div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
				<input
					value={userInput}
					ref={input}
					onChange={inputHandler}
					className="text-sm text-gray-600 placeholder-gray-400 pl-5 bg-transparent outline-none flex-grow"
					type="text"
					placeholder= {placeholder || "Start your search..."}
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
			{userInput && (
				<div className="flex flex-col col-span-3 mx-auto">
					<DateRangePicker
						ranges={[ selectionRange ]}
						minDate={new Date()}
						rangeColors={[ '#FD5D61' ]}
						onChange={handleSelect}
					/>
					<div className="flex items-center border-b mb-4">
						<h2 className="text-2xl flex-grow font-semibold">Number og Guests</h2>
						<UserIcon className="h-5" />
						<input
							value={guests}
							onChange={guestsHandler}
							min={1}
							ref={guestsNumber}
							type="number"
							className="w-12 pl-2 text-lg outline-none text-red-400"
						/>
					</div>
					<div className="flex">
						<button onClick={cancelButtonHandler} className="flex-grow text-gray-500">
							Cancel
						</button>
						<button onClick={searchButtonHandler}className="flex-grow text-red-400">Search</button>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
