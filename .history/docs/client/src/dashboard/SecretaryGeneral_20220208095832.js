import Banner from '../components/Banner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Spacer from '../components/Spacer';
import Menu from '../components/Menu';
import Stats from '../components/Stats';

const SecretaryGeneral = () => {
    return(
        <div>
            <Navbar />
            <Banner />
            <Menu />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats 
                    totalFigure1={172} totalTitle1={"Total Members"} 
                    totalFigure2={172} totalTitle2={"Total Members"} 
                    totalFigure3={172} totalTitle3={"Total Members"} 
                    totalFigure4={172} totalTitle4={"Total Members"} 
                    />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default SecretaryGeneral;