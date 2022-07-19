import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {

    const elements = data.map(elem => {
        const { id, ...elemProps } = elem
        return (
            <EmployeesListItem
                key={id}
                {...elemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return (
        <div className='app-list'>
            {elements}
        </div>
    )
}

export default EmployeesList;