import Header from './components/Header';
import Scene from './components/Scene';
import InfoPanel from './components/InfoPanel';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <Scene />
      <InfoPanel />
      <Footer />
    </div>
  );
}
