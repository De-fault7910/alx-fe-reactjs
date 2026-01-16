import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent'; 
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      {/* Your WelcomeMessage component */}
      <WelcomeMessage />

      {/* ALX task components */}
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App;
