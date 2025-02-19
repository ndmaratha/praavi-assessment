import React from "react";
import { HiAdjustments } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const SearchBar = () => {
	return (
		<div className='flex flex-col sm:flex-row items-center justify-between bg-[#F9F9F9] gap-4 p-3 sm:p-4 md:p-6 mx-4 sm:mx-6'>
			{/* Left Section */}
			<div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto text-[#727272]'>
				<input
					type='text'
					placeholder='🔍 Search'
					className='p-2 border border-gray-300 rounded-full w-full sm:w-64 text-sm'
				/>
				<div className='flex items-center gap-1 cursor-pointer'>
					<HiAdjustments />
					<span>Filter</span>
				</div>
				<div className='border rounded-full border-[#D6D6D6] p-1 w-full sm:w-[80px] font-bold text-center flex items-center justify-center'>
					Rows <RiArrowDropDownLine className='text-2xl' />
				</div>
				<div className='border rounded-full border-[#D6D6D6] p-1 w-full sm:w-[80px] font-bold text-center flex items-center justify-center'>
					July <RiArrowDropDownLine className='text-2xl' />
				</div>
			</div>

			{/* Right Section */}
			<div className='flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto'>
				<div className='text-[#FFFFFF] bg-[#323FDD] border border-[#D6D6D6] rounded-full p-1 w-full sm:w-[86px] font-bold text-center flex items-center justify-center'>
					Export <RiArrowDropDownLine className='text-2xl' />
				</div>
				<div className='text-[#000000] bg-[#FFFFFF] border border-[#D6D6D6] rounded-full p-1 w-full sm:w-[125px] text-center flex items-center justify-center tracking-[-1px]'>
					Detailed View <RiArrowDropDownLine className='text-2xl' />
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
