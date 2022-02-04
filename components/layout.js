import Navbar from './navbar'
import Footer from "./Footer";
import {useEffect, useState} from "react";
import styles from './styles/layout.module.scss';

export default function Layout({ children }) {
    const [pageChanging, setPageChanging] = useState(false);
    const [displayChildren, setDisplayChildren] = useState(children);

    useEffect(() => {
        if (children !== displayChildren) setPageChanging(true);
    }, [children, setDisplayChildren, displayChildren]);

    return (
        <>
            <Navbar />
            <div className={`${styles.wrapper} ${pageChanging ? styles.changing : ''}`}
                 onTransitionEnd={() => {
                     if (pageChanging) {
                         setDisplayChildren(children);
                         document.body.scrollTop = 0; // For Safari
                         document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                         setTimeout(() => {
                             setPageChanging(false);
                         }, 50);

                     }
                 }}>
                <main>{displayChildren}</main>
                <Footer/>
            </div>
        </>
    )
}