import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTopButton } from './components/BackToTopButton';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppFloatingButton />
    </div>
  );
}
