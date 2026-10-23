import Image from "next/image";
import content from "../content.json";
import { publicPath } from "@/lib/publicPath";
import PreguntasFrecuentes from "@/lib/PreguntasFrecuentes";
import GoldLine from "@/lib/GoldLine";


export default function Home() {
  
  return (
    <div className="min-h-screen">
      {/* Hero Section - 15% height */}
      <section id="inicio" className="relative w-full min-h-[15vh] py-3 flex flex-col items-center justify-center bg-[#0E1E2E]/90">
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
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#D2BB81] leading-tight whitespace-pre-line break-words">
                {content.hero.encabezado}
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight whitespace-pre-line break-words font-serif">
                {content.hero.title}
              </h1>
              {content.hero.subtitle && (
                <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-[#D2BB81] mt-1 leading-snug whitespace-pre-line break-words">
                  {content.hero.subtitle}
                  <a href={content.section6.link} className="text-[#D2BB81] hover:underline">
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
        <section className="relative w-full py-8 md:py-12 bg-[#0E1E2E]/90">
          <div className="w-full px-4 md:px-8 flex flex-col items-center justify-center">
            {/* Línea dorada separadora */}
            <div className="w-full max-w-screen-2xl mx-auto mb-6">
              <hr className="w-full border-t-4 border-[#C59E46]" />
            </div>

            {/* Descripción adicional con imagen */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
              {/* Imagen izquierda */}
              {content.heroDescription.leftImage && (
                <div className="relative w-24 h-24 md:w-48 md:h-48 flex-shrink-0">
                  <Image
                    src={publicPath(content.heroDescription.leftImage)}
                    alt="Standarte"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {/* Texto */}
              <div className="flex-1 text-left space-y-3">
                <h3 className="text-lg md:text-3xl lg:text-4xl font-bold text-white whitespace-pre-line break-words font-serif">
                  {content.heroDescription.title}
                </h3>
                {content.heroDescription.subtitle && (
                  <h4 className="text-base md:text-2xl lg:text-3xl font-semibold text-[#D2BB81] whitespace-pre-line break-words">
                    {content.heroDescription.subtitle}
                  </h4>
                )}
                <p className="text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed whitespace-pre-line break-words font-Arial">
                  {content.heroDescription.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}


      
      {/* Menú de navegación */}
      <nav className="sticky top-0 z-50 w-full bg-[#0E1E2E]/95 backdrop-blur-sm border-y border-[#C59E46]/70 shadow-md">
        <div className="max-w-7xl mx-auto px-3 md:px-8">
          <div className="flex items-center justify-center gap-2 md:gap-6 py-3 overflow-x-auto">
            <a
              href="#section2"
              className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
            >
              {content.section2.title}
            </a>

            <a
              href="#sectionHistory"
              className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
            >
              {content.sectionHistory.title}
            </a>

            <a
              href="#section3"
              className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
            >
              {content.section3.title}
            </a>

            <a
              href="#section4"
              className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
            >
              {content.section4.title}
            </a>

            <a
              href="#preguntas"
              className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
            >
              Preguntas frecuentes
            </a>

            {content.section5 && (
              <a
                href="#section5"
                className="shrink-0 px-3 py-2 text-sm md:text-base text-[#D2BB81] hover:text-white transition-colors"
              >
                Contactanos
              </a>
            )}
          </div>
        </div>
      </nav>
      

      {/* Section 2 */}
      <section id="section2" className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90">
        <div className="max-w-4xl mx-auto text-left space-y-6">

          {/* Título con acacia a la izquierda */}
          <div className="flex items-center gap-3 md:gap-4">
            {content.decotarionImage.acaciaImage && (
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                <Image
                  src={publicPath(content.decotarionImage.acaciaImage)}
                  alt="Acacia"
                  fill
                  sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            )}

            <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677] ">
              {content.section2.title}
            </h2>
          </div>

          {/* Subtítulo */}
          {content.section2.subtitle && (
            <h3 className="text-lg md:text-2xl font-Arial text-[#162128]">
              {content.section2.subtitle}
            </h3>
          )}

          {/* Descripción */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-Arial text-justify hyphens-auto">
            {content.section2.description}
          </p>

        </div>
      </section>


      <GoldLine />

      {/* Section History */}
      <section id="sectionHistory" className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90">
        <div className="max-w-4xl mx-auto text-left space-y-6">

          {/* Título con acacia a la izquierda */}
          <div className="flex items-center gap-3 md:gap-4">
            {content.decotarionImage.acaciaImage && (
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                <Image
                  src={publicPath(content.decotarionImage.acaciaImage)}
                  alt="Acacia"
                  fill
                  sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            
            <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677]">
              {content.sectionHistory.title}
            </h2>
          </div>
          
          {content.sectionHistory.subtitle && (
            <h3 className="text-lg md:text-2xl font-Arial text-[#162128]">
              {content.sectionHistory.subtitle}
            </h3>
          )}
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-Arial text-justify hyphens-auto">
            {content.sectionHistory.description}
          </p>

          <a href={content.sectionHistory.link} className="shrink-0 px-3 py-2 text-sm md:text-base text-gray-500 hover:text-white transition-colors">
              {content.sectionHistory.linkText}
          </a>
        </div>
      </section>

      <GoldLine />



      {/* Section 3 */}
      <section id="section3" className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90">
        <div className="max-w-4xl mx-auto text-left space-y-6 mb-12">
          {/* Título con acacia a la izquierda */}
          <div className="flex items-center gap-3 md:gap-4">
            {content.decotarionImage.acaciaImage && (
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                <Image
                  src={publicPath(content.decotarionImage.acaciaImage)}
                  alt="Acacia"
                  fill
                  sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            
            <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677]">
              {content.section3.title}
            </h2>
          </div>
          
          {content.section3.subtitle && (
            <h3 className="text-lg md:text-2xl font-Arial text-[#162128]">
              {content.section3.subtitle}
            </h3>
          )}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed font-Arial">
            {content.section3.description}
          </p>
        </div>

       
        {/* Features - Tarjetas interactivas */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {content.features.map((feature, index) => (
            <div
              key={index}
              className="group relative min-h-64 overflow-hidden rounded-lg bg-white/90 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Imagen y título */}
              <div className="flex h-64 flex-col items-center justify-center gap-4 p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="relative w-28 h-28 shrink-0">
                  <Image
                    src={publicPath(feature.image)}
                    alt={`${feature.title}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>

                <h3 className="text-center text-xl md:text-2xl font-serif text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Contenido expandido al pasar el mouse */}
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto bg-[#0E1E2E] p-6 text-center opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <h3 className="mb-4 text-xl md:text-2xl font-serif text-[#D2BB81]">
                  {feature.title}
                </h3>

                <p className="text-sm md:text-base text-gray-200 leading-relaxed font-Arial">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>
      
      <GoldLine />

      {/* Section 4 */}
      <section id="section4" className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90">
        <div className="max-w-4xl mx-auto text-left space-y-6">

          {/* Título con acacia a la izquierda */}
          <div className="flex items-center gap-3 md:gap-4">
            {content.decotarionImage.acaciaImage && (
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                <Image
                  src={publicPath(content.decotarionImage.acaciaImage)}
                  alt="Acacia"
                  fill
                  sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            )}
            
            <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677]">
              {content.section4.title}
            </h2>
          </div>
          
          {/* Lema - Tarjetas interactivas */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {content.lemas.map((lema, index) => (
            <div
              key={index}
              className="group relative min-h-64 overflow-hidden rounded-lg bg-white/90 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Imagen y título */}
              <div className="flex h-64 flex-col items-center justify-center gap-4 p-6 transition-opacity duration-300 group-hover:opacity-0">
                <div className="relative w-28 h-28 shrink-0">
                  <Image
                    src={publicPath(lema.image)}
                    alt={`${lema.title}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>

                <h3 className="text-center text-xl md:text-2xl font-serif text-gray-900">
                  {lema.title}
                </h3>
              </div>

              {/* Contenido expandido al pasar el mouse */}
              <div className="absolute inset-0 flex flex-col items-center justify-center overflow-y-auto bg-[#0E1E2E] p-6 text-center opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                <h3 className="mb-4 text-xl md:text-2xl font-serif text-[#D2BB81]">
                  {lema.title}
                </h3>

                <p className="text-sm md:text-base text-gray-200 leading-relaxed font-Arial">
                  {lema.description}
                </p>
              </div>
            </div>
          ))}

        </div>
        </div>
      </section>

      <GoldLine />
      
      
      {/* Preguntas frecuentes */}
      <section
        id="preguntas"
        className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90"
      >
        <div className="max-w-4xl mx-auto">

          {/* Título */}
          <div className="flex items-center gap-3 md:gap-4 mb-10">
            {content.decotarionImage.acaciaImage && (
              <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                <Image
                  src={publicPath(content.decotarionImage.acaciaImage)}
                  alt="Acacia"
                  fill
                  sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                  className="object-contain"
                />
              </div>
            )}

            <div>
              <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677]">
                {content.preguntasFrecuentes.title}
              </h2>
              <p className="mt-2 text-sm md:text-base text-gray-600 font-Arial">
                Encontrá respuestas a las consultas más habituales.
              </p>
            </div>
          </div>

          <PreguntasFrecuentes />

        </div>
      </section>

      <GoldLine />

      {/* Section 5 */}
      {content.section5 && (
        <section
          id="section5"
          className="container mx-auto px-4 py-16 md:py-24 bg-[#F1F2EC]/90"
        >
          <div className="max-w-4xl mx-auto">

            {/* Contenido y botones */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10">

              {/* Texto: conserva el estilo de las demás secciones */}
              <div className="flex-1 min-w-0 text-left space-y-6">

                {/* Título con acacia a la izquierda */}
                <div className="flex items-center gap-3 md:gap-4">
                  {content.decotarionImage.acaciaImage && (
                    <div className="relative w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0">
                      <Image
                        src={publicPath(content.decotarionImage.acaciaImage)}
                        alt="Acacia"
                        fill
                        sizes="(max-width: 639px) 40px, (max-width: 767px) 56px, 80px"
                        className="object-contain"
                      />
                    </div>
                  )}

                  <h2 className="text-2xl md:text-4xl font-serif text-[#8D8677]">
                    {content.section5.title}
                  </h2>
                </div>

                {content.section5.subtitle && (
                  <h3 className="text-lg md:text-2xl font-Arial text-[#162128]">
                    {content.section5.subtitle}
                  </h3>
                )}

                <p className="text-base md:text-lg text-gray-600 leading-relaxed font-Arial text-justify hyphens-auto">
                  {content.section5.description}
                </p>
              </div>

              {/* Botones a la derecha */}
              <div className="w-full md:w-56 lg:w-64 shrink-0 flex flex-col justify-center gap-4">
                <a
                  href={content.cta.buttonWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full min-h-14 items-center justify-center px-5 py-3 text-base font-semibold text-white bg-[#0E1E2E] rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-center"
                >
                  {content.cta.buttonTextWhatsapp}
                </a>

                <a
                  href={content.cta.googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full min-h-14 items-center justify-center px-5 py-3 text-base font-semibold text-white bg-[#0E1E2E] rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-center"
                >
                  {content.cta.buttonTextForm}
                </a>
              </div>

            </div>
          </div>
        </section>
      )}


      <GoldLine />
         

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-500">
        <p>&copy; 2026 (e.·. v.·.) Todos los derechos reservados 
          <a href="#inicio" className="shrink-0 px-3 py-2 text-sm md:text-base text-gray-500 hover:text-white transition-colors">
              Inicio
          </a>
        </p>
      </footer>
    </div>
  );
}
