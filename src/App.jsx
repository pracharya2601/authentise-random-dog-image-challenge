import React, { Suspense } from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HomePage = React.lazy(() => import('pages/home'));

const App = () => {
  return (
    <Suspense fallback={<>Loading....</>}>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand >Random Doggie Browser</Navbar.Brand>
        </Container>
      </Navbar>
      <HomePage />
    </Suspense>
  )
}

export default App;
