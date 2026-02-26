import { cn } from '@/lib/utils';
import { Sparkle } from 'lucide-react';

export function Ornament({ small = false, isGold = false }: { small?: boolean, isGold?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-2">
      <div className={cn("h-px flex-grow", small ? "w-8" : "w-16", isGold ? 'bg-accent/50' : 'bg-primary/30')}></div>
      <Sparkle className={cn("flex-shrink-0", small ? "w-3 h-3" : "w-4 h-4", isGold ? 'text-accent' : 'text-primary')} />
      <div className={cn("h-px flex-grow", small ? "w-8" : "w-16", isGold ? 'bg-accent/50' : 'bg-primary/30')}></div>
    </div>
  );
}
