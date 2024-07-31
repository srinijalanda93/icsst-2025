import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home/Home';
import Base from './Base';
import CallForPapers from './pages/CallForPapers/CallForPapers';
import Committees from './pages/Committees/Committees';
import Registration from './pages/Registration/Registration';
import KeynoteSpeakers from './pages/KeynoteSpeakers/KeynoteSpeakers';
import PravinHungund from './pages/KeynoteSpeakers/PravinHungund';
import BalamuruganEaswaran from './pages/KeynoteSpeakers/BalamuruganEaswaran';
import BharaniPJaganMohan from './pages/KeynoteSpeakers/BharaniPJaganMohan';
import Schedule from './pages/Schedule/Schedule';
import Contact from './pages/Contact/Contact';
// eslint-disable-next-line
const bootstrapCSS = require("bootstrap/dist/css/bootstrap.css")
// eslint-disable-next-line
const bootstrapJS = require("bootstrap/dist/js/bootstrap.js")






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Base>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/callForPapers/:id' element={<CallForPapers />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/Committees' element={<Committees />} />
        <Route path='/dates' element={<Home />} />
        <Route path='/committees' element={<Committees />} />
        <Route path='/KeynoteSpeakers' element={<KeynoteSpeakers />} />
        <Route path='/PravinHungund' element={<PravinHungund />} />
        <Route path='/BalamuruganEaswaran' element={<BalamuruganEaswaran />} />
        <Route path='/BharaniPJaganMohan' element={<BharaniPJaganMohan />} />
        <Route path='/Schedule' element={<Schedule />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes></Base>
  </BrowserRouter>
);