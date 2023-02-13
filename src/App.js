import './App.scss';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import Phone from './components/phone/Phone';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Phone></Phone>
      {/*<Main></Main>*/}
      <Footer></Footer>
    </div>
  );
}

export default App;
