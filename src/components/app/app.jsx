import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/saerch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { name: 'John C.', salary: 1000, increase: false, id: 1, rise: true },
                { name: 'Maison S.', salary: 3000, increase: true, id: 2, rise: false },
                { name: 'Clark W.', salary: 5000, increase: false, id: 3, rise: false },
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            rise: false,
            id: new Date().toISOString()
        }
        this.setState(({ data }) => {
            const newArr = [...data, newEmployee]
            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        console.log(`Prop id: ${id}`)
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item
            })
        }))
    }

    render() {
        const employees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        return (
            <div className="app">
                <AppInfo employees={employees} increasedEmployees={increasedEmployees} />
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployeesList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;