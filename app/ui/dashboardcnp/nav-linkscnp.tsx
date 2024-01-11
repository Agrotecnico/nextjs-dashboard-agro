'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import IconAutomotor from '@/app/ui/icon-automotor'
import IconForms from '@/app/ui/icon-forms'
import IconTramites from '@/app/ui/icon-tramites'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Automotor', href: '/dashboardcnp', icon: IconAutomotor /* HomeIcon */ },
  /* {
    name: 'Invoices',
    href: '',
    icon: DocumentDuplicateIcon,
  }, */
  { name: 'Formularios', href: "/dashboardcnp/forms" /* '/dashboard/customers' */, icon: IconForms },
  { name: 'Trámites', href: '/dashboardcnp/tramites', icon: IconTramites },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex flex-col h-[56px] grow items-center justify-center gap-1 rounded-md bg-gray-50 py-1 px-2 text-[12px] font-medium hover:bg-[#ff8ee744] hover:text-[#6f2743] md:flex-none md:justify-start md:p-2 md:px-3 [box-shadow:0_2px_1px_-1px_#00000033,0_1px_1px_0px_#00000024,0_1px_3px_0px_#0000001f]',
              {
                'bg-[#ff8ed74f] text-[#6f2743]': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}