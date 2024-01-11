import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link'
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-[#444]">
      <main className="max-w-[1024px] mx-auto flex justify-between h-screen flex-col bg-[#f3edf2]">
        <div className="flex h-20 shrink-0 items-center rounded-lg bg-[#ff8fe7] p-4 md:h-40 [box-shadow:_inset_0px_0px_8px_1px_#cb6db7]">
          {/* <AcmeLogo /> */}
          <div className="flex w-full items-center justify-between w-30 text-white md:w-30">
            <Image
              src="/a.png"
              width={160}
              height={57}
              className="w-[120px] md:w-[160px]"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <div className="text-[32px] font-extrabold text-[#cd70b9] [text-shadow:_1px_1px_#954d86] mr-8">2024</div>
          </div>
        </div>
        <div className="flex flex-col justify-center h-[152px] bg-[#ffd7f7] rounded-lg [box-shadow:_inset_0px_0px_8px_1px_#ff8fe7]">
          <div  className="flex justify-evenly items-center p-[10px] h-full">
            
            <div className="flex flex-col items-center">
              <Image
                src="/c.png"
                width={80}
                height={63}
                alt="Logo cnp"
                className="w-[120px]"
              />
            </div>

            <div className="flex flex-col items-start text-[15px] font-semibold ml-2 leading-6">
              <div className="flex items-center text-[16px] mb-3 border-b-[#ff8fe799] border-b">
                C<span className="font-normal mr-1">arina</span>N<span className="font-normal mr-1">oemi</span>P<span className="font-normal">acheco</span>
              </div>
              <div className="text-[#333]"><span className="font-normal">Mat Nac: </span>M202427306151350</div>
              <div className="text-[#333]"><span className="font-normal">Email: </span>cnp.mandataria@gmail.com</div>
              <div className="text-[#333]"><span className="font-normal">Cel: </span>3476 606595</div>
              
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
