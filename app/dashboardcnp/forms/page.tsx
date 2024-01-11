import Image from 'next/image'

export default function Page() {
    return (
      <div className="relative mb-2 h-[364px]">
        <div className="absolute pr-4 pl-14 text-[#222] w-full text-[13px] [text-shadow:_1px_1px_white] uppercase leading-none h-full flex flex-col justify-center">
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">01</div> 
            </div>
            <div>Alta, Baja o Modificación</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">02</div> 
            </div>
            <div>Certificados, Informes y Otros</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">04</div> 
            </div>
            <div>Trámites Declaracion Deudas y Gravamenes</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">08</div> 
            </div>
            <div>Contrato de Transferencia - Inscripción de Dominio</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">03</div> 
            </div>
            <div>Inscripción Contrato Prendario</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">05</div> 
            </div>
            <div>Solicitud de Inscripción Inicial</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">59</div> 
            </div>
            <div>Mandatario, Mero Presentante y Comerciante</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">11</div> 
            </div>
            <div>Denuncia Venta</div>
          </div>
          <div className="flex mb-3">
            <div className="flex">
              <div className="">F-</div>
              <div className="font-extrabold text-[#b3409a] text-[15px] mr-2">12</div> 
            </div>
            <div>Solicitud de Verificación de Motovehículo</div>
          </div>
          <div className="flex">
            <div className="flex">
              <div className="font-extrabold text-[#b3409a] text-[14px] normal-case">Otros</div>
              <div className="">...</div> 
            </div>
          </div>
          
          {/* <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">01</span>Alta, Baja o Modificación</p> 
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">02</span>Certificados, Informes y Otros</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">04</span>Trámites Declaracion Deudas y Gravamenes</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">08</span>Contrato de Transferencia - Inscripción de Dominio</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">03</span>Inscripción Contrato Prendario</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">05</span>Solicitud de Inscripción Inicial</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">59</span>Mandatario, Mero Presentante y Comerciante</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">11</span>Denuncia Venta</p>
          <p className="mb-4">F-<span className="font-extrabold text-[#b3409a] text-[17px] mr-3">12</span>Solicitud de Verificación de Motovehículo</p>
          <p className="mb-4"><span className="font-extrabold text-[#b3409a] text-[17px] mr-3">Otros</span>...</p> */}
        </div>
        <div className="h-full">
          <Image
            src="/e4.png"
            width={280}
            height={63}
            className="h-full w-full"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>
    ) 
  }