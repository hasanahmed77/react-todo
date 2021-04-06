import React from 'react'
import { Select } from 'antd';



function Dropdown({ status, setStatus }) {
    const { Option } = Select;

    const handleChange = (e) => {
        setStatus(e);
        console.log(status);
    }

    return (
        <div className="dropdown">
            <Select defaultValue="All" style={{ width: 120 }} onChange={handleChange}>
                <Option value="All">All</Option>
                <Option value="Completed">Completed</Option>
                <Option value="Incomplete">Incomplete</Option>
            </Select>
        </div>
    )
}

export default Dropdown
