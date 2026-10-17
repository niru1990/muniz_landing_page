
"use client";

import { useState } from "react";
import content from "../content.json";

export default function PreguntasFrecuentes() {
  const [preguntaAbierta, setPreguntaAbierta] = useState<number | null>(null);

  return (
    <>
      {/* Lista de preguntas */}
      <div className="space-y-4">
        {content.preguntasFrecuentes.preguntas.map((pregunta, index) => {
          const abierta = preguntaAbierta === index;

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                abierta
                  ? "border-[#C59E46] bg-white shadow-md"
                  : "border-[#D9D8CF] bg-white/80 shadow-sm hover:border-[#C59E46] hover:shadow-md"
              }`}
            >
              <button
                type="button"
                onClick={() =>
                  setPreguntaAbierta(abierta ? null : index)
                }
                aria-expanded={abierta}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 md:px-7 md:py-6 text-left"
              >
                <span
                  className={`text-base md:text-xl font-serif font-semibold transition-colors ${
                    abierta ? "text-[#0E1E2E]" : "text-gray-800"
                  }`}
                >
                  {pregunta.pregunta}
                </span>

                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl transition-all duration-300 ${
                    abierta
                      ? "rotate-180 bg-[#0E1E2E] text-[#D2BB81]"
                      : "bg-[#F1F2EC] text-[#8D8677]"
                  }`}
                  aria-hidden="true"
                >
                  {abierta ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  abierta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#E8E5DA] px-5 py-5 md:px-7 md:py-6">
                    <p className="text-sm md:text-base leading-relaxed text-gray-600 font-Arial text-justify break-words whitespace-pre-line">
                      {pregunta.respuesta}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
