import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Featured from '../Components/Featured/Featured';
import ChooseUs from '../Components/ChooseUs/ChooseUs';
import Trainers from '../Components/Trainers/Trainers';
import Testimonials from '../Components/Testimonials/Testimonials';
import BmiCalc from '../Components/BMI/BmiCalc';
import Pricing from '../Components/Pricing/Pricing';
import Blog from '../Components/Blog/Blog';
import CtaBanner from '../Components/CtaBanner/CtaBanner';
import Footer from '../Components/Footer/Footer';




const Home = () => {
  return (
    <>
   
    <Hero/>
    <About/>
    <Featured/>
    <ChooseUs/>
    <Trainers/>
    <Testimonials/>
    <BmiCalc/>
    <Pricing/>
    <Blog/>
    <CtaBanner/>
    <Footer/>
    </>
  )
}

export default Home;