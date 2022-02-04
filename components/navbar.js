import {Box, Button, Divider, Flex, Image, Spacer, useDisclosure} from "@chakra-ui/react";
import styles from './styles/navbar.module.scss';
import {useEffect, useState} from "react";
import Link from "next/link";
import NiceLink from "./NiceLink";
import {useRouter} from "next/router";
import variables from '../styles/variables.module.scss';
import RegisterDialog from "./RegisterDialog";

const DesktopNav = props => {
    return (
        <Box w='100%' bg={'white'} h={'80px'} pos={'fixed'} display={{ base: 'none', lg: 'block' }}
             className={`${styles.navbar} ${props.offset > 10 ? styles.shadow : ''}`}>
            <Flex align={'center'} h={'100%'} px={'40px'}>
                <Link href={"/"} scroll={false}>
                    <a>
                        <Image src={"/logo.png"} height={'50px'} alt={'APAC Icon'}/>
                    </a>
                </Link>
                {links.map(link => <Link href={link.href} key={link.href} scroll={false}>
                    <a className={`${styles['navbar-link']} ${props.router.pathname == link.href ? styles.active : ""}`}>
                        <NiceLink>{link.name}</NiceLink>
                    </a>
                </Link>)}
                <Spacer/>
                <Button className={styles['reg-btn']} colorScheme={'primary'} color={'white'} onClick={props.openRegister}>JOIN US NOW</Button>
            </Flex>
        </Box>
    )
}

const MobileNav = props => {
    const [open, setOpen] = useState(false);
    return (
        <Box w={'100%'} bg={'white'} h={open ? '100%' : '80px'} pos={'fixed'} display={{ base: 'block', lg: 'none' }}
             className={`${styles.navbar} ${props.offset > 10 ? styles.shadow : ''}`}>
            <Flex align={'center'} h={'80px'} px={'20px'} w={'100%'}>

                <Image src={"/logo.png"} height={'45px'} alt={'APAC Icon'}/>
                <Spacer/>
                <Button className={styles['reg-btn']} colorScheme={'primary'} color={'white'} onClick={props.openRegister}>JOIN US</Button>
                <Box onClick={() => setOpen(!open)} w={'30px'} h={'30px'} className={styles['nav-btn-wrapper']}>
                    <div className={`${styles['nav-btn']} ${open ? styles['open'] : ""}`}/>
                </Box>
            </Flex>
            <Box className={`${styles.dropdown} ${open ? styles.opening : ''}`} flexDirection={'column'} alignItems={'center'}>
                {links.map(link =>  {return (
                    <Flex key={link.href} justify={'center'} alignItems={"center"} flexDirection={'column'}>
                        <div className={styles['navbar-link-wrapper']}>
                            <Link href={link.href} key={link.href} scroll={false}>
                                <a className={`${styles['navbar-link']} ${props.router.pathname == link.href ? styles.active : ""}`} onClick={() => setOpen(!open)}>
                                    <NiceLink>{link.name}</NiceLink>
                                </a>
                            </Link>
                        </div>
                        <Divider my={'20px'} w={'40px'} borderBottomWidth={'5px'} borderBottomColor={variables.primary}/>
                    </Flex>)
                })}
            </Box>
        </Box>
    )
}

export default function Navbar() {
    const [offset, setOffset] = useState(0);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const router = useRouter();

    useEffect(() => {
        const onScroll = () => {
            setOffset(window.scrollY);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav>
            <DesktopNav router={router} offset={offset} openRegister={onOpen}/>
            <MobileNav router={router} offset={offset} openRegister={onOpen}/>
            <RegisterDialog onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
        </nav>
    )
}

const links = [
    {name: "Home", href: "/"},
    {name: "Events", href: "/events"},
    {name: "About", href: "/about"},
    {name: "Contact Us", href: "/contact"},
]