import {useState, useEffect} from "react";
import Axios from "axios";

import Footer from "./components/Footer";
import Container from "./components/Container";
import Layout from "./components/Layout";

import MiniLayout from "./components/MiniLayout";
import Spacer from "./components/Spacer";

const Login = () => {
   
    return(
        <>
           <Layout>
               
               <Container>
                    <MiniLayout>
                        <div className="flex h-full flex-col items-center justify-center">
                            
                        </div>
                    
                    </MiniLayout>
               </Container>
            </Layout>
            <Footer />
        </>
    )
}

export default Login;