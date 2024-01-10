"use client"

import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Image from 'next/image';


export default function Page() {

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  
    return (
          <div ref={componentRef} className="relative print-agreement w-[796px] h-[1122px] bg-white">
            
            <div className="absolute right-8 w-30 text-white md:w-30">
              {/* <AcmeLogo /> */}
              <Image
                src="/c.png"
                width={65}
                height={61}
                alt="Screenshots of the dashboard project showing desktop version"
              />
            </div>
            <p className="mb-8">Formulario: INFORMACION VEHÍCULO-COMPRADOR-VENDEDOR</p>

            <div className="text-[13px] text-[#444] border-b border-gray-900/10 pb-12">

              <h2 className="text-base font-semibold leading-7 text-gray-900">Información</h2>
              <div className="bg-[#f6f6f6] p-2 mb-3 rounded-md border border-[#dedede]">
                <div className="flex items-center">
                  <div className="w-1/2 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Dominio</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Modelo Año del Vehículo</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Departamento del Comprador</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Departamento del Venderor</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-sm border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4 mt-2">
                  <p className="mr-4 text-sm">Verificacion Policial</p>
                  <div className="w-12 flex">
                    <div className="w-3 mr-2">
                      <input type="radio" name="first-name" id="first-name" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                    <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                  </div>
                  <div className="w-12 flex">
                    <div className="w-3 mr-2">
                      <input type="radio" name="first-name" id="first-name" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                    <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                  </div>
                  <p className="text-sm">Corresponde</p>
                </div>

                <div className="w-full mb-2">
                  <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Registro seccional donde esta radicado por patente (dnrpa/consulta/radicación por Patente) </label >
                  <div className="">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                  </div>
                </div>
              </div>

                
              <h2 className="text-base font-semibold leading-7 text-gray-900">Radicacion</h2>
              <div className="bg-[#f6f6f6cc] p-2 mb-3 rounded-md border border-[#dedede]">
                <div className="w-full mb-2">
                  <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Radicación que corresponda por domicilio del Comprador (dnrpa/consulta/radicación por Domicilio) </label >
                  <div className="">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                  </div>
                </div>
                <div className="w-full mb-2">
                  <p className="mr-4 text-sm">En caso de ser Transferencia por pedido de legajo:</p>
                  <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Radicación API (www.santafe.gov.ar/e-pt-cons-radic/) </label >
                  <div className="">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                  </div>
                </div>
              </div>

              <h2 className="text-base font-semibold leading-7 text-gray-900">Datos para consultar al Cliente</h2>
              <div className="bg-[#f6f6f6] p-2 mb-3 rounded-md border border-[#dedede]">
                
                <div className="flex items-center">
                  <div className="w-1/3 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Estado Civil</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/3 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Domicilio</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/3 mb-2">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Ocupación</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4 mt-2">
                  <p className="mr-4 text-sm">Cedula Autorizo a Conducir</p>
                  <div className="w-12 flex">
                    <div className="w-3 mr-2">
                      <input type="radio" name="cedula" id="cedula" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                    <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                  </div>
                  <div className="w-12 flex">
                    <div className="w-3 mr-2">
                      <input type="radio" name="cedula" id="cedula" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                    <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                  </div>
                  <div className="w-12 flex">
                    <div className="w-3 mr-2 flex items-center ml-6">
                      <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Cantidad</label >
                      <input type="number" id="quantity" name="quantity" min="1" max="5" /* autoComplete="given-name" */ className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                    
                  </div>
                  {/* <p className="text-sm">Corresponde</p> */}
                </div>

                <div className="w-full mb-2">
                  <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Autorizo al Sr/Sra, Apellido, Nombre y DNI </label >
                  <div className="">
                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-1/2 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Nuevo Titular Registral</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/2 mb-2">
                    <label for="transaccion" className="block text-sm font-medium leading-6 text-gray-900">Transacción</label>
                    <div className="">
                      <select id="transaccion" name="transaccion" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-4">
                        <option>Bancaria</option>
                        <option>Efectivo</option>
                        <option>""</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-base font-semibold leading-7 text-gray-900">Documentación Vehículo:</h2>
              <div className="bg-[#f6f6f6] p-2 mb-3 rounded-md border border-[#dedede]">
                <div className="flex items-center">
                  <div className="w-1/4 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Título</label >
                    <div className="flex items-center mb-4 mt-2">
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="titulo" id="titulo" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                      </div>
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="titulo" id="titulo" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                      </div>
                    </div>
                    {/* <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div> */}
                  </div>
                  <div className="w-1/4 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Cédula Identificacion</label >
                    <div className="flex items-center mb-4 mt-2">
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="-cedula-ident" id="-cedula-ident" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                      </div>
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="-cedula-ident" id="-cedula-ident" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                      </div>
                    </div>
                    {/* <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div> */}
                  </div>
                  <div className="w-1/4 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Cédula Autorizado</label >
                    <div className="flex items-center mb-4 mt-2">
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="cedula-auto" id="cedula-auto" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                      </div>
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="cedula-auto" id="cedula-auto" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                      </div>
                    </div>
                    {/* <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div> */}
                  </div>
                  <div className="w-1/4 mb-2">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Ültimo F1057 comun</label >
                    <div className="flex items-center mb-4 mt-2">
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="f1057" id="f1057" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                      </div>
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="f1057" id="f1057" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                      </div>
                    </div>
                    {/* <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div> */}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1/4 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">ST08 Firmada</label >
                    <div className="flex items-center mb-4 mt-2">
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="st08" id="st08" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">Si</label >
                      </div>
                      <div className="w-12 flex">
                        <div className="w-3 mr-2">
                          <input type="radio" name="st08" id="st08" autoComplete="given-name" className="w-4 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                        </div>
                        <label className="mr-4 block text-sm font-medium leading-4 text-gray-900">No</label >
                      </div>
                    </div>
                    {/* <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div> */}
                  </div>
                  <div className="w-1/4 mb-2 mr-4">
                    <label className="mr-4 block text-sm font-medium leading-6 text-gray-900">Fecha de la Firma</label >
                    <div className="">
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-4" />
                    </div>
                  </div>
                  <div className="w-1/4 mb-2 mr-4">
                    <label for="transaccion" className="block text-sm font-medium leading-6 text-gray-900">Moras Sellado</label>
                    <div className="">
                      <select id="transaccion" name="transaccion" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-4">
                        <option>20%</option>
                        <option>40%</option>
                        <option>60%</option>
                        <option>100%</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-1/4 mb-2">
                    <label for="transaccion" className="block text-sm font-medium leading-6 text-gray-900">Moras Arancel</label>
                    <div className="">
                      <select id="transaccion" name="transaccion" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-4">
                      <option>20%</option>
                        <option>40%</option>
                        <option>60%</option>
                        <option>80%</option>
                        <option>100%</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

                
                  






                {/* <div className="sm:col-span-3">
                  <label for="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                  <div className="mt-2">
                    <select id="country" name="country" autoComplete="country-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                  <div className="mt-2">
                    <input type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label for="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <div className="mt-2">
                    <input type="text" name="city" id="city" autoComplete="address-level2" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="region" className="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                  <div className="mt-2">
                    <input type="text" name="region" id="region" autoComplete="address-level1" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label for="postal-code" className="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                  <div className="mt-2">
                    <input type="text" name="postal-code" id="postal-code" autoComplete="postal-code" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div> */}
              
            </div>

            <button onClick={handlePrint}>Imprimir</button>
          </div>
    ) 
  }