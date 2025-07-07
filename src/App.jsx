import NavigationMenu from './Components/NavigationMenu';
import './App.css';
import WhereWillYouGoNext from './Components/SlideCarousel';

function App() {
  return (
    <>
      <NavigationMenu />
    <div className="page">
      <WhereWillYouGoNext />
    </div>
    </>
  );
}

export default App;