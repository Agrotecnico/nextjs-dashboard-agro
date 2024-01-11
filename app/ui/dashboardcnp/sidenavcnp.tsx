import Link from 'next/link';
import NavLinkscnp from '@/app/ui/dashboardcnp/nav-linkscnp';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function SideNavcnp() {
  return (
    <div className="flex h-full flex-col">
      <Link
        className="flex h-24 items-center rounded-lg justify-start bg-[#ff8fe7] p-4 [box-shadow:_inset_0px_0px_8px_1px_#c169ae]"
        href="/"
      >
        <div className="flex w-full items-center justify-between w-30 text-white md:w-30">
          {/* <AcmeLogo /> */}
          {/* <Image
            src="/b.png"
            width={120}
            height={112}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          /> */}
          <Image
            src="/a.png"
            width={160}
            height={57}
            /* className="block md:hidden" */
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <div className="text-[32px] font-extrabold text-[#cd70b9] [text-shadow:_1px_1px_#954d86] mr-8">2024</div>
        </div>
        
      </Link>
      <div className="flex grow flex-row justify-between p-3 space-x-2 md:space-x-0 md:space-y-2">
        <NavLinkscnp />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> 
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>*/}
      </div>
    </div>
  );
}