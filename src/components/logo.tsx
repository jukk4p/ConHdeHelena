import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ isFooter = false, isScrolled = false }: { isFooter?: boolean, isScrolled?: boolean }) {
  const textColorClass = isFooter ? 'text-background' : (isScrolled ? 'text-transparent' : 'text-background');

  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
      <Image src="/Logo.png" alt="ConhdeHelena Logo" width={50} height={50} className={cn(isFooter || isScrolled ? '' : 'brightness-0 invert')}/>
      <span className={cn(
        "bg-gradient-to-r from-primary to-accent bg-clip-text",
        textColorClass
      )}>
        ConhdeHelena
      </span>
    </Link>
  );
}
