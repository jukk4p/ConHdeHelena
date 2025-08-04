import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-2xl font-headline font-bold">
      <Image src="/Logo.svg" alt="ConhdeHelena Logo" width={40} height={40} />
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        ConhdeHelena
      </span>
    </Link>
  );
}
