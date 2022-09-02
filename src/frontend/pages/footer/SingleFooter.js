import React from 'react';

function SingleFooter() {
	return (
		<>
			<div className='services flex justify-between flex-col items-center'>
				<h1 className='text-2xl font-semibold text-cyan-700  mb-4'>Our Services</h1>
				<ul className='flex flex-col gap-y-3'>
					<li>Dental Care</li>
					<li>Massage Therapy</li>
					<li>Cardiology</li>
					<li>Diagnosis</li>
					<li>Ambulance </li>
				</ul>
			</div>
			<div className='contact flex justify-between flex-col items-center '>
				<h1 className='text-2xl font-semibold text-cyan-700  mb-4'>Contact Info</h1>
				<ul className='flex flex-col gap-y-3'>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-solid fa-phone-flip" />
						</span>
						+123-45-67
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-solid fa-phone-flip">
							</i>
						</span>
						+222-44-21
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-solid fa-envelope" />
						</span> carely@gmail.com
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-solid fa-envelope" />
						</span>
						help@gmail.com
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-solid fa-location-dot" />
						</span>
						Sydney,Australia
					</li>
				</ul>
			</div>
			<div className='follow flex justify-between flex-col items-center '>
				<h1 className='text-2xl font-semibold text-cyan-700 mb-4'>Follow Us</h1>
				<ul className='flex flex-col gap-y-3'>
					<li >
						<span className='px-2 inline-block'>
							<i className="fa-brands fa-facebook-f" />
						</span>
						Facebook
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-brands fa-twitter" />
						</span>
						Twitter
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-brands fa-linkedin-in"></i>
						</span>

						LinkedIn
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-brands fa-instagram"></i>
						</span>

						Instagram
					</li>
					<li>
						<span className='px-2 inline-block'>
							<i className="fa-brands fa-pinterest"></i>
						</span>

						Pinterest
					</li>

				</ul>
			</div>
		</>
	);
}

export default SingleFooter;