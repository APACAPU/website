import {
    Box,
    FormControl, FormHelperText, FormLabel,
    Heading, Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Textarea,
    Text, FormErrorMessage, Button, useDisclosure
} from "@chakra-ui/react";
import styles from "./styles/RegisterDialog.module.scss";
import {AiFillCloseCircle} from "react-icons/ai";
import {useForm} from "react-hook-form";
import axios from "axios";
import InfoDialog from "./InfoDialog";
import {useState} from "react";

export default function RegisterDialog(props) {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
        reset
    } = useForm();

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [message, setMessage] = useState("");
    const [state, setState] = useState(false);


    function onSubmit(values) {
        console.log(values);
        axios.post("https://AsiaPacificAnalyticsClub.pythonanywhere.com/register", values, {
            headers: {
                'Content-Type': 'text/plain',
            }
        })
            .then((response) => {
                if (response.status == 201) {
                    setMessage("Registered successfully! Please wait while we process your request, and we will " +
                        "send an email to notify you shortly.");
                    setState(true);
                    onOpen();
                    reset();
                } else {
                    throw "Something went wrong!";
                }
            }).catch((e) => {
            setMessage("Something went wrong, please try again shortly!");
            setState(false);
            onOpen();
        });
    }

    const customClose = () => {
        onClose();
        setMessage("");
        if (state) {
            reset();
            props.onClose();
        }

    }

    return (
        <>
            <Modal
                onClose={props.onClose}
                isOpen={props.isOpen}
            >
                <ModalOverlay/>
                <ModalContent position={'relative'} maxW={{lg: "600px", md: "500px", base: '320px'}}>
                    <div className={styles['close-btn']} onClick={props.onClose}>
                        <AiFillCloseCircle/>
                    </div>
                    <ModalHeader className={styles['top-part']} py={'30px'}>
                        <Heading as={'h3'}>APAC Member Registration</Heading>
                        <Text fontWeight={'normal'} mt={'10px'} color={'gray.100'}>Join APAC for member-exclusive events!</Text>
                    </ModalHeader>
                    <ModalBody display={'flex'} justifyContent={'center'}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Box w={{base: '280px', md: '400px'}}>
                                <Text fontWeight={'bold'} color={'salmon'}>Note: Only APU students can register!</Text>
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
                                <FormControl mb={'20px'} isInvalid={errors.name}>
                                    <FormLabel htmlFor='fullname'>Full Name<span className={styles.red}>*</span></FormLabel>
                                    <Input id='fullname' placeholder='Your Name' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='text'
                                           {...register("name", {
                                               required: "This is required",
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.name && errors.name.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mb={'20px'} isInvalid={errors.tp}>
                                    <FormLabel htmlFor='tp'>TP Number<span className={styles.red}>*</span></FormLabel>
                                    <Input id='tp' placeholder='Your TP Number' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='text'
                                           {...register("tp", {
                                               required: "This is required",
                                               pattern: {
                                                   value: /^TP\d{6}$/i,
                                                   message: "Invalid TP Number"
                                               }
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.tp && errors.tp.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mb={'20px'} isInvalid={errors.intake}>
                                    <FormLabel htmlFor='intake'>Intake Code<span className={styles.red}>*</span></FormLabel>
                                    <Input id='intake' placeholder='Your Intake Code (e.g., APU2F2109CS(DA))' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='text'
                                           {...register("intake", {
                                               required: "This is required",
                                           })}/>
                                    <FormErrorMessage>
                                        {errors.intake && errors.intake.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mb={'20px'} isInvalid={errors.phone}>
                                    <FormLabel htmlFor='contact'>Contact Number<span className={styles.red}>*</span></FormLabel>
                                    <Input id='contact' placeholder='Your Phone Code' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                           type='tel'
                                           isInvalid={errors.phone}
                                           {...register("phone", {
                                               required: "This is required",
                                           })}/>
                                    <FormHelperText>You&apos;ll get to join our APAC member Whatsapp Group.</FormHelperText>
                                    <FormErrorMessage>
                                        {errors.phone && errors.phone.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl mb={'20px'} isInvalid={errors.interests}>
                                    <FormLabel htmlFor='interest'>Interests<span className={styles.red}>*</span></FormLabel>
                                    <Textarea id='interest' placeholder='Your interests' borderColor={'gray.400'} _hover={{borderColor: 'gray.600'}}
                                              {...register("interests", {
                                                  required: "This is required",
                                              })}/>
                                    <FormErrorMessage>
                                        {errors.interests && errors.interests.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <Box w={'100%'} textAlign={'center'}>
                                    <Button mb={'30px'} colorScheme="accent" isLoading={isSubmitting} type="submit" _focus={{shadow: '0 0 2px 3px darkorange'}}>
                                        JOIN NOW
                                    </Button>
                                </Box>
                            </Box>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
            <InfoDialog message={message} isOpen={isOpen} onClose={customClose} state={state}/>
        </>
    )
}