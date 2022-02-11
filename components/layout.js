import Navbar from './navbar'
import Footer from "./Footer";
import {AnimatePresence, motion, usePresence} from 'framer-motion';
import {useRouter} from "next/router";

export default function Layout({ children }) {
    const router = useRouter();

    const scrollTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <>
            <Navbar />
            <AnimatePresence onExitComplete={scrollTop}>
                <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
                    pageInitial: {
                        opacity: 0,
                    },
                    pageAnimate: {
                        opacity: 1,
                    },
                    pageExit: {
                        opacity: 0,
                    }
                }}>
                    <main>{children}</main>
                    <Footer/>
                </motion.div>
            </AnimatePresence>
        </>
    )
}