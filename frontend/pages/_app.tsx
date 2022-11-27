import 'styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider enableSystem={true} attribute='class' defaultTheme='dark'>
			<div className=''>
				<Component {...pageProps} />
			</div>
			<div className='py-4 max-w-7xl mx-auto px-4 flex justify-center items-center'>
				<div className='font-serif text-center text-gray-500 dark:text-zinc-600'>
					© {new Date().getFullYear()}{' '}
					<a
						className='underline underline-offset-2 hover:text-black dark:hover:text-white transition duration-300'
						target='_blank'
						rel='noopener noreferrer'
						href='https://chahineyahya.dev'>
						Yahya Chahine
					</a>{' '}
					All rights reserved.
				</div>
			</div>
		</ThemeProvider>
	);
}

export default MyApp;
