import { motion } from 'framer-motion';

const Prediction = ({ prediction }: { prediction: 1 | 0 | undefined }) => {
	if (prediction === undefined) {
		return null;
	}

	return (
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
					<p className='text-2xl font-sans'>
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
					<p className='text-2xl font-sans'>
						This is definitely worth your time. Go read the article and learn
						new things. After all 'knowledge is power', 'reading to the mind is
						what exercise is to the body' and all that jazz.
					</p>
				</div>
			)}
		</motion.div>
	);
};

export default Prediction;
