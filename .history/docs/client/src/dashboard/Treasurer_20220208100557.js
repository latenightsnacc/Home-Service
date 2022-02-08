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
                    totalFigure1={"N800,000.00"} totalTitle1={"Total"} 
                    totalFigure2={"N,000.00"} totalTitle2={"Total Monthly Dues"} 
                    totalFigure3={"N18,000.00"} totalTitle3={"Total Project Dues"} 
                    totalFigure4={"N18,000.00"} totalTitle4={"Total Events "}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Treasurer;