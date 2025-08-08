import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main'; 
import ContextProvider from './context/context';  
import SplashCursor from './components/Main/SplashCursor';


const App = () => {
  return (

    <ContextProvider>
      <SplashCursor />
      <Sidebar />
      <Main />
    </ContextProvider> 

    
  );
};

export default App;
