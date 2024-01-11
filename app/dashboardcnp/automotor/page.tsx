import Image from 'next/image'

export default function Page() {
    return (
      <div className="w-[150px] mt-6 h-full">
        <Image
        src="/vehiculos.png"
        width={150}
        height={45}
        className="h-full object-cover w-full"
        alt="ilustración patente"
        />
      </div>
    ) 
  }