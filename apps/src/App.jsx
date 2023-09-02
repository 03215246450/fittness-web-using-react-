import './App.css';
import Fifthpart from './components/Fifthpart';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Fourthpart from './components/Fourthpart';
import Header from './components/Header';
import Secondpart from './components/Secondpart';
import Thirdpart from './components/Thirdpart';


function App() {
  return (
    <>
    <div className='full container-fluid'>
 <Header/>
<div className="container">
<div className="row">
  <div className="col-md-06">
  <p className='my-4 py-4 text-danger fs-5'>
 ______  WITH PATRICK POTTER
</p>
<h1 className='body text-white my-4' > <b>BUILD PEFECT BODY <br /> SHAPE FOR GOOD AND <br /> HEALTHY LIFE</b> </h1>
<button type="button" class="btn btn-danger">BECOME A MEMBER</button>
  </div>
</div>
</div>

    </div>

<Secondpart/>
<Thirdpart/>
<Fourthpart/>
<Fifthpart/>
<Forms/>
<Footer/>


    </>
  );
}

export default App;
