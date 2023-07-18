import {useState, createContext} from 'react';
 const ThemeContext = createContext()
 function ThemeProvider({children}) {
    console.log({children})
    const [theme , setTheme ] = useState('dark')
    const tonggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const value = {
        theme,
        tonggleTheme,
    }
    return (
        <ThemeContext.Provider value={value}>
        {children}
   
       </ThemeContext.Provider>
    )

    

 }

 export {ThemeContext, ThemeProvider}
