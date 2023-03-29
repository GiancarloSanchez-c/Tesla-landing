import { useContext, useState    } from "react"
import { GlobalContext } from '../../Provider/Provider';
import { MdClose } from "react-icons/md";
import './Header.scss';


export const Header = () => {

  const [menu, setMenu] = useState(false)
  const { header } = useContext(GlobalContext);
  const { center, right, mobil } = header;

  const toogleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className="Header"> 
      <div className="Wrapper">

        <section className="Header-banner">
          <strong className="Header-strong">
            Until March 2023, new Model 3 and Model Y vehicles qualify for a $7,500 federal tax credit for eligible buyers. 
            <a className="Header-more" title="Learn More" href="#">
              Learn More
            </a>
          </strong>
        </section>

          
         <section className="Header-menu">
           <h1 className="Header-h1">
              <a href="#" title="Tesla" className="Header-a">
                <svg className="Header-svg" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path>
                </svg>
              </a>
            </h1>

          <nav className={`Header-nav ${menu ? 'isMobile': ''}`}>
          

            <ul className="Header-ul">
              {center.map(({id, title, href}) => (
                <li className="Header-li" key={id} >
                  <a href={href} title={title} className="Header-a">{title}</a>
                </li>
               ))}
             </ul>

            <ul className="Header-ul">
               {right.map(({id, title, href}) => (
                <li className="Header-li" key={id}>
                  <a href={href} title={title} className="Header-a">{title}</a>
                </li>
               ))}
            </ul>

            <ul className='Header-mobile'>
              {mobil.map(({id, title, href}) => (
                <li className="Header-li" key={id} >
                  <a href={href} title={title} className="Header-a">{title}</a>
                </li>
              ))}
            </ul>

          </nav>

          <button className="Header-button" onClick={toogleMenu}>
            {menu ? (
              <MdClose size={25} className="Header-close" />
            ) : (
              <>Menu</>
            )}
          </button>
        </section>


      </div>
    </div>
  )
}
