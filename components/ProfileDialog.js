import {
    Box,
    Flex, Heading, Icon, Image, Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay, Spacer, Text,
} from "@chakra-ui/react";
import React from "react";
import {AiFillCloseCircle, AiFillFacebook, AiFillInstagram, AiOutlineGithub, AiOutlineMail} from "react-icons/ai";
import styles from './styles/ProfileDialog.module.scss';
import committees from "../data/Committees";
import {MdAlternateEmail, MdEmail} from "react-icons/md";
import NiceLink from "./NiceLink";
import {BsLinkedin} from "react-icons/bs";
import {FaGlobe} from "react-icons/fa";
import variables from '/styles/variables.module.scss';

export default function ProfileDialog(props) {
    let committee = getCommittee(props.name);
    return (
        <>
            <Modal
                onClose={props.onClose}
                isOpen={props.isOpen}
            >
                <ModalOverlay />
                <ModalContent position={'relative'} maxW={{lg: "800px", md: "600px", base: '300px'}}>
                    <div className={styles['close-btn']} onClick={props.onClose}>
                        <AiFillCloseCircle/>
                    </div>
                    <ModalBody>
                        <Flex w={'100%'} py={{md: '30px', base: '15px'}} px={{md: '20px', base: '10px'}} flexWrap={"wrap"}>
                            <Box flexBasis={{md: '50%', base: '100%'}}>
                                <Image src={committee.img} width={'100%'} alt={committee.name} boxShadow={'0 0 4px 1px dimgray'} rounded={'5px'}/>
                            </Box>
                            <Flex flexBasis={{md: '50%', base: '100%'}} pl={{md: '40px', base: "0"}} flexDirection={'column'} pr={{md: '30px', base: "0"}}>
                                <Heading as={'h2'} mt={{md: '0', base: '5px'}}>{committee.fullname ?? committee.name}</Heading>
                                <Text fontSize={'1.4rem'} color={'gray.600'}>{committee.position}</Text>
                                <Box mt={'30px'} fontSize={'1.1rem'} dangerouslySetInnerHTML={{__html: committee.description ?? ''}}/>
                                <Spacer/>
                                <Flex direction={'column'} mt={'30px'}>
                                    <Flex align={'center'}>
                                        <Icon as={MdEmail} mr={'5px'} color={variables['deep-blue']}/>
                                        <Link _focus={'none'} href={'mailto:' + committee.email} target={'_blank'}><NiceLink>{committee.email}</NiceLink></Link>
                                    </Flex>
                                    {
                                        socials.map(social => {
                                            if (social.name in committee) {
                                                return (
                                                    <Flex align={'center'} key={social.name} mt={'6px'}>
                                                        <Icon as={social.icon} mr={'5px'} color={variables['deep-blue']}/>
                                                        <Link href={committee[social.name].href} target={'_blank'}><NiceLink>{committee[social.name].name}</NiceLink></Link>
                                                    </Flex>
                                                )
                                            }
                                        })
                                    }
                                </Flex>
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

function getCommittee(name) {
    for (let committee of committees) {
        if (committee.name == name) {
            return committee;
        }
    }
}

const socials = [
    {name: "linkedin", icon: BsLinkedin},
    {name: "facebook", icon: AiFillFacebook},
    {name: "instagram", icon: AiFillInstagram},
    {name: "website", icon: FaGlobe},
    {name: "github", icon: AiOutlineGithub}
];