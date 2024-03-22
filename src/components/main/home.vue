<template>
    <div>
        <div class="banner relative w-full">
            <div class="slide">
                <swiper :spaceBetween="30" :centeredSlides="true" :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                }" :pagination="{
                    clickable: true,
                }" :navigation="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="banner in banners" :key="banner.id">
                        <img :src="banner.img" class=" w-full h-full" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="oder absolute bottom-[-30%] w-full flex  justify-center">
                <div class=" w-[45%] shadow-lg shadow-#111-500/40">
                    <div class="flex gap-[2px] w-full">
                        <button @click="toggleDelivery"
                            class="w-full flex items-center gap-4 font-bold h-[40px]  bg-white rounded-t-lg p-1 relative">
                            <div class="h-full flex items-center gap-2">
                                <img :src="deliveryImageSrc" alt="" class="h-full">
                                <p>Delivery</p>
                            </div>
                            <div v-if="showDeliveryGif" class="absolute h-full flex items-center gap-2">
                                <img src="/src/assets/oder/delivery.gif">
                                <p class=" text-[#C8102E]">Delivery</p>
                            </div>
                        </button>
                        <button @click="togglePickup"
                            class="w-full flex items-center gap-4 font-bold h-[40px]  bg-white rounded-t-lg p-1 relative">
                            <div class="h-full flex gap-2 items-center">
                                <img :src="pickupImageSrc" alt="" class="h-full">
                                <p>Carryout</p>
                            </div>
                            <div v-if="showPickupGif" class="h-full flex gap-2 items-center absolute">
                                <img src="/src/assets/oder/pickup.gif" alt="">
                                <p class=" text-[#C8102E]">Carryout</p>
                            </div>
                        </button>
                    </div>
                    <div class="bg-white p-1">
                        <div>
                            <div class=" p-3 w-full">
                                <div class="flex gap-[5px]">
                                    <input type="text" placeholder="Please let us know your address"
                                        class="w-full p-1 outline-none rounded border-2 border-[#0A8020] ">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="#0A8020">
                                            <path
                                                d="M15,4.946l-6-2L2,5.279V21.387l7-2.333,6,2,7-2.333V2.613Zm-5,.442,4,1.333V18.612l-4-1.333ZM4,6.721,8,5.388V17.279L4,18.613ZM20,17.279l-4,1.333V6.721l4-1.334Z" />
                                        </svg>
                                    </button>
                                </div>
                                <div class=" w-full h-[20px]">
                                    <div class=" w-full mt-2 flex justify-end">
                                        <button v-if="showPickupGif"
                                            class="flex items-center gap-[2px] text-[#4C92E3] underline underline-offset-1">
                                            <svg width="1rem" height="1rem" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M4.87617 3.75H19.1238L21 8.86683V10.5C21 11.2516 20.7177 11.9465 20.25 12.4667V21H3.75V12.4667C3.28234 11.9465 3 11.2516 3 10.5V8.86683L4.87617 3.75ZM18.1875 13.3929C18.3807 13.3929 18.5688 13.3731 18.75 13.3355V19.5H15V15H9L9 19.5H5.25V13.3355C5.43122 13.3731 5.61926 13.3929 5.8125 13.3929C6.63629 13.3929 7.36559 13.0334 7.875 12.4667C8.38441 13.0334 9.11371 13.3929 9.9375 13.3929C10.7613 13.3929 11.4906 13.0334 12 12.4667C12.5094 13.0334 13.2387 13.3929 14.0625 13.3929C14.8863 13.3929 15.6156 13.0334 16.125 12.4667C16.6344 13.0334 17.3637 13.3929 18.1875 13.3929ZM10.5 19.5H13.5V16.5H10.5L10.5 19.5ZM19.5 9.75V10.5C19.5 11.2965 18.8856 11.8929 18.1875 11.8929C17.4894 11.8929 16.875 11.2965 16.875 10.5V9.75H19.5ZM19.1762 8.25L18.0762 5.25H5.92383L4.82383 8.25H19.1762ZM4.5 9.75V10.5C4.5 11.2965 5.11439 11.8929 5.8125 11.8929C6.51061 11.8929 7.125 11.2965 7.125 10.5V9.75H4.5ZM8.625 9.75V10.5C8.625 11.2965 9.23939 11.8929 9.9375 11.8929C10.6356 11.8929 11.25 11.2965 11.25 10.5V9.75H8.625ZM12.75 9.75V10.5C12.75 11.2965 13.3644 11.8929 14.0625 11.8929C14.7606 11.8929 15.375 11.2965 15.375 10.5V9.75H12.75Z"
                                                    fill="#4C92E3" />
                                            </svg>
                                            All store
                                        </button>
                                        <button>

                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button class="w-full bg-[#0A8020] p-2 text-white rounded">
                                <router-link to="">START ODERING</router-link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mt-[9%]">
            <div class="w-full text-center relative flex justify-center items-center z-[-1] h-[34px]">
                <p class=" px-3 text-2xl font-bold z-[1] bg-[#ffffff]">PROMOTIONS</p>
                <p class="w-full h-[3px] bg-[#e9ebee] absolute flex items-center z-0"></p>
            </div>
            <div class="px-[20px]">
                <div class="mt-4 w-full flex gap-[10px] flex-nowrap">
                    <div class="w-full grid grid-cols-1" v-for="promotion in promotions" :key="promotion.id">
                        <router-link :to="promotion.router">
                            <img :src="promotion.image" :alt="promotion.name">
                        </router-link>
                    </div>
                </div>
                <router-link to="/product">
                    <button class="mt-2 w-full bg-[#0A8020] p-2 text-white rounded-lg">
                        SEE COMPLETE MENU
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
export default {

    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            oder: false,
            showDeliveryGif: true,
            showPickupGif: false,
            deliveryImageSrc: "/src/assets/oder/bikergray.png",
            pickupImageSrc: "/src/assets/oder/pickup.png",
            banners: [
                {
                    id: 1,
                    img: 'src/assets/BannerImg/Desktop - VIE_S4LX4_260220241228.jpg',
                },
                {
                    id: 2,
                    img: 'src/assets/BannerImg/Destkop-Vie_F8MJ7_260220241223.jpg'
                },
                {
                    id: 3,
                    img: 'src/assets/BannerImg/DESTKOP-VIE_M6265_131120231031.jpg'
                },
                {
                    id: 4,
                    img: 'src/assets/BannerImg/home_desk_viet-40_BN4A2_290120241033.jpg'
                }
            ],
            promotions: [
                {
                    id: 1,
                    router: '/',
                    image: './src/assets/product/superSale/Desktop - ENG_RZY0J_250220241050.jpg',
                    name: 'Combo Yummy'
                },
                {
                    id: 2,
                    router: '/',
                    image: './src/assets/product/superSale/Middle Banner _Destkop - Eng_7ZXJE_260220241229.jpg',
                    name: '90% OFF FOR 2ND PIZZA'
                }
            ]
        }
    },
    methods: {
        toggleDelivery() {
            this.showDeliveryGif = !this.showDeliveryGif;
            this.showPickupGif = !this.showPickupGif;
        },
        togglePickup() {
            this.showPickupGif = !this.showPickupGif;
            this.showDeliveryGif = !this.showDeliveryGif;

        }
    }
};
</script>

<style>
.swiper {
    z-index: -1;
}

.swiper-pagination-bullet-active {
    background: #CB2843;
}
</style>
