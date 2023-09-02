import React from 'react'
import './App.css';
import Fifthpart from './components/Fifthpart';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Fourthpart from './components/Fourthpart';
import Header from './components/Header';
import Secondpart from './components/Secondpart';
import Thirdpart from './components/Thirdpart';

export default function Home() {
  return (
    <div>
 <Header/>
      <Secondpart/>
<Thirdpart/>
<Fourthpart/>
<Fifthpart/>
<Forms/>
<Footer/>
    </div>
  )
}
