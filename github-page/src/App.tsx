import React from 'react';
import './App.css';

import { Background } from './Background';
import { Header } from './header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Java } from './pages/Java';
import { Leetcode } from './pages/LeetCode';
import { SpringBoot } from './pages/SpringBoot';
import { ReactPage } from './pages/ReactPage';
import { ErrorPage } from './pages/ErrorPage';
import { PageContainer } from './pages/PageContainer';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageContainer><Home /></PageContainer>} />
          <Route path="/java" element={<PageContainer><Java /></PageContainer>} />
          <Route path="/leetcode" element={<PageContainer><Leetcode /></PageContainer>} />
          <Route path="/springboot" element={<PageContainer><SpringBoot /></PageContainer>} />
          <Route path="/react" element={<PageContainer><ReactPage /></PageContainer>} />
          <Route path="*" element={
            <PageContainer>
                <ErrorPage errorCode={404} />
            </PageContainer>
          }/>
        </Routes>
      </BrowserRouter>
        
    </>
  );
}

export default App;
