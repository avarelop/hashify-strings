
import React from 'react';
import { cn } from '@/lib/utils';

interface StringInputProps {
  value: string;
  onChange: (value: string) => void;
}

const StringInput: React.FC<StringInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full mt-4 animate-fade-up">
      <label htmlFor="string-input" className="block text-sm font-medium text-muted-foreground mb-2 tracking-wide">
        ENTER TEXT TO HASH
      </label>
      <div className="relative">
        <textarea
          id="string-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full h-32 p-4 rounded-xl border border-border/90 resize-none",
            "bg-white/80 backdrop-blur-sm shadow-sm focus:outline-none",
            "focus:ring-2 focus:ring-primary/40 focus:border-primary/40",
            "transition-all duration-300 text-base"
          )}
          placeholder="Type or paste your text here..."
        />
        <div className="absolute bottom-3 right-3 text-xs text-muted-foreground">
          {value.length} characters
        </div>
      </div>
    </div>
  );
};

export default StringInput;
