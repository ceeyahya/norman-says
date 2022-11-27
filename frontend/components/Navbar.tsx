import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function Navbar() {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const currentTheme = theme === 'system' ? systemTheme : theme;

	return (
		<div className='relative z-50 max-w-7xl mx-auto py-4 px-4'>
			{mounted ? (
				<div className='flex items-center justify-between'>
					<div>
						<div className='flex items-center space-x-2'>
							<svg className='h-8 w-8' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M6 4h14v2h2v6h-8v2h6v2h-4v2h-2v2H2V8h2V6h2V4zm2 6h2V8H8v2z'></path>
							</svg>
							<p className='font-serif text-2xl italic'>Norman Says</p>
						</div>
					</div>
					{currentTheme === 'dark' ? (
						<button
							className=' hover:bg-gray-100 hover:text-black transition duration-300 px-2 py-2'
							onClick={() => setTheme('light')}>
							<svg className='w-6 h-6' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M13 0h-2v4h2V0ZM0 11v2h4v-2H0Zm24 0v2h-4v-2h4ZM13 24h-2v-4h2v4ZM8 6h8v2H8V6ZM6 8h2v8H6V8Zm2 10v-2h8v2H8Zm10-2h-2V8h2v8Zm2-14h2v2h-2V2Zm0 2v2h-2V4h2Zm2 18h-2v-2h2v2Zm-2-2h-2v-2h2v2ZM4 2H2v2h2v2h2V4H4V2ZM2 22h2v-2h2v-2H4v2H2v2Z'></path>
							</svg>
						</button>
					) : (
						<button
							className='px-2 py-2 hover:bg-black hover:text-white transition duration-300'
							onClick={() => setTheme('dark')}>
							<svg className='w-6 h-6' viewBox='0 0 24 24'>
								<path
									fill='currentColor'
									d='M6 2h8v2h-2v2h-2V4H6V2ZM4 6V4h2v2H4Zm0 10H2V6h2v10Zm2 2H4v-2h2v2Zm2 2H6v-2h2v2Zm10 0v2H8v-2h10Zm2-2v2h-2v-2h2Zm-2-4h2v4h2v-8h-2v2h-2v2Zm-6 0v2h6v-2h-6Zm-2-2h2v2h-2v-2Zm0 0V6H8v6h2Z'></path>
							</svg>
						</button>
					)}
				</div>
			) : null}
		</div>
	);
}

export default Navbar;
