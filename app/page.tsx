import Image from "next/image";
import content from "../content.json";
import { publicPath } from "@/lib/publicPath";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - 15% height */}
      <section className="relative w-full min-h-[15vh] py-3 flex flex-col items-center justify-center bg-[#0E1E2E]">
        <div className="relative z-10 w-full px-2 md:px-8 flex items-center justify-center">
          {/* Parte superior: Imágenes, título y subtítulo en una línea */}
          <div className="flex flex-row items-center justify-between w-full max-w-7xl gap-2 md:gap-6">
            {/* Imagen izquierda - Símbolo Masónico */}
            {content.hero.leftImage && (
              <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src={publicPath(content.hero.leftImage)}
                  alt="Símbolo Masónico"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            )}

            {/* Título y subtítulo central */}
            <div className="flex-1 min-w-0 text-center">
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line break-words">
                {content.hero.encabezado}
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line break-words">
                {content.hero.title}
              </h1>
              {content.hero.subtitle && (
                <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-blue-400 mt-1 leading-snug whitespace-pre-line break-words">
                  {content.hero.subtitle}
                  <a href={content.section6.link} className="text-blue-600 hover:underline">
            {content.section6.linkText}
          </a>
                </h2>
              )}
            </div>

            {/* Imagen derecha - Javier Muñiz */}
            {content.hero.rightImage && (
              <div className="relative w-10 h-10 sm:w-16 sm:h-16 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src={publicPath(content.hero.rightImage)}
                  alt="Javier Muñiz"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Hero Description Section */}
      {content.heroDescription && (
        <section className="relative w-full py-8 md:py-12 bg-[#0E1E2E]">
          <div className="w-full px-4 md:px-8 flex flex-col items-center justify-center">
            {/* Línea dorada separadora */}
            <div className="w-full max-w-screen-2xl mx-auto mb-6">
              <hr className="w-full border-t-4 border-yellow-500" />
            </div>

            {/* Descripción adicional */}
            <div className="w-full max-w-7xl mx-auto text-center space-y-3">
              <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-white whitespace-pre-line break-words">
                {content.heroDescription.title}
              </h3>
              {content.heroDescription.subtitle && (
                <h4 className="text-base md:text-2xl lg:text-3xl font-semibold text-[#D2BB81] whitespace-pre-line break-words">
                  {content.heroDescription.subtitle}
                </h4>
              )}
              <p className="text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed whitespace-pre-line break-words">
                {content.heroDescription.description}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Section 5 */}
      {content.section5 && (
        <section className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]">
          <div className="max-w-4xl mx-auto text-left space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-[#8D8677]">
              {content.section5.title}
            </h2>
            {content.section5.subtitle && (
              <h3 className="text-lg md:text-2xl font-semibold text-[#162128]">
                {content.section5.subtitle}
              </h3>
            )}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {content.section5.description}
            </p>
          </div>
        </section>
      )}
      <div className="container mx-auto px-4">
        <div className="w-full max-w-screen-2xl mx-auto mb-6">
          <hr className="w-full border-t-4 border-yellow-500" />
        </div>
      </div>


      {/* Section 2 */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8D8677]">
            {content.section2.title}
          </h2>
          {content.section2.subtitle && (
            <h3 className="text-lg md:text-2xl font-semibold text-[#162128]">
              {content.section2.subtitle}
            </h3>
          )}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {content.section2.description}
          </p>
        </div>
      </section>

      

      <div className="container mx-auto px-4">
        <div className="w-full max-w-screen-2xl mx-auto mb-6">
          <hr className="w-full border-t-4 border-yellow-500" />
        </div>
      </div>

      {/* Section 3 */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]">
        <div className="max-w-4xl mx-auto text-left space-y-6 mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8D8677]">
            {content.section3.title}
          </h2>
          {content.section3.subtitle && (
            <h3 className="text-lg md:text-2xl font-semibold text-[#162128]">
              {content.section3.subtitle}
            </h3>
          )}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {content.section3.description}
          </p>
        </div>

        {/* Features - Vertical List */}
        <div className="max-w-4xl mx-auto space-y-8">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Imagen a la izquierda */}
              <div className="relative w-20 h-20 md:w-32 md:h-32 flex-shrink-0">
                <Image
                  src={publicPath(feature.image)}
                  alt={`Símbolo Masónico de ${feature.title}`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>

              {/* Texto a la derecha */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="w-full max-w-screen-2xl mx-auto mb-6">
          <hr className="w-full border-t-4 border-yellow-500" />
        </div>
      </div>

      {/* Section 4 */}
      <section className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]">
        <div className="max-w-4xl mx-auto text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-[#8D8677]">
            {content.section4.title}
          </h2>
          {content.section4.subtitle && (
            <h3 className="text-lg md:text-2xl font-semibold text-[#162128]">
              {content.section4.subtitle}
            </h3>
          )}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {content.section4.description}
          </p>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <div className="w-full max-w-screen-2xl mx-auto mb-6">
          <hr className="w-full border-t-4 border-yellow-500" />
        </div>
      </div>

      {/* CTA Button Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex justify-center">
          <a
            href={content.cta.googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#0E1E2E] rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            {content.cta.buttonText}
          </a>
        </div>
      </section>      

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; 2026 (e.·. v.·.) Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
