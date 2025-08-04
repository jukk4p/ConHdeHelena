import Link from 'next/link';
import { Gift } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
      <Gift className="w-7 h-7 text-primary" />
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        ConhdeHelena
      </span>
    </Link>
  );
}
