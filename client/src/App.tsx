import { MapPage } from './features/map/MapPage';
import { LanguageSwitcher } from './components/LanguageSwitcher/LanguageSwitcher';
import './App.css'

function App() {
  return (
    <>
      <LanguageSwitcher />
      <MapPage />
    </>
  );
}

export default App
