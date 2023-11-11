import { Header } from "../header/Header";
import { Map } from "./Map";
import image1 from "../../assets/imgs/centro.jpg";
import { CentersInfo } from "./CentersInfo";
import { useState } from "react";

export const Centers = () => {
    const centroMedico = [-41.13732427306414, -71.31202815577801];
    const sanFernandoHDR = [-41.13830048695054, -71.31255615865223];
  
    const [mapPosition, setMapPosition] = useState({
      center: [-41.1395909, -71.3045325],
      zoom: 14.5,
    });
  
    const handleCenterClick = (position) => {
      console.log("Centro clicado:", position);
      setMapPosition({
        center: position,
        zoom: 20,
      });
    };
  
    return (
      <>
        <Header className="z-20"/>
        <main className="mt-6">
          <h2 className="mb-12 text-4xl tracking-tight font-extrabold text-center text-secondary">
            Nuestros centros de atención
          </h2>
  
          <div className="lg:flex md:gap-4 mb-12 h-full p-8">
            <div className="grid grid-rows-4 overflow-y-auto">
              <CentersInfo
                image={image1}
                title="Centro de atención médica 1"
                description="Centro de Atención Médica: Calidad y compasión en cada consulta. Profesionales dedicados, instalaciones modernas y atención personalizada para tu bienestar."
                position={centroMedico}
                onCenterClick={handleCenterClick}
              />
              <CentersInfo
                image={image1}
                title="Centro de atención médica 2"
                description="Centro de Atención Médica: Calidad y compasión en cada consulta. Profesionales dedicados, instalaciones modernas y atención personalizada para tu bienestar."
                position={sanFernandoHDR}
                onCenterClick={handleCenterClick}
              />
              <CentersInfo
                image={image1}
                title="Centro de atención médica 2"
                description="Centro de Atención Médica: Calidad y compasión en cada consulta. Profesionales dedicados, instalaciones modernas y atención personalizada para tu bienestar."
                position={sanFernandoHDR}
                onCenterClick={handleCenterClick}
              />
              <CentersInfo
                image={image1}
                title="Centro de atención médica 2"
                description="Centro de Atención Médica: Calidad y compasión en cada consulta. Profesionales dedicados, instalaciones modernas y atención personalizada para tu bienestar."
                position={sanFernandoHDR}
                onCenterClick={handleCenterClick}
              />
              {/* Agrega más instancias de CentersInfo según sea necesario */}
            </div>
            <Map mapPosition={mapPosition} />
          </div>
        </main>
      </>
    );
  };