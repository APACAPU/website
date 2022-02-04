import {Button, Heading, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Text} from "@chakra-ui/react";
import styles from "./styles/InfoDialog.module.scss";
import {FaCheck} from "react-icons/fa";
import {BsExclamationLg} from "react-icons/bs";

export default function InfoDialog(props) {
    return (
        <>
            <Modal
                onClose={props.onClose}
                isOpen={props.isOpen}
                isCentered
            >
                <ModalOverlay/>
                <ModalContent position={'relative'} maxW={{md: "450px", base: '320px'}}>
                    <div className={props.state ? styles.success : styles.error} onClick={props.onClose}>
                        {!props.state ? <BsExclamationLg/> : <FaCheck/>}
                    </div>
                    <ModalHeader className={styles['top-part']} pb={'15px'} pt={'55px'} bg={"white"} color={'black'}>
                        <Heading as={'h3'}>{props.state ? "Successful!" : "Error!"}</Heading>
                    </ModalHeader>
                    <ModalBody display={'flex'} flexDirection={'column'} px={'50px'}>
                        <Text>{props.message}</Text>
                        <Button mb={'40px'} mt={'30px'} colorScheme={props.state ? 'success' : "error"}
                                _focus={{shadow: `0 0 2px 3px ${props.state ? '#50d28a' : '#ff978c'}`}}>OK</Button>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
        )
}