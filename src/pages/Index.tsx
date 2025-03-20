
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import StringInput from '@/components/StringInput';
import AlgorithmSelector from '@/components/AlgorithmSelector';
import HashResult from '@/components/HashResult';
import Footer from '@/components/Footer';
import { HASH_ALGORITHMS, hashString, HashAlgorithm, HashFunction } from '@/utils/hashFunctions';

const Index = () => {
  const [inputText, setInputText] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<HashAlgorithm>(HASH_ALGORITHMS[2]); // SHA-256 as default
  const [hash, setHash] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (inputText) {
      // Add a small delay to simulate processing for better UX
      setIsLoading(true);
      const timer = setTimeout(() => {
        setHash(hashString(inputText, selectedAlgorithm.id));
        setIsLoading(false);
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setHash('');
    }
  }, [inputText, selectedAlgorithm]);

  const handleAlgorithmChange = (algorithm: HashAlgorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div 
        className="fixed inset-0 bg-gradient-to-br from-background to-background/60 z-[-1]"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 15%, rgba(200, 220, 255, 0.2) 0%, transparent 25%), radial-gradient(circle at 75% 75%, rgba(160, 210, 255, 0.15) 0%, transparent 20%)'
        }}
      />
      
      <main className="w-full max-w-2xl px-4 py-12 mx-auto">
        <Header />
        
        <div className="w-full rounded-2xl glassmorphism p-6 md:p-8">
          <StringInput value={inputText} onChange={setInputText} />
          
          <AlgorithmSelector 
            algorithms={HASH_ALGORITHMS} 
            selectedAlgorithm={selectedAlgorithm}
            onChange={handleAlgorithmChange}
          />
          
          <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-70' : 'opacity-100'}`}>
            <HashResult hash={hash} />
          </div>
        </div>
        
        <Footer />
      </main>
    </div>
  );
};

export default Index;
