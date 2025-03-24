import dish1 from "../assets/ragi.png";
import dish2 from "../assets/image2.png";
import dish3 from "../assets/muttontikka.png";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/idiyapam.png";
import dish7 from "../assets/dosa.png";
import dish8 from "../assets/chettinad chicken.png";
import dish9 from "../assets/paneer.png";
import dish10 from "../assets/butterchicken.png";

import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import indian from "../assets/indian.jpeg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Ragi Sangati",
    description: "A traditional South Indian dish made from ragi (finger millet) and rice, served with spicy and flavorful curry.",
  },
  {
    image: dish2,
    title: "Chicken Tikka Masala",
    description: "Indian curry with tender chicken in spicy sauce",
  },
  {
    image: dish3,
    title: "Mutton Tikka",
    description: "Juicy, grilled mutton chunks marinated in aromatic Indian spices, cooked to perfection in a tandoor.",
  },
  {
    image: dish4,
    title: "Sushi Roll",
    description: "Assorted seafood and vegetables wrapped in seaweed and rice.",
  },
  {
    image: dish5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a gooey center.",
  },
  {
    image: dish6,
    title: "Chicken Tandoori Idiyappam",
    description: "Delicate rice string hoppers served with smoky, tandoor-cooked chicken marinated in rich spices.",
  },
  {
    image: dish7,
    title: "Masala Dosa",
    description: "A crispy, golden-brown rice crepe filled with spiced mashed potatoes, served with coconut chutney and sambar.",
  },
  {
    image: dish8,
    title: "Chettinad Chicken Curry",
    description: " A rich and spicy South Indian curry made with aromatic Chettinad spices and tender chicken pieces.",
  },
  {
    image: dish9,
    title: "Paneer Tikka",
    description: "Soft and juicy cottage cheese cubes marinated in a blend of yogurt and aromatic Indian spices, skewered and grilled to perfection, served with mint chutney.",
  },
  {
    image: dish10,
    title: "Butter Chicken ",
    description:
      "Tender chicken pieces cooked in a creamy tomato-based gravy, flavored with butter and aromatic Indian spices.",
  },
];

export const ABOUT = {
  header: "We love cooking!",
  content:
    "At Restaura, we believe that great food goes beyond taste; it tells a story of dedication and creativity. From our chef's signature creations to our attentive service, every detail is curated to ensure your visit is nothing short of exceptional. Whether you're savoring our renowned Tikka Kebab or exploring our diverse menu inspired by global flavors, each dish is a celebration of flavor and innovation. Join us for a culinary journey where every bite leaves a lasting impression. Experience Restaura—where every meal is a masterpiece.",
};

export const MISSION =
  "At our restaurant, our mission is to create delicious and memorable dining experiences.";

export const CUSINES = [
  {
    number: "01.",
    image: italian,
    title: "Italian",
    description:
      "Experience the flavors of Italy with our exquisite Italian cuisine, featuring traditional recipes and contemporary dishes.",
  },
  {
    number: "02.",
    image: japanese,
    title: "Japanese",
    description:
      "Delight in the art of Japanese culinary excellence, offering a fusion of classic and modern flavors.",
  },
  {
    number: "03.",
    image: indian,
    title: "Indian",
    description:
      "Indulge in the rich and diverse tastes of India, with a menu that celebrates the country's culinary heritage.",
  },
];

export const REVIEW = {
  name: "Pʀᴀsʜᴀɴᴛʜ_ᴋʀ",
  profession: "Food Critic",
  content:
    "“As a seasoned food critic, my expectations are always high when stepping into a new dining establishment. Restaura, with its unassuming exterior and elegantly designed interior, promised a unique culinary experience from the moment I walked in. And I must say, it delivered beyond my expectations.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Tirupati, Andhra Pradesh, India, 517102" },
  { key: "phone", value: "Phone: 9676581878" },
  { key: "email", value: "Email: contact@restaurant.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
