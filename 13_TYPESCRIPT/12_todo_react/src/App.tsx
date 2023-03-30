import React, { useState } from 'react';

import styles from './App.module.css'

// components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// interface
import { ITask } from './interface/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div className="App">
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm taskList={taskList} setTaskList={setTaskList} btnText='Criar Tarefa' />
        </div>
        <div>
          <h2>Suas Tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
