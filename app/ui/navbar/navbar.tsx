import Link from 'next/link';
import NavLinks from '@/app/ui/navbar/nav-links';
import { BoldIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <div className="flex justify-between w-full px-3 py-4 md:px-2">
      <Link className="mb-2 flex h-24 p-4" href="/">
        <div className="w-16 text-white">
          <BoldIcon />
        </div>
      </Link>
      <div className="flex items-center justify-between space-x-20">
        <NavLinks />
      </div>
      <div className="flex items-center justify-between mx-20">TOGGLE</div>
    </div>
  );
}
