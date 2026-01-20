import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent'; 
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
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

      {/* Example UserProfile components */}
      <UserProfile 
        name="Alice" 
        age={25} 
        bio="Loves hiking and photography" 
      />
      <UserProfile 
        name="Bob" 
        age={30} 
        bio="Enjoys painting and traveling" 
      />
    </>
  );
}

export default App;
