import React from 'react';

const About = () => {
    return (
        <div className="relative flex flex-col max-w-2xl p-6 divide-y xl:flex-row xl:divide-y-0 xl:divide-x bg-gray-900 text-gray-100 divide-gray-700 justify-center mx-auto mt-10">
	<div className="p-3 space-y-1">
		<h3 className="text-3xl font-semibold">Iam Mizanir Rahman</h3>
		<p className="text-sm text-gray-400">Subscribe to get full access to our regular newsletter, for a wealth of original content. Reading recommendations, author interviews, videos and opinion pieces. Listen today. Booker Prizes</p>
	</div>
	<div className="flex items-center gap-3 p-3">
		<img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 bg-gray-500 rounded-full shadow" />
		<div className="space-y-1">
			<span className="text-xs">April 03, 2021</span>
			<div className="flex flex-wrap gap-3">
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-400 text-gray-900">javascript</a>
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-400 text-gray-900">serverless</a>
				<a rel="noopener noreferrer" href="#" className="inline-block px-2 py-1 text-sm font-semibold rounded-md bg-violet-400 text-gray-900">aws</a>
			</div>
		</div>
	</div>
</div>
    );
};

export default About;