import Hero from "../components/Hero";
import Special from "../components/Special";
import jamb from "../images/specials/Jambalaya-IMAGE-3.jpg";
import lamb from "../images/specials/Barbacoa-Lamb-Chops_Featured.jpg";
import fish from "../images/specials/chargrilled-fish-with-green-chilli-coriander-and-coconut-relish-70446-1.jpeg";
import Testimonials from "../components/Testimonials";

const data = [
  {
    name: "Jambalaya",
    price: "$12.99",
    image: jamb,
    description: "Shrimp, sausage, scallions, rice, and tomatoe sauce with lemon and garlic.",
  },
  {
    name: "Grilled White Fish",
    price: "$11.99",
    image: fish,
    description: "Grilled white fish imported daily. Selection changes weekly.",
  },
  {
    name: "Citrus Seared Lamb",
    price: "$14.99",
    image: lamb,
    description: "A new spin on a timeless classic. (Fri-Sat Only)",
  },
];

const Home = () => {
  return (
    <>
      <Hero />
      <Special data={data} />
      <Testimonials />
    </>
  );
};

export default Home;
