import Head from "next/head";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Image,
    Input, Text,
    Textarea, useDisclosure
} from "@chakra-ui/react";
import styles from '/styles/Contact.module.scss';
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import InfoDialog from "../components/InfoDialog";
import axios from "axios";

export default function Contact() {
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset
        // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useForm();

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [isSubmitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState("");
    const [state, setState] = useState(false);

    const customClose = () => {
        setMessage("");
        setState(false);
        if (state) {
            reset();
            onClose();
        }
    }

    function onSubmit(values) {
        setSubmitting(true);
        axios.post("https://AsiaPacificAnalyticsClub.pythonanywhere.com/message", values)
            .then((response) => {
                setSubmitting(false);
                if (response.status == 201) {
                    setMessage("We have received your message! Please give us some time to process the message before" +
                        " we get back to you.");
                    setState(true);
                    onOpen();
                    reset();
                } else {
                    throw "Something went wrong!";
                }
            }).catch((e) => {
            setSubmitting(false);
            setMessage("Something went wrong, please try again shortly!");
            setState(false);
            onOpen();
        })
    }
    return (
        <>
            <Head>
                <title>Contact Us | APAC</title>
                <meta name="description" content="Drop us a message if you have any"/>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:title" content="Contact Us | APAC" />
                <meta property="og:description" content="Drop us a message if you have any" />
                <meta property="og:image" content="https://i.imgur.com/qsEF6vV.png"/>
                <meta property="twitter:title" content="Contact Us | APAC"/>
                <meta property="twitter:description" content="Drop us a message if you have any" />
                <meta property="twitter:card" content="summary_large_image"/>
            </Head>
            <div className={styles.wrapper}>
                <section>
                    <Flex flexWrap={"wrap-reverse"}>
                        <Box bg={'white'} flexBasis={{base: '100%', lg: '45%'}}>
                            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                                <Heading as={'h2'} textAlign={'center'} mb={'1.5rem'} >Get in Touch</Heading>
                                <FormControl my={'20px'} isInvalid={errors.name}>
                                    <FormLabel htmlFor='name'>Name<span className={styles.red}>*</span></FormLabel>
                                    <Input id='name' placeholder='Your Name' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='text'
                                           isInvalid={errors.name}
                                           {...register("name", {
                                               required: "This is required",
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl my={'20px'} isInvalid={errors.email}>
                                    <FormLabel htmlFor='email'>Email<span className={styles.red}>*</span></FormLabel>
                                    <Input id='email' placeholder='Your Email' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='email'
                                           isInvalid={errors.email}
                                           {...register("email", {
                                               required: "This is required",
                                               pattern: {
                                                   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                   message: "Invalid email address"
                                               }
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl my={'20px'} isInvalid={errors.subject}>
                                    <FormLabel htmlFor='subject'>Subject<span className={styles.red}>*</span></FormLabel>
                                    <Input id='subject' placeholder='Message Subject' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='subject'
                                           isInvalid={errors.subject}
                                           {...register("subject", {
                                               required: "This is required",
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.subject && errors.subject.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mb={'20px'} isInvalid={errors.message}>
                                    <FormLabel htmlFor='message'>Message<span className={styles.red}>*</span></FormLabel>
                                    <Textarea id='message' placeholder='Your message for us' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                              {...register("message", {
                                                  required: "This is required",
                                              })}/>
                                    <FormErrorMessage>
                                        {errors.message && errors.message.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Box w={'100%'} textAlign={'center'}>
                                    <Button mb={'30px'} colorScheme="accent" isLoading={isSubmitting} type="submit" _focus={{shadow: '0 0 2px 3px darkorange'}}>
                                        SEND NOW
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Flex flexBasis={{base: '100%', lg: '55%'}} flexDirection={'column'} align={'center'} >
                            <Heading as={'h1'}  fontSize={{base: '3rem', md: '5rem'}} letterSpacing={'4px'}
                                     textTransform={"uppercase"} mb={'0.5rem'}>Contact Us</Heading>
                            <Text mb={'1.5rem'} fontSize={'1.5rem'}>Have a question or a message for us?</Text>
                            <Image src={'/contact/contact.svg'} width={'80%'} alt={'Contact Us'}/>
                        </Flex>
                    </Flex>
                </section>
                <InfoDialog message={message} isOpen={isOpen} onClose={customClose} state={state}/>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}