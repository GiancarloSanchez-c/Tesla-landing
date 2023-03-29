import { useContext } from "react"
import { GlobalContext } from "../../Provider/Provider"
import './Footer.scss';

export const Footer = () => {


  const { footer } = useContext(GlobalContext);


  return (
    <div className="Footer"> 
      <div className="Wrapper">
        <ul className="Footer-ul">
        {footer.map(({id, title,href})=>(
          <li className="Footer-li" key={id}>
            <a href={href} title={title} className="Footer-a">
              {title}
            </a>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
