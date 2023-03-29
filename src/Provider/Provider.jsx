import { createContext} from 'react';
import { v4 as uuidv4}from 'uuid';
import Model3 from "../assets/images/Model3.jpg";
import ModelY from "../assets/images/ModelY.jpg";
import ModelS from "../assets/images/ModelS.jpg";
import ModelX from "../assets/images/ModelX.jpg";
import SolarPanels from "../assets/images/SolarPanels.jpg";
import SolarRoof from "../assets/images/SolarRoof.webp";
import Accesories from "../assets/images/Accesories.jpg";

export const GlobalContext = createContext();


const bbdd = {
  header: {
    center : [
      {id: uuidv4(), title: "Model S"      ,    href:"#"},
      {id: uuidv4(), title: "Model 3"      ,    href:"#"},
      {id: uuidv4(), title: "Model X"      ,    href:"#"},
      {id: uuidv4(), title: "Model Y"      ,    href:"#"},
      {id: uuidv4(), title: "Solar Roof"   ,    href:"#"},
      {id: uuidv4(), title: "Solar Panels" ,    href:"#"},
    ],
    right: [
      {id: uuidv4(), title: "Shop"    ,   href:"#"},
      {id: uuidv4(), title: "Account" ,   href:"#"},
      {id: uuidv4(), title: "Menu"    ,   href:"#"},
    ],
    mobil: [
      {id: uuidv4(), title: "Model S"      ,       href:"#"},
      {id: uuidv4(), title: "Model 3"      ,       href:"#"},
      {id: uuidv4(), title: "Model X"      ,       href:"#"},
      {id: uuidv4(), title: "Model Y"      ,       href:"#"},
      {id: uuidv4(), title: "Solar Roof"   ,       href:"#"},
      {id: uuidv4(), title: "Solar Panels" ,       href:"#"},
      {id: uuidv4(), title: "Existing Inventory" , href:"#"},
      {id: uuidv4(), title: "Used Inventory"      ,href:"#"},
      {id: uuidv4(), title: "Trade-In"      ,      href:"#"},
      {id: uuidv4(), title: "Demo Drive"      ,    href:"#"},
      {id: uuidv4(), title: "Insurance"   ,        href:"#"},
      {id: uuidv4(), title: "Powerwall" ,          href:"#"},
      {id: uuidv4(), title: "Comercial Energy"    ,href:"#"},

    ]
  },
  product: [
      {id: uuidv4(), title:     "Model 3"         ,  image:Model3,       span: "Leasing starting at $349/mo",             buttonLeft: "Custom Order"    ,       buttonRight:"Demo Drive    ",   href:"#", state: true},
      {id: uuidv4(), title:     "Model Y"         ,  image:ModelY,       span: "",                                        buttonLeft: "Custom Order"    ,       buttonRight:"Demo Drive    ",   href:"#", state: true},
      {id: uuidv4(), title:     "Model S"         ,  image:ModelS,       span: "Schedule a Demo Drive",                   buttonLeft: "Custom Order"    ,       buttonRight:"View Inventory",   href:"#", state: true},
      {id: uuidv4(), title:     "Model X"         ,  image:ModelX,       span: "Schedule a Demo Drive",                   buttonLeft: "Custom Order"    ,       buttonRight:"View Inventory",   href:"#", state: true},
      {id: uuidv4(), title:     "Solar Panels"    ,  image:SolarPanels,  span: "Lowest Cost Solar Panels in America",     buttonLeft: "Order Now   "    ,       buttonRight:"Learn More    ",   href:"#", state: true},
      {id: uuidv4(), title:     "Solar Roof"      ,  image:SolarRoof,    span: "Produce Clean Energy From Your Roof",     buttonLeft: "Order Now   "    ,       buttonRight:"Learn More    ",   href:"#", state: true},
      {id: uuidv4(), title:     "Accessories"      , image:Accesories,   span: "",                                        buttonLeft: "Shop Now    "    ,       buttonRight: "             ",   href:"#", state: false},
      
  ],

  footer: [
    {id: uuidv4(), title: 'Tesla © 2023', href:"#"},
    {id: uuidv4(), title: 'Privacy & Legal', href:"#"},
    {id: uuidv4(), title: 'Vehicle Recalls', href:"#"},
    {id: uuidv4(), title: 'Contact', href:"#"},
    {id: uuidv4(), title: 'Careers', href:"#"},
    {id: uuidv4(), title: 'News', href:"#"},
    {id: uuidv4(), title: 'Engage', href:"#"},
    {id: uuidv4(), title: 'Locations', href:"#"},

  ]
}


export const Provider = ({children}) => {
  return (
    <GlobalContext.Provider value={bbdd}>
      {children}
    </GlobalContext.Provider>
  )
}
