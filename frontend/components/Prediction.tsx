import { motion } from 'framer-motion';

const Prediction = ({
	prediction,
	loading,
}: {
	prediction: 1 | 0 | undefined;
	loading: boolean;
}) => {
	if (prediction === undefined) {
		return null;
	}

	return (
		<div>
			{loading ? (
				<div className='flex justify-center items-center'>
					<svg
						className='mt-12 h-48 w-12 animate-spin text-black dark:text-white'
						viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M13 2h-2v6h2V2zm0 14h-2v6h2v-6zm9-5v2h-6v-2h6zM8 13v-2H2v2h6zm7-6h2v2h-2V7zm4-2h-2v2h2V5zM9 7H7v2h2V7zM5 5h2v2H5V5zm10 12h2v2h2v-2h-2v-2h-2v2zm-8 0v-2h2v2H7v2H5v-2h2z'></path>
					</svg>
				</div>
			) : (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 10 }}
					className='font-serif text-3xl'>
					{prediction === 1 ? (
						<div className='space-y-2'>
							<h1>
								Norman says this article is{' '}
								<span className='text-transparent background-animate bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-400 to-red-600'>
									Clickbait
								</span>{' '}
								☹︎
							</h1>
							<p className='text-lg sm:text-2xl font-sans'>
								Don't bother it's probably not worth it, you'll lose precious
								minutes of your life you will likely never get back.
							</p>
						</div>
					) : (
						<div className='space-y-2'>
							<h1>
								Norman says this article is{' '}
								<span className='text-transparent background-animate bg-clip-text bg-gradient-to-r from-emerald-400 vial-teal-500 to-green-600'>
									Legit
								</span>{' '}
								☺︎
							</h1>
							<p className='text-lg sm:text-2xl font-sans'>
								This is definitely worth your time. Go read the article and
								learn new things. After all 'knowledge is power', 'reading to
								the mind is what exercise is to the body' and all that jazz.
							</p>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export default Prediction;
