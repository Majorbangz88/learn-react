import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from "./Footer"; 

export const Home = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

// export default Home
