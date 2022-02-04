import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Box, Flex, Grid, GridItem, Heading} from "@chakra-ui/react";
import Link from "next/link";
import ArrowLink from "../components/ArrowLink";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home Page | APAC</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section id={styles['section1']}>
                <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"60px"}>
                    <GridItem>
                        <img src={'/homepage/analysis.svg'} width={'100%'} alt={'Analysis Picture'}/>
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
                <Heading as={'h2'} className={styles['section-title']}><span className={styles.num}>01</span>Who are we</Heading>
                <div className={styles['section-content']}>
                    <Grid templateColumns='repeat(auto-fit, minmax(min(450px, 100%), 1fr))' gap={"30px"}>
                        <GridItem>
                            <Flex align={'flex-start'} h={'100%'} flexDirection={'column'} justify={'center'}>
                                <Box mb={'30px'}>Asia Pacific Analytics Club (APAC) is a Data Science-focused club in APU.
                                </Box>
                                <Box mb={'30px'}>
                                    We strive to bring exposure and increase student engagement on data science-related knowledge.
                                </Box>
                                <Box fontSize={"1.4rem"}>
                                    <Link href={"/about"} scroll={false}>
                                        <a><ArrowLink>Learn more about us</ArrowLink></a>
                                    </Link>
                                </Box>
                            </Flex>
                        </GridItem>
                        <GridItem>
                            <img src={'/homepage/section2.svg'} width={'100%'} alt={'Analysis Picture'}/>
                        </GridItem>
                    </Grid>
                </div>
            </section>
            <section id={styles['section3']}>
                <Heading as={'h2'} className={styles['section-title']}><span className={styles.num}>02</span>Our Events</Heading>
                <div className={styles['section-content']}>

                </div>
            </section>
            <section id={styles['section4']}>
                <Heading as={'h2'} className={styles['section-title']}><span className={styles.num}>03</span>Our Story</Heading>
                <div className={styles['section-content']}>

                </div>
            </section>
        </div>
    )
}
