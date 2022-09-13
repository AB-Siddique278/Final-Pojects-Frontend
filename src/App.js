
import './App.css';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import { LinkContainer } from 'react-router-bootstrap';
import ProductScreen from './screens/ProductScreen';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { useContext } from 'react';
import { Store } from './screens/Store';



function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <BrowserRouter>

      <div className='d-flex flex-column site-container'>
        <header>

          <Navbar bg="warning" variant="warning">
            <Container className='Nabcolor'>
              <LinkContainer to="/">
                <Navbar.Brand>Megaann Food</Navbar.Brand>
              </LinkContainer>

              <Nav className="me-auto">
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length > 0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.length}
                    </Badge>
                  )}

                </Link>
              </Nav>
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
