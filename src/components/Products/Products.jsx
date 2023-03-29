import { useContext } from "react";
import { GlobalContext } from "../../Provider/Provider";
import "./Products.scss";

export const Products = () => {
  const { product } = useContext(GlobalContext);


  return (
    <div className="Product">
      <div className="Product-scroll">
        {product.map(({ id, image, title,buttonLeft,buttonRight, span, href,state }) => (
          <div className="Product-content" key={id}>
            <div className="Product-info">
              <section className="Product-section">
                <h2 className="Product-h2">{title}</h2>
                <a href={href} title={title} className="Product-span">
                  {span}
                </a>
              </section>

              <ul className="Product-ul">
                <li className="Product-li">
                  <a className="Product-a" href={href} title={buttonLeft}>
                    {buttonLeft}
                  </a>
                </li>
                <li className={`${ state === false ? 'disabled' : 'Product-li' }`}>
                  <a className="Product-a" href={href} title={buttonRight}>
                    {buttonRight}
                  </a>
                </li>
              </ul>
            </div>

            <img src={image} alt={image} className="Product-img" />
          </div>
        ))}
      </div>
    </div>
  );
};