import Link from 'next/link'

export default function Page() {
    return (
      <div className="flex flex-col">
        <p className="mb-8 ">FORMULARIOS:</p>
        <Link className="px-4 py-2 hover:bg-[#fac3]" href="/dashboard/forms/form-planilla"> 1- Planilla</Link>
        <Link className="px-4 py-2 hover:bg-[#fac3]" href="/dashboard/forms/vehiculo-comprador-vendedor"> 2- Información importante del VEHÍCULO/COMPRADOR/VENDEDOR</Link>
      </div>
    )
  }