import React, { useState} from 'react'

import { Input, Space, Tooltip, Button } from 'antd';
import {  PlusOutlined }  from '@ant-design/icons';


function AddTodos({ inputData, setInputData, todo, setTodo }) {
    const text = <span>Please type your todo!</span>;
    const { Search } = Input;
    const [warning, setWarning] = useState(false);
    // SUBMIT FUNCTION
    const handlingInput = v => {
        if(v !== ""){
            setTodo([
                ...todo,
                { text: inputData, completed: false, id: Math.random() * 1000 }
            ]);
        } else{
            setWarning(true);
        }
        setInputData("");
    }

    // INPUT FUNCTIONS
    const handleChange = e => {
        setWarning(false);
        console.log(e.target.value);
        setInputData(e.target.value.trim());
    }

    const onSearch = value => {
        handlingInput(value);
    }

    const onPressEnter = e => {
        handlingInput(e.target.value);
    }

    return (
        <div className="add-todos margin margin__m-r items">
            <Tooltip placement="bottomLeft" title={text} visible={warning} >
            <Search
                placeholder="Add Todos"
                allowClear
                enterButton={<PlusOutlined />}
                size="large"
                onPressEnter={onPressEnter}
                onSearch={onSearch}
                onChange={handleChange}
                value={inputData}
            />
             
      </Tooltip>
        </div>
    )
}
export default AddTodos
