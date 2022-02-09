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
            <Menu 
                textClr1={"text-green-500"}
                textClr2={"text-gray-50"}
                textClr3={"text-gray-50"}
                textClr4={"text-gray-50"}
                textClr5={"text-gray-50"}
                link1={"../dashboard/treasurer"}
                link2={"../dashboard/treasurer/monthlydues"}
                link3={"../dashboard/treasurer/project"}
                link4={"../dashboard/treasurer/events"}
                link5={"../dashboard/treasurer/account"}
                navitem1={"Dashboard"}
                navitem2={"Monthly Dues"}
                navitem3={"Project"}
                navitem4={"Events"}
                navitem5={"Account"}
            />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats  
                    totalFigure1={"₦800,000.00"} totalTitle1={"Total"} 
                    totalFigure2={"₦25,000.00"} totalTitle2={"Total Monthly Dues"} 
                    totalFigure3={"₦120,000.00"} totalTitle3={"Total Project Dues"} 
                    totalFigure4={"₦40,000.00"} totalTitle4={"Total Events "}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Treasurer;