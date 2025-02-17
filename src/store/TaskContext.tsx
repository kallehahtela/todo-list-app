import React, { createContext, useState, ReactNode } from "react";

// Define Task Type
export type Task = {
    id: number;
    title: string;
};

// Define Context Type
type TaskContextType = {
    tasks: Task[];
    addTask: (title: string) => void;
    editTask: (id: number, newTitle: string) => void; 
};

// Create Context with default empty values
export const TaskContext = createContext<TaskContextType | undefined>(
    undefined
);

// Provider Component
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    // Function to add a new task
    const addTask = (title: string) => {
        // Create a new task
        const newTask = { 
            id: Date.now(), 
            title,
        };
        // Add to list
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    // Function to edit an existing task
    const editTask = (id: number, newTitle: string) => {
    setTasks((prevTask) => 
        prevTask.map((task) => 
            task.id === id ? {
                ...task, title: newTitle } : task
            )
        );
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, editTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};