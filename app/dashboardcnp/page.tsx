import Image from 'next/image'

export default function Page() {
    return (
      <div className="flex flex-col relative justify-between h-[364px] mb-2">{/* [height:_calc(100%_-_100px)] */}
        <div className="z-10 bg-[#bd59a8ff] text-[14px] leading-6 text-white text-center">
          REPÚBLICA ARGENTINA
          <div className="absolute top-0 w-[24px] h-full top-[3px] right-2">
          <Image
          src="/banderaArg.png"
          width={412}
          height={561}
          className="w-full object-contain"
          alt="bandera argentina"
          />
        </div>
        </div>
        <div className="absolute top-0 w-full h-full">
          <Image
          src="/vehiculos-p.png"
          width={412}
          height={561}
          className="h-full w-full object-contain"
          alt="ilustración patente"
          />
        </div>
        <div className="absolute bottom-0 w-full z-10 bg-[#bd59a8ff] leading-6 text-[18px] text-white text-center [font-variant:_small-caps]">Mandataria Nacional</div>
      </div>
    ) 
  }

/* import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';
 
export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue} />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
} */