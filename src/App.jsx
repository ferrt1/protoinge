import { Header } from "./components/header/Header";
import "leaflet/dist/leaflet.css";
//import { Map } from './components/Map'
import { MainPage } from "./components/mainpage/MainPage";
import { CenterInfo } from "./components/mainpage/CenterInfo";
import { EventContainer } from "./components/mainpage/EventContainer";
import { Services } from "./components/mainpage/Services";
//import { EventSite } from './components/EventSite';

function App() {
  return (
    <>
      <main className="px-6 py-2 mb-12">
        <Header />
        <div className="lg:flex md:gap-8 mb-12">
          <MainPage />
          <CenterInfo />
        </div>
        <EventContainer/>
        <Services/>
      </main>
    </>
  );
}

export default App;
