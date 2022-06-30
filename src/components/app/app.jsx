import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/saerch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'

const data = [
    { name: 'John C.', salary: 1000, increase: false, id: 1, rise: true },
    { name: 'Maison S.', salary: 3000, increase: true, id: 2, rise: false },
    { name: 'Clark W.', salary: 5000, increase: false, id: 3, rise: false },
]


function App() {
    return (
        <div className="app">
            <AppInfo />
            <div className='search-panel'>
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    )
}

export default App;