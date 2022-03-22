import styles from '/styles/About.module.scss';
import advisors from '/data/Advisors'
import Head from "next/head";
import {
    Box,
    Divider,
    Flex,
    Heading,
    Icon,
    Image,
    Link,
    Spacer,
    Text,
    useDisclosure
} from "@chakra-ui/react";
import NiceLink from "../components/NiceLink";
import {MdOutlineEmail} from "react-icons/md";
import committees from "/data/Committees";
import {BsArrowRight} from "react-icons/bs";
import ProfileDialog from "../components/ProfileDialog";
import {useState} from "react";
import testimonials from "/data/expresident";

committees.sort((a, b) => {
    return a.seq - b.seq | a.position.localeCompare(b.position) | a.name.localeCompare(b.name);
});

export default function About() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [selectedCommittee, setCommittee] = useState(committees[0]);
    return (
        <div className={styles.wrapper}>
            <Head>
                <title>About Us | APAC</title>
                <meta name="description" content="About APAC, who are we?"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="About Us | APAC" />
                <meta property="og:description" content="About APAC, who are we?" />
                <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
                <meta property="twitter:title" content="About Us | APAC"/>
                <meta property="twitter:description" content="About APAC, who are we?" />
                <meta property="twitter:card" content="summary_large_image"/>
            </Head>
            <div>
                <section id={styles['section1']}>
                    <Heading as={'h1'} fontSize={{base: '3rem', md: '5rem'}} letterSpacing={'4px'}
                             textTransform={"uppercase"} textAlign={'center'} mb={'2rem'}>About Our Club</Heading>
                    <Image src="/about/club.svg" alt="Club SVG Picture" width={{md: '70vw', base: '85vw'}} mx={'auto'}/>
                </section>
                <section id={styles['section2']}>
                    <Box>
                        <Flex flexWrap={'wrap'}>
                            <Box className={styles.half}>
                                <Heading as={'h2'}>Mission</Heading>
                                <Text className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus architecto at consectetur doloribus eveniet, excepturi iure
                                    necessitatibus, perferendis, perspiciatis porro sed ullam vero. A odio perspiciatis
                                    quibusdam repudiandae sequi? Iste?</Text>
                            </Box>
                            <Box className={styles.half} flexBasis={'50%'}>
                                <Heading as={'h2'}>Vision</Heading>
                                <Text className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusamus architecto at consectetur doloribus eveniet, excepturi iure
                                    necessitatibus, perferendis, perspiciatis porro sed ullam vero. A odio perspiciatis
                                    quibusdam repudiandae sequi? Iste?</Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Box textAlign={'center'} className={styles['quote-wrapper']} mt={'4rem'}>
                        <blockquote className={styles.blockquote}>
                            <p>
                                Established in 2019 aiming
                                to create a data science community among APU students.
                            </p>
                            <br/>
                            <span className={styles.founders}>Founders</span>
                        </blockquote>
                    </Box>
                </section>
                <section id={styles['section3']}>
                    <Heading as={'h2'}>Club Advisors</Heading>
                    <Flex justify={'space-evenly'} mt={'3rem'} px={{md: '5rem', base: '0'}}
                          flexDirection={{base: 'column', md: 'row'}}>
                        {advisors.map(advisor => {
                            return (
                                <Flex flexDirection={'column'} key={advisor.email} align={'center'}
                                      mb={{base: '50px', md: 0}}>
                                    <Image fallbackSrc={advisor.lazy}
                                           src={advisor.img} alt={advisor.name} height={'250px'}
                                           rounded={'50%'} width={'250px'}
                                           boxShadow={'0 0 6px 1px gray'}/>
                                    <Heading as={'h3'} mt={'25px'} textAlign={'center'} fontSize={'1.5rem'}>
                                        {advisor.name}
                                    </Heading>
                                    <Flex alignItems={'center'} mt={'5px'}>
                                        <Icon as={MdOutlineEmail} mr={'10px'} verticalAlign={'center'}/>
                                        <Link href={`mailto:${advisor.email}`} display={'inline'}>
                                            <NiceLink>
                                                {advisor.email}
                                            </NiceLink>
                                        </Link>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </Flex>
                </section>
                <Divider w={{base: '200px', md: '500px'}} mx={'auto'} borderBottomWidth={'5px'}/>
                <section id={styles['section4']}>
                    <Heading as={'h2'}>Our Team</Heading>
                    <Flex flexWrap={'wrap'} justify={'center'} className={styles['card-wrapper']}>
                        {
                            committees.map(person => {
                                return (
                                    <Flex flexDirection={'column'} mb={{base: '50px', md: '30px'}}
                                          className={styles.cards} key={person.name} onClick={
                                        () => {
                                            setCommittee(person);
                                            onOpen();
                                        }
                                    }>
                                        <Box position={'relative'}>
                                            <Image fallbackSrc={person.lazy}
                                                   src={person.img} alt={person.name} height={'220px'}
                                                   width={'220px'} className={styles.image} objectFit={"cover"}/>
                                            <div className={styles.arrow}><BsArrowRight/></div>
                                        </Box>
                                        <Heading as={'h3'} fontSize={'1.5rem'} w={'100%'}>
                                            {person.name}
                                        </Heading>
                                        <Spacer/>
                                        <Flex alignItems={'center'} mt={'5px'}>
                                            <Text color={'gray.500'}>{person.position}</Text>
                                        </Flex>
                                    </Flex>
                                )
                            })
                        }
                    </Flex>
                </section>
            </div>
            <section id={styles['section5']}>
                <Heading as={'h2'}>Ex-Presidents&apos; Testimonials</Heading>
                <Flex flexWrap={'wrap'} justify={'center'} className={styles['card-wrapper']}>
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <Flex key={idx} className={styles.card} flexDirection={'column'}>
                                <Text>
                                    {testimonial.text}
                                </Text>
                                <Spacer/>
                                <Flex flexDirection={'row'} mt={'14px'}>
                                    <Image src={testimonial.pic} flexBasis={'33%'} flexGrow={0} alt={testimonial.name} w={'45%'} rounded={'50%'}/>
                                    <Flex w={'55%'} pl={'8px'} flexDirection={'column'} justify={'center'}>
                                        <Text fontWeight={'bold'}>{testimonial.name}</Text>
                                        <Text color={'gray.600'} fontSize={'0.8rem'}>{testimonial.date}</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                            )
                    })}
                </Flex>
            </section>
            <iframe src="https://discord.com/widget?id=862713178717814815&theme=dark" width="350" height="500"/>
            <ProfileDialog isOpen={isOpen} onClose={onClose} name={selectedCommittee.name}/>
        </div>
    )
}

