import React, { useState } from "react";

const EmployeeList = () => {
	const [employeeList, setEmployeeList] = useState(Array(6).fill(0));
	return (
		<div className='w-[255px] h-[729px] border bg-[#FFFFFF] rounded-3xl border-none shadow-xl mx-1 gap-3 flex flex-col items-center'>
			<div className='flex flex-row items-center justify-around w-[200px] h-[69px] bg-[#E2E2FF] rounded-2xl'>
				<img
					className='rounded-full h-10 w-10'
					src='https://s3-alpha-sig.figma.com/img/232a/14a1/9c4d361cb9f54e38261e75afcd23b9b1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NHNV44Z6j4FOe8n8yRdVnyZ9lXKZBFTevhhcdhG3UUpGwg7FtqeGDS8W6tEIclVPd~~H9HnLYVm5L2ihp-NofRyWnlI3TwzIGtrGNeWnQ3yupmInUAtkVG5XjC~T2nchwJje7JFACZJsu6VKgrHyPMyiL~3ltvQdCGFBPAFDYU7YoBevQkaYKRZ4gxcC1ip0OA7~XAkoqlf~y9PjPQDram9y99hjUhivfzrMNR3mC--0OoY06SoEr58845yxCeSGfTxJmytHhrz61mugQNIORhRljJnk~EF1XkqFl5xh-2ZFkOA3WG1IT0d25KXJXHOWQxQIaBPc4-DmtgEKtxtq9w__'
					alt='profile'
				/>
				<div>
					<div className='font-bold text-sm '>Nayan Desai</div>
					<div className='text-sm flex flex-row justify-around items-center gap-2 text-[#00000080] tracking-[-1px]'>
						<div className=' border-l-[#00000080] p-1'>MERN Developer</div>

						<div>IT dept</div>
					</div>
				</div>
			</div>
			{employeeList.map((_, index) => (
				<div
					key={index}
					className='flex flex-row items-center justify-around w-[200px] h-[69px] bg-[#ECECF2] rounded-2xl mb-3 '
				>
					<img
						className='rounded-full h-10 w-10'
						src='https://s3-alpha-sig.figma.com/img/232a/14a1/9c4d361cb9f54e38261e75afcd23b9b1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NHNV44Z6j4FOe8n8yRdVnyZ9lXKZBFTevhhcdhG3UUpGwg7FtqeGDS8W6tEIclVPd~~H9HnLYVm5L2ihp-NofRyWnlI3TwzIGtrGNeWnQ3yupmInUAtkVG5XjC~T2nchwJje7JFACZJsu6VKgrHyPMyiL~3ltvQdCGFBPAFDYU7YoBevQkaYKRZ4gxcC1ip0OA7~XAkoqlf~y9PjPQDram9y99hjUhivfzrMNR3mC--0OoY06SoEr58845yxCeSGfTxJmytHhrz61mugQNIORhRljJnk~EF1XkqFl5xh-2ZFkOA3WG1IT0d25KXJXHOWQxQIaBPc4-DmtgEKtxtq9w__'
						alt='profile'
					/>
					<div>
						<div className='font-bold text-sm '>Nayan Desai</div>
						<div className='text-sm flex flex-row justify-around items-center gap-2 text-[#00000080] tracking-[-1px]'>
							<div className='border-l-[#00000080] p-1'>MERN Developer</div>
							<div>IT dept</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default EmployeeList;
