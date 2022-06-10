import {
    Box,
    Button,
    Divider,
    Flex, Icon,
    Image,
    Spacer,
    useDisclosure
} from "@chakra-ui/react";
import styles from './styles/navbar.module.scss';
import {useEffect, useState} from "react";
import Link from "next/link";
import NiceLink from "./NiceLink";
import {useRouter} from "next/router";
import variables from '../styles/variables.module.scss';
import RegisterDialog from "./RegisterDialog";
import {TiArrowUpThick} from "react-icons/ti";
import event from "../data/ActiveEvent";

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
                {links.map(link => link.name == "" ? "" : <Link href={link.href} key={link.href} scroll={false}>
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
    useEffect(() => {
       props.setDrowDown(open)
    }, [open]);
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
                {links.map(link =>  {return link.name == "" ? "" : (
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
    const [dropDown, setDropDown] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();

    const [scrollProgress, setScrollProgress] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const onScroll = () => {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            setOffset(window.scrollY);
            setScrollProgress(scrolled);
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
        <>
            <nav>
                <DesktopNav router={router} offset={offset} openRegister={onOpen}/>
                <MobileNav router={router} offset={offset} openRegister={onOpen} setDrowDown={setDropDown}/>
                <RegisterDialog onOpen={onOpen} onClose={onClose} isOpen={isOpen}/>
                <Box h={'2px'} w={`${scrollProgress}%`} bg={variables.primary}
                     top={'78px'} position={'fixed'} transition={'width 100ms linear'}
                     zIndex={11} display={`${dropDown ? 'none' : 'block'}`}/>
            </nav>
            <Box position={'fixed'} right={{base: '10px', md: '20px'}} bottom={{base: '10px', md: '20px'}} zIndex={9}>
                <Flex fontSize={'24px'} color={'white'} className={`${styles.goUp} ${scrollProgress > 1 ? styles.show : ''}`}
                     bg={variables.secondary} zIndex={'-1'} borderRadius={'50%'} _hover={{bg: variables.dark}}
                    w={'40px'} h={'40px'} justify={'center'} align={'center'}
                      onClick={goTop} cursor={'pointer'}>
                    <Icon as={TiArrowUpThick}/>
                </Flex>
            </Box>
        </>

    )
}

const links = [
    {name: "Home", href: "/"},
    {name: "Events", href: "/events"},
    {name: event.active ? event.name : "", href: "/event"},
    {name: "About", href: "/about"},
    {name: "Contact Us", href: "/contact"},
]