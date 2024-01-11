import SideNavcnp from '@/app/ui/dashboardcnp/sidenavcnp';
import Image from 'next/image';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex min-h-screen flex-col bg-[#b37da722]">{/* imageFormAuto bg-[url('/formAuto.png')]*/}
      <div className="h-[176px]">{/*  flex-none md:w-64 */}
        <SideNavcnp />
      </div>
      <div className="flex flex-col justify-between flex-grow md:overflow-y-auto md:p-12">{/*  [height:_calc(100vh_-_176px)] */}
        {children}
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
      </div>
    </div>
  );
}