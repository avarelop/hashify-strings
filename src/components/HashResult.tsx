
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface HashResultProps {
  hash: string;
  className?: string;
}

const HashResult: React.FC<HashResultProps> = ({ hash, className }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (!hash) return;
    
    navigator.clipboard.writeText(hash).then(() => {
      setCopied(true);
      toast.success('Hash copied to clipboard');
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };

  return (
    <div className={cn(
      "w-full rounded-xl border p-4 mt-4 bg-white/80 backdrop-blur-sm shadow-sm",
      "transition-all duration-300 overflow-hidden animate-scale-in",
      hash ? "opacity-100" : "opacity-50",
      className
    )}>
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-medium text-muted-foreground">RESULT</h2>
        <button
          onClick={copyToClipboard}
          disabled={!hash}
          className={cn(
            "text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300",
            "flex items-center gap-1.5 focus:outline-none",
            hash ? "hover:bg-secondary cursor-pointer" : "cursor-not-allowed opacity-50"
          )}
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-500" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      
      <div className="w-full p-3 bg-secondary/80 rounded-lg font-mono text-sm overflow-x-auto">
        {hash ? (
          <p className="break-all">{hash}</p>
        ) : (
          <p className="text-muted-foreground italic">Hash will appear here</p>
        )}
      </div>
    </div>
  );
};

export default HashResult;
