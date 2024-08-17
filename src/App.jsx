import { useState } from 'react';
import './App.css';
import UserCard from './components/Cards/UserCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserCard />
    </>
  )
}

export default App
