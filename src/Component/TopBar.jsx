import React, { useState } from "react";

const TopBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex flex-wrap w-full sm:flex-nowrap justify-between bg-[#00000014] items-center p-2'>
			{/* Menu Button for Small Screens */}
			<div className='sm:hidden'>
				<button
					className='bg-[#323FDD] text-white px-4 py-2 rounded-md'
					onClick={() => setIsOpen(!isOpen)}
				>
					☰ Menu
				</button>
			</div>

			{/* Menu Items (Hidden on Small Screens, Toggle via Button) */}
			<div
				className={`${
					isOpen ? "flex" : "hidden"
				} sm:flex flex-col sm:flex-row gap-3 text-[#00000080] absolute sm:relative top-14 left-0 sm:top-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent p-4 sm:p-0 shadow-lg sm:shadow-none z-10`}
			>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Atten.Team(Admin)
				</div>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Org.Details(Admin)
				</div>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					In/Out Logs
				</div>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Finalize Atten
				</div>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Manage Employees
				</div>
				<div className='bg-white text-[#323FDD] w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Final Reports
				</div>
				<div className='w-[130px] h-[30px] text-center text-md tracking-[-1px]'>
					Error Reports
				</div>
			</div>

			{/* Right Side Module */}
			<div className='text-[#323FDD] w-[130px] h-[30px] flex items-center justify-center text-md tracking-[-1px] mt-2 sm:mt-0'>
				Attendance Module
			</div>
		</div>
	);
};

export default TopBar;
