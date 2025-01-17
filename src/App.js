import { Button, ButtonGroup, ChakraProvider } from '@chakra-ui/react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import socketIO from 'socket.io-client'
import Home from './Home'; 
import { Chat } from './Chat';
import Mainfile from './Mainfile';
import { useEffect } from 'react';

const socket=socketIO('http://localhost:8080',{transports:['websocket']})
function App() {
 
  // socket.on('connect',()=>{
  //   console.log('connected hellosjdvnjsdnvjsd');
  // })
  return (<>
   <div className='App'>
    <ChakraProvider>
    <Router>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/mainfile' element={<Mainfile/>}/>


     



      
    </Routes>
   </Router>
     
     
   
   </ChakraProvider>
    </div>
    </>
  );
}

export default App;
