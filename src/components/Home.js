import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import AddTodos from './AddTodos';
import Dropdown from './Dropdown';
import TodoList from './TodoList';

function Home() {

    // STATES
    const [inputData, setInputData] = useState("");
    const [todo, setTodo] = useState([]);
    const [status, setStatus] = useState('All');
    const [filteredTodos, setFilteredTodos] = useState([]);

    // useEFFECT
    useEffect(() => {
        getLocalTodo();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodo();
    }, [todo, status]);

    // FUNCTIONS


    const filterHandler = () => {
        switch(status) {
            case 'Completed':
                setFilteredTodos(todo.filter(item => item.completed === true));
                break;
            case 'Incomplete':
                setFilteredTodos(todo.filter(item => item.completed !== true));
                break;
            default:
                setFilteredTodos(todo);
                break;
        }
    }

    // LOCAL STORAGE
    const saveLocalTodo = () => {
        localStorage.setItem("todo", JSON.stringify(todo));
    }

    const getLocalTodo = () => {
        if(localStorage.getItem('todo') == null){
            localStorage.setItem('todo', JSON.stringify([]));
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todo'));
            setTodo(todoLocal);
        }
    }

    return (
        <div className="home">
            <header>
                <h1 className="margin margin__m-b">Todo List</h1>
            </header>

            <form>
                <div className="main flex flex__jc-sb flex__ai-c margin margin__m-b">
                    <AddTodos
                        inputData={inputData}
                        setInputData={setInputData}
                        todo={todo}
                        setTodo={setTodo}
                    />
                    <Dropdown status={status} setStatus={setStatus} />
                </div>
                <TodoList status={status} todo={todo} setTodo={setTodo} filteredTodos={filteredTodos}/>
            </form>
        </div>
    )
}

export default Home;
