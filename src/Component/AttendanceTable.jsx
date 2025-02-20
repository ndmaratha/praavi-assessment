import React from "react";
import dummyData from "./dummy.jsx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
const AttendanceTable = () => {
	const { attendance } = dummyData[0];

	return (
		<div className='overflow-x-auto p-4'>
			<table className='w-auto border-collapse border border-gray-300 text-sm'>
				<thead>
					<tr className='bg-gray-200 text-left'>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Date
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Time Planned + WH
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Actual Time
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Fine/Bonus
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Error
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Cal. Att.
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Final Att.
						</th>
						<th className='border border-gray-300 px-4 py-2 text-black'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{attendance.map((row, index) => (
						<tr key={index} className='odd:bg-white even:bg-gray-100'>
							<td className='border border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center'>
								{row.date}
							</td>
							<td className='border border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center'>
								{row.time_planned}
							</td>
							<td className='border border-gray-300 px-4 py-2 text-red-500 whitespace-nowrap text-center'>
								{row.actual_time}
							</td>
							<td
								className={`flex  border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center ${
									row.fine_bonus.includes("-")
										? "text-red-500"
										: "text-green-500"
								}`}
							>
								{row.fine_bonus}
								<BsThreeDotsVertical
									color='black'
									className='text-xl text-end'
								/>
							</td>
							<td className='border border-gray-300 px-4 py-2 text-red-500 whitespace-nowrap text-center'>
								{row.error}
							</td>
							<td className='border border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center'>
								{row.calculated_attendance}
							</td>
							<td className='border border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center '>
								<div className='flex'>
									{row.final_attendance}
									<RiArrowDropDownLine className='text-2xl' />
								</div>
							</td>
							<td className='border border-gray-300 px-4 py-2 text-black whitespace-nowrap text-center flex  items-center gap-2'>
								<FaLink className='text-2xl' />
								<IoChatbubbleOutline className='text-2xl' />
								<RiArrowDropDownLine className='text-2xl' />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AttendanceTable;
