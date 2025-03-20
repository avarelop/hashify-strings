
import React from 'react';
import { HashAlgorithm } from '@/utils/hashFunctions';
import { cn } from '@/lib/utils';

interface AlgorithmSelectorProps {
  algorithms: HashAlgorithm[];
  selectedAlgorithm: HashAlgorithm;
  onChange: (algorithm: HashAlgorithm) => void;
}

const AlgorithmSelector: React.FC<AlgorithmSelectorProps> = ({
  algorithms,
  selectedAlgorithm,
  onChange
}) => {
  return (
    <div className="w-full mt-8 mb-4">
      <h2 className="text-sm font-medium text-muted-foreground mb-3 tracking-wide">
        SELECT HASH ALGORITHM
      </h2>
      <div className="flex flex-wrap gap-2">
        {algorithms.map((algorithm) => (
          <button
            key={algorithm.id}
            onClick={() => onChange(algorithm)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              "border hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/40",
              selectedAlgorithm.id === algorithm.id
                ? "bg-primary text-white border-transparent"
                : "bg-white/80 text-foreground border-border/70 hover:bg-white"
            )}
          >
            {algorithm.name}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 animate-fade-up">
        {selectedAlgorithm.description}
      </p>
    </div>
  );
};

export default AlgorithmSelector;
