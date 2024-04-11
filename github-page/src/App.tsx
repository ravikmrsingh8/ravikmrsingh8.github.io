import React from 'react';
import './App.css';

import { Background } from './Background';
import { Header } from './header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Java } from './pages/Java';
import { Leetcode } from './pages/LeetCode';
import { Spring } from './pages/Spring';
import { ReactPage } from './pages/ReactPage';
import { ErrorPage } from './pages/ErrorPage';
import { PageContainer } from './pages/PageContainer';
import { Redux } from './pages/Redux';
import { Hibernate } from './pages/Hibernate';
import { Typescript } from './pages/Typescript';
import { Kafka } from './pages/Kafka';
import { DataStructure } from './pages/DataStructures';

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<PageContainer><Home /></PageContainer>} />
          <Route path="/leetcode" element={<PageContainer><Leetcode /></PageContainer>} />
          <Route path="/datastructure" element={<PageContainer><DataStructure /></PageContainer>} />
          <Route path="/java" element={<PageContainer><Java /></PageContainer>} />
          <Route path="/spring" element={<PageContainer><Spring /></PageContainer>} />
          <Route path="/hibernate" element={<PageContainer><Hibernate /></PageContainer>} />
          <Route path="/kafka" element={<PageContainer><Kafka /></PageContainer>} />
          <Route path="/typescript" element={<PageContainer><Typescript /></PageContainer>} />
          <Route path="/react" element={<PageContainer><ReactPage /></PageContainer>} />
          <Route path="/redux" element={<PageContainer><Redux /></PageContainer>} />
          
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
