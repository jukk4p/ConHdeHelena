import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
      <Image 
        src="/Logo.png" 
        alt="ConhdeHelena Logo" 
        width={50} 
        height={50} 
        className={cn(onDark && 'brightness-0 invert')}
      />
      <span className={cn(
        onDark ? 'text-background' : 'text-foreground'
      )}>
        ConhdeHelena
      </span>
    </Link>
  );
}
