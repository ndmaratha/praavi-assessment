import "./App.css";
import AttendanceTable from "./Component/AttendanceTable";
import EmployeeList from "./Component/EmployeeList";
import EmployeeStats from "./Component/EmployeeStats";
import SearchBar from "./Component/SearchBar";
import SideBar from "./Component/SideBar";
import TopBar from "./Component/TopBar";
function App() {
	return (
		<div className='flex overflow-hidden'>
			<SideBar />
			<div className='flex flex-col w-full'>
				<TopBar />
				<SearchBar />
				<div className='flex flex-row gap-7 w-full mx-4'>
					<EmployeeList />
					<div className='flex flex-col w-full gap-4'>
						<EmployeeStats />
						<AttendanceTable />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
