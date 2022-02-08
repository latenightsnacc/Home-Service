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
                    totalFigure2={25} totalTitle2={"Total Members"} 
                    totalFigure3={5} totalTitle3={"Total Events"} 
                    totalFigure4={"N18,000.00"} totalTitle4={"Total Fees Collected"} 
                    />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default SecretaryGeneral;