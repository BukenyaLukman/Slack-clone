import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import db from './firebase'





function App() {


    const [rooms, setRooms] = useState([])
    const [user, setUser] = useState()
    

    

    const getChannels = () =>{
      db.collection('rooms').onSnapshot((snapshot) =>{
        setRooms(snapshot.docs.map((doc) => {
          return { id: doc.id, name: doc.data().name }
        }))
      })
    }

useEffect(() => {
  getChannels();
},[])


  return (
    <div className="App">
        <Router>
          {
            !user ? 
            <Login setUser={setUser}/>
            :
         
            <Container>
              <Header user={user}/>
              <Main>
                <Sidebar rooms={rooms}/>
                <Switch>
                  <Route path="/room">
                    <Chat/>
                  </Route>

                </Switch>
              </Main>
            </Container>
          }
        </Router>
    </div>
  );
}

export default App;


const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 38px auto;
`
const Main = styled.div`
  display:grid;
  grid-template-columns:268px auto;
`
