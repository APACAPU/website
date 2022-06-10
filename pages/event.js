import Head from "next/head";
import event from "../data/ActiveEvent";
import style from '../styles/Event.module.scss';
import {Box, Button, Divider, Flex, Heading, Icon, Image, Link, Text} from "@chakra-ui/react";
import {FcCalendar, FcClock, FcDepartment} from "react-icons/fc";
import {BsLinkedin} from "react-icons/bs";
import SocialMediaPosts from "../components/SocialMediaPosts";
import Error from "./404";

function SocialMediaSection() {
    if (event.posts.length != 0) {
        return (
            <Box as={'section'} bg={event.colors.fourth}>
                <Heading as={'h2'} fontSize={{base: '2rem', md: '3rem'}} textAlign={"center"} mb={'1.5rem'}>
                    Social Media Posts
                </Heading>
                <SocialMediaPosts posts={event.posts}/>
            </Box>
        )
    }
}

export default function Event() {
    if (!event.active) {
        return (<Error text={"No Active Event Found"}/>)
    }
    return (
        <>
            <Head>
                <title>{event.name} | APAC</title>
                <meta name="description" content={event.shortDescription}/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content={`${event.name} | APAC`} />
                <meta property="og:description" content={event.shortDescription} />
                <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
                <meta property="twitter:title" content={`${event.name} | APAC`}/>
                <meta property="twitter:description" content={event.shortDescription} />
                <meta property="twitter:card" content="summary_large_image"/>
            </Head>
            <div className={style.wrapper}>
                <Box as={'section'} bg={event.colors.first}>
                    <Heading as={'h1'} fontSize={{base: '2.5rem', md: '3.5rem'}} textAlign={'center'} maxW={'30ch'} mx={'auto'}>
                        {event.fullName == "" ? event.name : event.fullName}
                    </Heading>
                    <Text mt={'2rem'} mb={'1.5rem'} fontSize={{md: '1.5rem', base: '1.2rem'}} color={'gray.600'} textAlign={'center'}>
                        {event.shortDescription}
                    </Text>
                    <Link href={event.registrationLink} target={"_blank"}>
                        <Box textAlign={'center'} mb={'2rem'}>
                            <Button colorScheme={'primary'}>Register Now</Button>
                        </Box>
                    </Link>
                    <Image w={'100%'} src={'/active-event/event.svg'} alt={'Hero Image'}/>
                </Box>
                <Box as={'section'} bg={event.colors.second}>
                    <Heading as={'h2'} fontSize={{base: '2rem', md: '3rem'}} textAlign={"center"}>
                        Details
                    </Heading>
                    <Text dangerouslySetInnerHTML={{__html: event.fullDescription}}
                          textAlign={{md: "center", base: 'left'}} fontSize={{md: '1.5rem', base: '1.1rem'}}
                          my={{md: '1rem', base: '0.5rem'}} color={'gray.600'}/>
                    <Box className={style.detailsTable}>
                        <Box textAlign={'center'}>
                            <Icon as={FcCalendar} fontSize={'4rem'}/>
                            <Heading as={'h4'}>
                                Date
                            </Heading>
                            <Text>
                                {event.details.date}
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Icon as={FcClock} fontSize={'4rem'}/>
                            <Heading as={'h4'}>
                                Time
                            </Heading>
                            <Text>
                                {event.details.time}
                            </Text>
                        </Box>
                        <Box textAlign={'center'}>
                            <Icon as={FcDepartment} fontSize={'4rem'}/>
                            <Heading as={'h4'}>
                                Venue
                            </Heading>
                            <Text>
                                {event.details.venue}
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box as={'section'} bg={event.colors.third}>
                    <Heading as={'h2'} fontSize={{base: '2rem', md: '3rem'}} textAlign={"center"}>
                        {event.invitedTitle}
                    </Heading>
                    <Text dangerouslySetInnerHTML={{__html: event.invitedDescription}}
                          textAlign={{md: "center", base: 'left'}} fontSize={{md: '1.5rem', base: '1.1rem'}}
                          my={{md: '1rem', base: '0.5rem'}} color={'gray.600'}/>
                    <Flex flexDirection={"row"} flexWrap={'wrap'} justify={'center'}>
                        {event.speakers.map(speaker => {
                            return (
                                <Box key={speaker.name} flexBasis={{lg: '25%', md: "50%", base: '100%'}} px={'30px'} mb={'30px'}>
                                    <Box px={'2.5%'}>
                                        <Image src={speaker.pic} alt={speaker.name} mx={'auto'}/>
                                    </Box>
                                    <Box bg={'#0001'} p={'16px'} fontSize={'1.1rem'} borderRadius={'6px'}>
                                        {speaker.linkedin != null ?
                                            <Heading as={'h4'} textAlign={'center'} mb={'4px'}>
                                                <Link href={speaker.linkedin} target={"_blank"} _focus={{boxShadow: "none"}}>
                                                    <span className={style.link}>{speaker.name}<Icon as={BsLinkedin} ml={'6px'} fontSize={'1.6rem'}/></span>
                                                </Link>
                                            </Heading> :
                                            <Heading as={'h4'} textAlign={'center'} mb={'4px'}>{speaker.name}</Heading>
                                        }

                                        <Text fontSize={'1rem'}>{speaker.description}</Text>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Flex>
                </Box>
                <SocialMediaSection/>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}
