import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Link } from '@tanstack/react-router';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink p-4 text-white shadow-lg md:p-6 lg:flex lg:items-center lg:justify-between px-6 md:px-12">
      <div className="flex-1 lg:mr-8 text-sm md:text-base mb-4 lg:mb-0 opacity-90">
        <p>
          Utilizamos cookies para melhorar a sua experiência neste site. Ao continuar navegando, você concorda com a nossa{' '}
          <Link to="/privacidade" className="underline hover:text-honey transition-colors">
            Política de Privacidade
          </Link>{' '}
          e os{' '}
          <Link to="/termos" className="underline hover:text-honey transition-colors">
            Termos de Uso
          </Link>
          .
        </p>
      </div>
      <div className="flex-shrink-0 flex gap-4">
        <Button onClick={handleAccept} className="w-full sm:w-auto bg-honey text-ink hover:bg-honey-dark font-medium shadow-soft">
          Entendi e concordo
        </Button>
      </div>
    </div>
  );
}
