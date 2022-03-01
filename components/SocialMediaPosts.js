import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Box, Button, Flex, Icon, Image, Link, Text} from "@chakra-ui/react";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Lazy
} from "swiper";
import style from "./styles/SocialMediaPosts.module.scss";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

export default function SocialMediaPosts(props) {
    SwiperCore.use([Navigation, Pagination, Autoplay]);

    let params = {
        preloadImages: false,
        lazy: true,
        loop: true,
        autoplay: {
            delay: 10000,
        },
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {

            },
            600: {
                slidesPerView: props.posts.length > 2 ? 2 : props.posts.length
            },
            840: {
                slidesPerView: props.posts.length > 3 ? 3 : props.posts.length
            },
        }
    };

    return (
        <>
            <Flex flexDirection={'row'} alignItems={"center"}>
                <Button className={`swiper-button-prev ${style.swiperBtn}`} mr={'10px'} colorScheme={'primary'}>
                    <Icon as={BiChevronLeft}/>
                </Button>
                <Swiper
                    modules={[Pagination, Lazy, Navigation, Autoplay]}
                    pagination={{ clickable: true, el: '.bottom-pagination' }}
                    {...params}
                >
                    {props.posts.map((post, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <Box textAlign={'center'}>
                                    <Link href={post.link} target={"_blank"} d={'inline-block'}>
                                        <div className={style.wrapper}>
                                            <div className={style.imgWrapper}>
                                                <Image data-src={post.img} className={`swiper-lazy ${style.img}`}/>
                                                <div className={`swiper-lazy-preloader swiper-lazy-preloader-white ${style.lazyWrapper}`}>
                                                    <Image src={post.lazy} alt={'image'} width={'100%'} className={style.lazyImg}/>
                                                </div>
                                            </div>
                                            <Box position={'absolute'} color={'white'} className={style.postCaption}>
                                                <Text>{post.shortCaption}</Text>
                                            </Box>
                                        </div>
                                    </Link>
                                </Box>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <Button className={`swiper-button-next ${style.swiperBtn}`} ml={'10px'} colorScheme={'primary'}>
                    <Icon as={BiChevronRight}/>
                </Button>
            </Flex>
            <Box className={'bottom-pagination'} textAlign={"center"}/>
        </>
    );
};