import { MenuButton } from "../../atoms/MenuButton"
import { LogoInfotolima } from "../../atoms/logoInfotolima"
import { PerfilButton } from "../../atoms/PerfilButton"

export const NavBar = () => {
  return (
    <div className='w-full  border-b  flex justify-around content-center'>
        <MenuButton/>
        <LogoInfotolima/>
        <PerfilButton/>
    </div>
  )
}
