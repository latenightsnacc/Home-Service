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
                link1={"../dashboard/treasurer"}
                link2={"../dashboard/treasurer/attendance"}
                link3={"../dashboard/treasurer/notes"}
                link4={"../dashboard/treasurer/reports"}
                link5={"../dashboard/treasurer/events"}
                navitem1={"Dashboard"}
                navitem2={"Monthly Dues"}
                navitem3={"Project"}
                navitem4={"Events"}
                navitem5={"Accounts"}
            />
            <div className="w-full md:w-5/6 md:mx-auto">
                <Spacer />
                <Stats  
                    totalFigure1={"N800,000.00"} totalTitle1={"Total"} 
                    totalFigure2={"N25,000.00"} totalTitle2={"Total Monthly Dues"} 
                    totalFigure3={"N120,000.00"} totalTitle3={"Total Project Dues"} 
                    totalFigure4={"N40,000.00"} totalTitle4={"Total Events "}
                />
                <Spacer />
            </div>
            <Footer />
        </div>
    )
}

export default Treasurer;