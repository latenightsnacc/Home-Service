import { Link } from "react-router-dom";
import Logo from '../logo.png';
import Container from "./Container";
import Layout from "./Layout";

const Navbar = () => {

    return (
        <header className="shadow-sm bg-white sticky top-0 z-50 py-2">
            <Layout>
                <Container></Container>
            </Layout>
            <div className="container">
                
            </div>
    </header>
    )
}

export default Navbar;