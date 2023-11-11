import  image  from '../../assets/imgs/backgrounds/cerro-catedral-bariloche.jpg'

export const Services = () => {
  return (
    <section className="h-[50vh] w-[100%] mt-12 py-12">
      <div className="md:w-[60%] md:h-[90%] m-auto p-12 rounded-3xl" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white">
      <span className="text-stroke text-stroke-black">¡Explorá los productos y servicios de nuestros comercios preferidos!</span>
    </h2>
        <button className="bg-white text-black py-2 px-4 rounded-lg text-lg font-semibold mx-auto mt-12 block border-black border-2 shadow-md transition-all duration-300 hover:shadow-none hover:border-transparent hover:bg-semiBlack hover:text-white">
      Explorar
    </button>
      </div>
    </section>
  );
};
