import About from './About';
import Enquiries from './Enquiries';
import Hero from './Hero';
import Projects from './Project';
import { ReputationSection } from './Reputation';
import Services from './Services';

export const Home = () => {
  return (
    <div>
        <Hero />,
        <ReputationSection/>,
        <About />,
        <Services />
        <Projects />
        <Enquiries/>,
    </div>
  )
}

// export default Home
