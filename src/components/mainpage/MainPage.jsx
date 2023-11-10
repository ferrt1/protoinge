import image from "../../assets/imgs/campus_UNGS.jpg";

export const MainPage = () => {
  return (
    <section className="md:mb-0 lg:w-[1600px]mb-5">
      <img className="max-h-[50vh] w-full object-cover" src={image} alt="image" />
      <div className="md:flex">
        <div className="flex-1 py-6">
          <h2 className="text-[40px] font-bold md:text-[58px] leading-none">Secretaria de Turismo de UNGS</h2>
        </div>
        <div className="flex-1 md:pt-9 md:px-4">
          <p className="text-[1rem] mb-5 md:text-[18px]">
            Queremos presentar diferentes
            iniciativas y servicios, para ayudar a mejorar la calidad de la
            estadía de los visitantes que llegan para conocer los diferentes
            atractivos turísticos de la región.
          </p>
        </div>
      </div>
    </section>
  );
};
