import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { CiWallet } from "react-icons/ci";
import { ImSwitch } from "react-icons/im";

const SideBar = () => {
	return (
		<div className='flex flex-col items-center  gap-30 bg-[#323FDD] w-[96PX] h-auto'>
			<div className=' flex flex-col gap-5 '>
				<div className='text-[#FFFFFF] text-3xl  m-5 p-1 text-center'>P</div>
				<div className='border-[#FFFFFF] border '></div>

				<img
					className='rounded-full h-15 w-15'
					src='https://s3-alpha-sig.figma.com/img/57cf/6983/3844706ad237ffc69274ec709b8673e1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I7n9mddAQnP7Me1BxfPZgY6YIVMduk25iUofFTUM7zQr611GuBqabfhqoFN9b4j1YCA66tZ5E2Hz2DC~6n4XCgPACrH26od49dXXyi-nV5WwbYWJPv~4VZZuZZvucr2fe0QGBgpCIoBS-stDs~RfANAdkPqC89QzGaYFAoKuHDgoxxb-UQvUv7x64kOZonoSmrVfkF3bpUdUp~ZfhqADzyRUW8IxPDvcFEKTmHqdnaTa-dOT7rRwW8s84JA-WGXNTzfzWuNsBLJQX0l5FVj4lLjS7VbEQEqY57JxXXmV1faWDgl2Xg410SZqO5YZwgP4uqySpbMeqlUOGuqGzObx7A__'
					alt='profile'
				/>
				<div className='border-[#FFFFFF] border'></div>

				<div className='flex flex-col gap-8 items-center text-3xl text-[#FFFFFF]'>
					<CiCalendar />

					<IoIosPeople />

					<CiWallet />
				</div>
			</div>
			<div className='text-3xl text-[#FFFFFF]'>
				<ImSwitch />
			</div>
		</div>
	);
};

export default SideBar;
