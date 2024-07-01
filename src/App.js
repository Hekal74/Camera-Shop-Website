import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Index from './Component/Indexx';
import Contact from './Component/Contact';
import Login from './Component/Login';
import Signup from './Component/Signup';
import About from './Component/About';
import SlidingBar from './Component/SlidingBar';
import News from './Component/News';
import styled from 'styled-components';

const images = [
  'https://th.bing.com/th?id=OIP.HwWn88NJsoKTWPyqsfPafQHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
  'https://th.bing.com/th/id/OIP.moEPELAyKORsYHizQA_5tAHaEK?w=323&h=181&c=7&r=0&o=5&pid=1.7',
  'https://th.bing.com/th/id/OIP.moEPELAyKORsYHizQA_5tAHaEK?w=323&h=181&c=7&r=0&o=5&pid=1.7',
  'https://th.bing.com/th/id/OIP.moEPELAyKORsYHizQA_5tAHaEK?w=323&h=181&c=7&r=0&o=5&pid=1.7',
  'https://th.bing.com/th/id/OIP.moEPELAyKORsYHizQA_5tAHaEK?w=323&h=181&c=7&r=0&o=5&pid=1.7'
];

const Content = styled.div`
  padding-top: 70px; /* Adjust this value to match the height of your navbar */
`;

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <Content>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
        </Routes>
        {location.pathname === '/' && <SlidingBar images={images} />}
      </Content>
    </div>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
