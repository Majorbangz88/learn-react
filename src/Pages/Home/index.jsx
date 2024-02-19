import About from './About';
import Hero from './Hero';
import { ReputationSection } from './Reputation';
import Services from './Services';

export const Home = () => {
  return (
    <div>
        <Hero />,
        <ReputationSection/>,
        <About />,
        <Services />
    </div>
  )
}

// export default Home
