import {Box, Flex, Img, Spacer} from "@chakra-ui/react";
import variables from '/styles/variables.module.scss';
import {FaFacebookF} from "react-icons/fa";
import {AiFillLinkedin} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {RiInstagramFill} from 'react-icons/ri';
import styles from './styles/Footer.module.scss';

export default function Footer() {
    return (
        <Box bg={variables.smoke} px={{md: '8rem', base: '1rem'}} py={'1.5rem'}>
            <Flex alignItems={'center'} flexDirection={{base: 'column', md: 'row'}}>
                <Img src={'/logo.png'} h={'60px'} mb={{base:'20px', md: '0'}}/>
                <Box ml={{base: 0, md: '20px'}} mb={{base:'20px', md: '0'}}>© APAC 2022. All rights reserved.</Box>
                <Spacer/>
                <Flex>

                {socials.map(social => {
                    return (
                        <Box ml={'15px'} key={social.href}>
                            <a href={social.href}  target={'_blank'} rel={'noreferrer'}>
                                <LinkIcon>{social.icon}</LinkIcon>
                            </a>
                        </Box>
                    )
                })}
                </Flex>
            </Flex>
        </Box>
    )
}

function LinkIcon({children}) {
    return (
        <div className={styles['social-icon']}>
            {children}
        </div>
    )
}

const socials = [
    {
        icon: <FaFacebookF/>,
        href: "https://www.facebook.com/asiapacificanalyticsclub"
    },
    {
        icon: <RiInstagramFill/>,
        href: "https://www.instagram.com/apu.apac/"
    },
    {
        icon: <AiFillLinkedin/>,
        href: "https://www.linkedin.com/company/asia-pacific-analytics-club"
    },
    {
        icon: <MdEmail/>,
        href: "mailto:asiapacificanalyticsclub@gmail.com"
    }
]