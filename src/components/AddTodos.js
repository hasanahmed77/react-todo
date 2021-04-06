import React from 'react'

import { Input, Space } from 'antd';

function AddTodos({ inputData, setInputData, todo, setTodo }) {
    const { Search } = Input;

    const handleChange = e => {
        console.log(e.target.value);
        setInputData(e.target.value);
    }

    const onSearch = value => {
        setTodo([
            ...todo,
            { text: inputData, completed: false, id: Math.random() * 1000 }
        ]);
        setInputData("");
    }

    const onPressEnter = e => {
        console.log(e.target.value);
        setTodo([
            ...todo,
            { text: inputData, completed: false, id: Math.random() * 1000 }
        ]);
        setInputData("");
    }

    return (
        <div className="add-todos margin margin__m-r items">
            {/* <Input placeholder="Basic usage" /> */}
            <Search
                placeholder="Add Todos"
                allowClear
                enterButton="Add"
                size="large"
                onPressEnter={onPressEnter}
                onSearch={onSearch}
                onChange={handleChange}
                value={inputData}
            />
        </div>
    )
}

export default AddTodos
