import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePageContent from '../Pages/HomePageContent.jsx';

import AboutPage from '../Pages/AboutPage.jsx';

import TeamPage from '../Pages/TeamPage.jsx';
import TeamPageGonzales from '../Pages/TeamPageGonzales.jsx';
import TeamPageBalatayo from '../Pages/TeamPageBalatayo.jsx';
import TeamPageAbreu from '../Pages/TeamPageAbreu.jsx';

import ProjectsPage from '../Pages/ProjectPage.jsx';
import ProjectsGonzales from './ProjectsGonzales.jsx';
import ProjectsAbreu from './ProjectsAbreu.jsx';
import ProjectsBalatayo from './ProjectsBalatayo.jsx';



function Linking() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/balatayo" element={<TeamPageBalatayo />} />
        <Route path="/gonzales" element={<TeamPageGonzales />} />
        <Route path="/abreu" element={<TeamPageAbreu />} />

        <Route path="/gonzalesprojects" element={<ProjectsGonzales />} />
        <Route path="/abreuprojects" element={<ProjectsAbreu />} />
        <Route path="/balatayoprojects" element={<ProjectsBalatayo />} />
      </Routes>
    </Router>
  );
}

export default Linking;
