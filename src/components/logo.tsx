import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-headline font-bold text-foreground hover:text-primary transition-colors">
      ConhdeHelena
    </Link>
  );
}
