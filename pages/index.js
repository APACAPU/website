import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Box, Flex, Grid, GridItem, Heading, Image} from "@chakra-ui/react";
import Link from "next/link";
import ArrowLink from "../components/ArrowLink";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Page | APAC</title>
                <meta name="description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science."/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Home Page | APAC" />
                <meta property="og:description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science." />
                <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
                <meta property="twitter:title" content="Home Page | APAC"/>
                <meta property="twitter:description" content="APAC - We are an analytics club aiming to bring more exposure to APU students about Data Science." />
                <meta property="twitter:card" content="summary_large_image"/>
            </Head>
            <section id={styles['section1']}>
                <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"60px"}>
                    <GridItem>
                        <Image src={'/homepage/analysis.svg'} width={'100%'} alt={'Analysis Picture'}/>
                    </GridItem>
                    <GridItem>
                        <Flex align={'center'} h={'100%'}>
                            <Heading as={'h1'} fontSize={{base: '3rem', md: '5rem'}} letterSpacing={'4px'}
                                     textTransform={"uppercase"} textAlign={{base: 'center', md: 'left'}}>
                                Asia Pacific Analytics Club
                            </Heading>
                        </Flex>
                    </GridItem>
                </Grid>
            </section>
            <section id={styles['section2']}>
                <Heading as={'h2'} className={styles['section-title']} data-aos={'fade-right'}><span className={styles.num}>01</span>Who are we</Heading>
                <div className={styles['section-content']}>
                    <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"30px"}>
                        <GridItem gridRow={{lg: 1, base: 2}}>
                            <Flex align={'flex-start'} h={'100%'} flexDirection={'column'} justify={'center'}>
                                <Box mb={'30px'} data-aos={'fade-right'} data-aos-delay={'150'}>Asia Pacific Analytics Club (APAC) is a Data Science-focused club in APU.
                                </Box>
                                <Box mb={'30px'} data-aos={'fade-right'} data-aos-delay={'300'}>
                                    We strive to bring exposure and increase student engagement on data science-related knowledge.
                                </Box>
                                <Box fontSize={"1.4rem"} data-aos={'fade-right'} data-aos-delay={'450'}>
                                    <Link href={"/about"} scroll={false}>
                                        <a><ArrowLink>Learn more about us</ArrowLink></a>
                                    </Link>
                                </Box>
                            </Flex>
                        </GridItem>
                        <GridItem gridRow={1}>
                            <img src={'/homepage/section2.svg'} width={'100%'} alt={'Analysis Picture'} data-aos={'fade-left'}/>
                        </GridItem>
                    </Grid>
                </div>
            </section>
            <section id={styles['section3']}>
                <Heading as={'h2'} className={styles['section-title']} data-aos={'fade-right'}><span className={styles.num}>02</span>Our Events</Heading>
                <div className={styles['section-content']}>
                    <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"30px"}>
                        <GridItem>
                            <img src={'/homepage/section3.svg'} width={'100%'} alt={'Analysis Picture'} data-aos={'fade-right'}/>
                        </GridItem>
                        <GridItem>
                            <Flex align={'flex-start'} h={'100%'} flexDirection={'column'} justify={'center'}>
                                <Box mb={'30px'} data-aos={'fade-left'} data-aos-delay={'150'}>We have held many data analytics themed events in the past.
                                </Box>
                                <Box mb={'30px'} data-aos={'fade-left'} data-aos-delay={'300'}>
                                    This includes workshops, competitions, panel discussions, and more!
                                </Box>
                                <Box fontSize={"1.4rem"} data-aos={'fade-left'} data-aos-delay={'450'}>
                                    <Link href={"/events"} scroll={false}>
                                        <a><ArrowLink>Check them out here</ArrowLink></a>
                                    </Link>
                                </Box>
                            </Flex>
                        </GridItem>
                    </Grid>
                </div>
            </section>
            <section id={styles['section4']}>
                <Heading as={'h2'} className={styles['section-title']} data-aos={'fade-right'}><span className={styles.num}>03</span>Our Story</Heading>
                <div className={styles['section-content']}>
                    <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"30px"}>
                        <GridItem gridRow={{lg: 1, base: 2}}>
                            <Flex align={'flex-start'} h={'100%'} flexDirection={'column'} justify={'center'}>
                                <Box mb={'30px'} data-aos={'fade-right'} data-aos-delay={'150'}>
                                    Started small with only a few committees, we have soon grown much bigger with
                                    over hundreds of members now.
                                </Box>
                                <Box mb={'30px'} data-aos={'fade-right'} data-aos-delay={'300'}>
                                    We will continue to work hard to bring more exciting events to APU students!
                                </Box>
                            </Flex>
                        </GridItem>
                        <GridItem gridRow={1}>
                            <img src={'/homepage/section4.svg'} width={'100%'} alt={'Analysis Picture'} data-aos={'fade-left'}/>
                        </GridItem>
                    </Grid>
                </div>
            </section>
        </div>
    )
}