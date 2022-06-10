import Head from "next/head";
import styles from "../styles/Events.module.scss";
import {Box, Button, Divider, Flex, Grid, Heading, Icon, Image, Link, Spacer, Text} from "@chakra-ui/react";
import events from "../data/Events";
import {ImCalendar} from "react-icons/im";

const ViewMoreBtn = (props) =>{
    if (props.link == null) {
        return null;
    }
    return (
        <Box textAlign={'center'} mt={'2rem'}>
            <Link href={props.link} target={'_blank'}>
                <Button colorScheme={'accent'} _focus={{shadow: '0 0 2px 3px darkorange'}}>Learn More</Button>
            </Link>
        </Box>
    )
}

export default function Events() {
    let years = Object.keys(events);
    years.sort((a, b) => b - a);
    return (
        <>
            <Head>
                <title>Events | APAC</title>
                <meta name="description" content="These are the events held by us in the past."/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Events | APAC" />
                <meta property="og:description" content="These are the events held by us in the past." />
                <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
                <meta property="twitter:title" content="Events | APAC"/>
                <meta property="twitter:description" content="These are the events held by us in the past." />
                <meta property="twitter:card" content="summary_large_image"/>
            </Head>
            <div className={styles.wrapper}>
                <section>
                    <Flex flexWrap={'wrap'}>
                        <Flex flexBasis={{lg: '60%', base: '100%'}} flexDirection={'column'} justify={'center'} align={'center'}>
                            <Heading as={'h1'}fontSize={{base: '3rem', md: '5rem'}} letterSpacing={'4px'}
                                     textTransform={"uppercase"} mb={'1rem'} textAlign={{base: 'center', md: 'left'}}>Our Events</Heading>
                            <Text fontSize={{base: '1.5rem', md: '2.5rem'}} mb={{base: '2rem', lg: 0}} textAlign={'center'}>The events that have been held by APAC</Text>
                        </Flex>
                        <Box flexBasis={{lg: '40%', base: '100%'}}>
                            <Image src={'/event/event.svg'} width={'80%'} mx={'auto'} alt={'Event SVG Picture'}/>
                        </Box>
                    </Flex>
                </section>
                <section className={styles.events}>
                    {
                        years.map((year, idx) => {
                            return (
                                <Box key={idx} py={"1rem"}>
                                    <Heading as={'h2'} textAlign={'center'} fontSize={'4rem'} mb={'1rem'}>{year}</Heading>
                                    <Grid templateColumns={{lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)', base: 'repeat(1, 1fr)'}} gap={"30px"} className={styles['event-rows']}>
                                        {
                                            events[year].map((event, idx) => {
                                                return (
                                                    <div data-aos={'fade-up'} key={idx}>
                                                        <Flex className={styles.eventCol} flexDirection={'column'}>
                                                            <Image src={event.img} fallbackSrc={event.lazy} alt={event.name} w={'100%'}/>
                                                            <Flex flexGrow={'1'} flexDirection={'column'}>
                                                                <Flex align={'center'} color={'gray.600'} fontSize={'0.8rem'}><Icon as={ImCalendar} mr={'5px'}/>{event.date}</Flex>
                                                                <Heading as={'h4'} fontSize={'1.4rem'} mt={'10px'}>{event.name}</Heading>
                                                                <Text mt={'8px'}>{event.description}</Text>
                                                                <Spacer/>
                                                                <ViewMoreBtn link={event.link}/>
                                                            </Flex>
                                                        </Flex>
                                                    </div>
                                                    )
                                            })
                                        }
                                    </Grid>
                                    <Divider my={'3.5rem'} w={'40%'} mx={'auto'} borderBottomWidth={'5px'}/>
                                </Box>
                            )
                        })
                    }
                </section>
            </div>
        </>
    )
}
