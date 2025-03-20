
import React from 'react';
import { Fingerprint } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center mb-8 animate-fade-in">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Fingerprint className="w-8 h-8 text-primary" />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight mb-2">Hashify</h1>
      <p className="text-muted-foreground max-w-md text-balance">
        A simple, elegant tool for converting text into secure hash codes using various cryptographic algorithms.
      </p>
    </header>
  );
};

export default Header;
