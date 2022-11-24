import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sidebar from './components/Sidebar'
import './App.css'
import {useRequest, useToggle} from './hooks'
import {UserRepository} from './repositories'

function App() {
  const [count, setCount] = useState(0)
  const [show , toggle] = useToggle(false); 
  const {data , loading , error,execute} = useRequest(UserRepository.getAll.bind(UserRepository))
  const fetchUsers =async () => {
      await execute()
      if(error) console.log(error)
       if(data){
         console.table(data)
       }

   
  }
  return (
    <div className="App h-screen bg-gray-200 dark:bg-gray-600">
      <Sidebar show={show} close={toggle} />
      <div className="flex items-center justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <button type="button" onClick={() => setCount((count) => count + 1)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      count is {count}
      </button>
      <button type="button" onClick={toggle} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Toggle Sidebar</button>
      
      <button type="button" onClick={fetchUsers} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Fetch Users</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR {JSON.stringify(loading)}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
