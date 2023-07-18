import logo from './logo.svg';
import './App.css';
import Content from './Content';
import { ThemeProvider } from './ThemeContext';
import { ThemeContext } from "./ThemeContext"
import { useContext } from 'react';






function App() {
const value = useContext(ThemeContext)

 
  return (
  
    <div style={{padding: 50}}>
      <button 
      onClick={value.tonggleTheme}
      >tonggle the me  </button>
      <Content />
    </div>
  
    
  )
 
}

export default App;

