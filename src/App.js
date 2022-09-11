
import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { LinkContainer } from 'react-router-bootstrap';
import ProductScreen from './screens/ProductScreen';
import { Container, Navbar } from 'react-bootstrap';



function App() {
  return (
    <BrowserRouter>

      <div className='d-flex flex-column site-container'>
        <header>

          <Navbar bg="warning" variant="warning">
            <Container className='Nabcolor'>
              <LinkContainer to="/">
                <Navbar.Brand>Megaann Food</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>


        <main>
          <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
          </Routes>
          </Container>
          <footer>
            <div className='text-center'> All right reserved Megaann Food </div>
          </footer>
        </main>
      </div>

    </BrowserRouter>

  );
}

export default App;
