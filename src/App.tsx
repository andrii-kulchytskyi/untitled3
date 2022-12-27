import React, {useState} from 'react';

import './App.css';
import {Todolist} from "./Todolist";
import {v1} from "uuid";


export type FilterValues = "all" | "completed" | "active"


function App() {
    const [tasks, setTask] = useState([
        {id: v1(), title: "CSS", isDone: false},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "React", isDone: true},
    ]);
    let [filter, setFilter] = useState<FilterValues>("all")

    const addTask = (title: string) => {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTask(newTasks)
    }

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(task => task.id !== id)
        return setTask(filteredTasks);
    }

    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        let task = tasks.find(e => e.id === taskID)
        if (task) {
            task.isDone = isDone
        }
        setTask([...tasks])
    }

    let changeFilter = (value: FilterValues) => {
        setFilter(value)
    }
    let taskList = tasks;
    if (filter === "completed") {
        taskList = tasks.filter(t => t.isDone)
    }
    if (filter === "active") {
        taskList = tasks.filter(t => !t.isDone)
    }
    return (
        <div>
            <Todolist title={"What to learn"}
                      tasks={taskList}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
                      addTask={addTask}
                      changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
