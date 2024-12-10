'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { poppins } from '../fonts';

const links = [
  {
    name: 'Projects',
    href: '/projects',
  },
  { name: 'Experience', href: '/experience' },
  { name: 'About', href: '/about' },
];

export default function NavLinks() {
  //   const pathname = usePathname(); // TODO

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              poppins.className,
              'flex text-xl hover:text-blue-500 uppercase grow items-center justify-center gap-2'
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
