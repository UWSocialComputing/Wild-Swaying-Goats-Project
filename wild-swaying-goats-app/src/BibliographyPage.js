import logo from './logo.svg';
import './App.css';
import React from "react";
import Source from './components/Source.js';
import SliderScore from './components/SliderScore.js';

export default function BibliographyPage() {
  return (
    <div className="App">
      <Source displayText={"Testing"} link={"https://www.w3schools.com/howto/howto_js_redirect_webpage.asp"}/>
      <SliderScore/>
    </div>
  );
}