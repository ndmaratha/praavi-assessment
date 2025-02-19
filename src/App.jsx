import "./App.css";
import EmployeeList from "./Component/EmployeeList";
import SearchBar from "./Component/SearchBar";
import SideBar from "./Component/SideBar";
import TopBar from "./Component/TopBar";
function App() {
	return (
		<div className='flex'>
			<SideBar />
			<div className='flex flex-col w-full'>
				<TopBar />
				<SearchBar />
				<div className='flex'>
					<EmployeeList />
				</div>
			</div>
		</div>
	);
}

export default App;
