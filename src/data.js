import calendar from "./Components/Assets/calendar.png";
import fruits from "./Components/Assets/fruits.png";
import wallet from "./Components/Assets/wallet.png";
import delivery from "./Components/Assets/delivery-truck.png";
import fruit from "./Components/Assets/fruit.png";
import questions from "./Components/Assets/conversation.png";
import grapes from "./Components/Assets/aboutUs_grapes.jpg";
import figs from "./Components/Assets/aboutUs_fig.jpg";
import box from "./Components/Assets/aboutU_woodBox.jpg";
import apples from "./Components/Assets/aboutUs_appleBox.jpg";
import papaya from "./Components/Assets/aboutUs_papaya.jpg";
import kiwi from "./Components/Assets/aboutUs_kiwi.jpg";
import styles from "./Components/Buttons/Buttons.module.css";
import ShoppingCart from "./Components/Icons/ShoppingCart";
import ReturnIcon from "./Components/Icons/ReturnIcon";
import ContactIcon from "./Components/Icons/ContactIcon";
import MapIcon from "./Components/Icons/MapIcon";
import WinterIcon from "./Components/Icons/WinterIcon";
import SpringIcon from "./Components/Icons/SpringIcon";
import SummerIcon from "./Components/Icons/SummerIcon";
import AutumnIcon from "./Components/Icons/AutumnIcon";

export const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "How it works?",
    link: "/howitworks",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "About us",
    link: "/aboutus",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const fruitSeason = [
  {
    title: "Fruit Season:",
    link: "/season/fruitseason",
  },
  {
    category: "All",
    link: "/season/all",
  },
  {
    category: "Winter",
    link: "/season/winter",
  },
  {
    category: "Spring",
    link: "/season/spring",
  },
  {
    category: "Summer",
    link: "/season/summer",
  },
  {
    category: "Autumn",
    link: "/season/autumn",
  },
];

export const homeText = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export const howItWorksFullPageText = [
  {
    title: "How does it works?",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
];

export const howItWorksExplanation = [
  {
    image: calendar,
    description: "Choose the plan that best suits you: Monthly or weekly",
  },
  {
    image: fruits,
    description:
      "Now it´s time to choose the fruits from the Fruit Catalogue you want to be delivered",
  },
  {
    image: wallet,
    description: "Choose the payment method",
  },
  {
    image: delivery,
    description: "Soon your package will arrive at your door!",
  },
];

export const howItWorksExplanationBottom = [
  {
    image: fruit,
  },
  {
    image: questions,
    description: "Do you still have questions? Please, contact us!",
  },
];

export const howItWorksText = [
  {
    title: "How Fresh Fruits at your door works?",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    button: "Continue reading...",
    link: "/howitworks",
  },
];

export const addressData = [
  {
    icon: <MapIcon />,
    title: "Address",
    address: "Martinstraße, 78 \n 22333 - Berlin - Germany",
  },
];

export const contactData = [
  {
    icon: <ContactIcon />,
    title: "Contact",
    telephone: "+49 02544 8976530",
    email: "contact@freshfruit.de",
  },
];

export const aboutUsImagesLeft = [
  {
    image1: grapes,
    image2: figs,
    image3: box,
  },
];

export const aboutUsImagesRight = [
  {
    image1: kiwi,
    image2: papaya,
    image3: apples,
  },
];

export const aboutUsText = [
  {
    title: "About us",
  },
  {
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
  },
];

export const CartButtons = [
  {
    name: "Go to cart",
    link: "/cartpage",
    icon: <ShoppingCart width={"1rem"} />,
  },
  {
    name: "Buy more",
    link: "/products",
    icon: <ReturnIcon />,
  },
];

export const SeasonButtonIcon = [
  {
    icon: <WinterIcon />,
    filterProduct: "Winter"
  },
  {
    icon: <SpringIcon />,
    filterProduct: "Spring"

  },
  {
    icon: <SummerIcon />,
    filterProduct: "Summer"

  },
  {
    icon: <AutumnIcon />,
    filterProduct: "Autumn"

  },
];
