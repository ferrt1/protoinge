export const CenterInfo = () => {
  return (
    <aside className="bg-semiBlack text-white px-[20px] py-[28px] lg:w-[358px] lg:min-w-[260px] lg:max-h-[650px] mt-4 lg:mt-0">
      <h1 className="text-4xl font-bold text-lightBlue">Centros de Atención</h1>
      <section className="md:flex md:flex-col md:place-content-between">
        <p className="py-5 md:mt-2 md:text-[15px] xl:text-[18px]">
          La ciudad cuenta con personal capacitado para brindar información de
          referencia de la ciudad, como así también asistencia y primeros
          auxilios. Se cuenta con centros de asistencia en distintas ubicaciones
          del distrito, junto con móviles que recorrerán la ciudad para acercar
          la atención a los visitantes.
        </p>
        <div>
          <h2 className="text-[1em] py-4 md:py-3 xl:text-[16px]">
            Presiona para saber ubicación de los centros de atención
          </h2>
          <a to="/map">
          <button className="bg-primary text-white w-[168px] h-[48px] uppercase hover:bg-secondary">
            Mostrar Centros
          </button>
          </a>
        </div>
      </section>
    </aside>
  );
};
