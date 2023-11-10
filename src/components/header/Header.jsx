import { NavBar } from "./NavBar"
import { BsFillBuildingsFill } from 'react-icons/bs';

export const Header = () => {
    return (
        <header className="flex place-content-between md:items-center text-[17px] bg-white text-primary p-2 mb-5 top-0 sticky">
          <div className="flex relative font-bold">
            <a href="#"> <BsFillBuildingsFill className= "inline-block h-12 w-12" />Secretaria de Turismo</a>
          </div>
          <NavBar />
      </header>
   
    )
}