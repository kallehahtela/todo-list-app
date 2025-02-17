import React, { createContext, useState, ReactNode } from "react";

// Define Task Type
export type Task = {
    id: number;
    title: string;
};

// Define Context Type
type TaskContextType = {
    tasks: Task[];
    completedTasks: Task[];
    addTask: (title: string) => void;
    editTask: (id: number, newTitle: string) => void; 
    deleteTask: (id: number) => void;
    completeTask: (id: number) => void;
};

// Create Context with default empty values
export const TaskContext = createContext<TaskContextType | undefined>(
    undefined
);

// Provider Component
export const TaskProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

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
    setTasks((prevTasks) => 
        prevTasks.map((task) => 
            task.id === id ? {
                ...task, title: newTitle } : task
            )
        );
    };

    // Function to delete specific task
    const deleteTask = (id: number) => {
        setTasks((prevTasks) => 
            prevTasks.filter((task) => task.id !== id)
        );
    };

    // Function to mark a task as completed
    const completeTask = (id: number) => {
        setTasks((prevTasks) => {
            const taskToComplete = prevTasks.find((task) => 
                task.id === id
            );
            if (taskToComplete) {
                setCompletedTasks((prevCompleted) => [...prevCompleted, taskToComplete]);
                return prevTasks.filter((task) => task.id !== id);
            }
            return prevTasks;
        });
    };

    return (
        <TaskContext.Provider
            value={{ 
                tasks,
                completedTasks, 
                addTask, 
                editTask, 
                deleteTask, 
                completeTask 
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};