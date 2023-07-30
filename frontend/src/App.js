import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import Home from './components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Box sx={{ width: "70vw", height: "100vh", border: '10px solid orange',padding:'5px' }}>
          {/* <Box>
            <Header/>
          </Box> */}
          <Header/>
          <Box sx={{ backgroundColor: "grey" }}>

            <Home />
            <div style={{position:'absolute',top:'94%',left:'38%'}}>
            <p><span style={{color:'blue',fontSize:'16px'}}>Privacy Policy </span>| <span style={{fontSize:'12px' ,color:"black"}}> &copy; 2023 High Radius. All rights reserved</span></p>
          </div>
          </Box>
        </Box>

      </header>
    </div>
  );
}

export default App;