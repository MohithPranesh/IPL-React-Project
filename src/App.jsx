import { useEffect, useState } from 'react';
import { supabase } from './supabase';


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Matches from "./components/Matches";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Matches />
    </>
  );
}

export default App;