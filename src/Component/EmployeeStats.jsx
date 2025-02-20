import React from "react";

const EmployeeStats = () => {
	return (
		<div className='flex bg-white shadow-md rounded-2xl p-4 w-[1225px] h-[126px] items-center'>
			{/* Left Profile Section */}
			<div className='flex items-center w-1/3'>
				<img
					className='w-14 h-14 rounded-full object-cover'
					src='https://randomuser.me/api/portraits/men/45.jpg'
					alt='profile'
				/>
				<div className='ml-4'>
					<div className='text-lg font-semibold'>Nayan Desai</div>
					<div className='text-sm text-gray-500'>
						FullStack Developer &nbsp; | &nbsp; IT Dept.
					</div>
				</div>
			</div>

			{/* Right Table Section */}
			<div className='w-2/3 overflow-x-auto'>
				<table className='w-full border border-gray-300 text-sm'>
					<thead>
						<tr>
							<th className='p-1 border border-gray-300 whitespace-nowrap'></th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								P
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								A
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								WO
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								Σ Bonus / Fine
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								OT
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								LT
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								OT+LT
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'>
								Final Att.
							</th>
							<th className='p-1 border border-gray-300 whitespace-nowrap'></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								Cal
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								17.5
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								2.5
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								11
							</td>
							<td className='p-1 border border-gray-300 text-green-600 whitespace-nowrap'>
								+2000
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								17:32 H
							</td>
							<td className='p-1 border border-gray-300 text-red-500 whitespace-nowrap'>
								-12:00 H
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								05:32 H
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								20
							</td>
							<td className='p-1 border border-gray-300 text-gray-500 whitespace-nowrap'>
								Finalized by Rahul
							</td>
						</tr>
						<tr>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								Final
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								23.5
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								3.5
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								4
							</td>
							<td className='p-1 border border-gray-300 text-green-600 whitespace-nowrap'>
								+400
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								12:30 H
							</td>
							<td className='p-1 border border-gray-300 text-red-500 whitespace-nowrap'>
								-19:00 H
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								-06:30 H
							</td>
							<td className='p-1 border border-gray-300 whitespace-nowrap'>
								27
							</td>
							<td className='p-1 border border-gray-300 text-gray-500 whitespace-nowrap'>
								Locked by Shriniwas
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default EmployeeStats;
