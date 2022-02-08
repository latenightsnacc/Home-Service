import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';

const Treasurer = () => {
    return(
        <div>
            <Navbar />
            <Banner position={"Treasurer"} />
            <Menu />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats  
                
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Treasurer;