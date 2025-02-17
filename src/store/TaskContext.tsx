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

    return (
        <TaskContext.Provider
            value={{ tasks, addTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};