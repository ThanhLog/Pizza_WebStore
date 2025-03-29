<template>
    <div id="product" class="block w-full flex h-[500px]">
        <div class="pageProduct w-[75%] relative">
            <div class="w-full sticky top-0 left-0">
                <div id="menuProduct" class="w-full flex">
                    <button class="prevBtn hover:bg-[#f7f7f7]" @click="scrollLeft">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg>
                    </button>
                    <div class=" menuProduct" ref="menuProduct">
                        <div class="flex w-[200%]">
                            <button class="menu-item hover:text-[#C8102E] hover:bg-[#f7f7f7] w-[100%]"
                                v-for="menuItem in itemMenus" :key="menuItem.id" @click="activateMenuItem(menuItem)"
                                :class="{ 'active': menuItem.id === activeItem }" :to="menuItem.router">
                                {{ menuItem.name }}
                            </button>
                        </div>
                    </div>
                    <button class="nextBtn hover:bg-[#f7f7f7]" @click="scrollRight">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"
                            style="fill: rgba(0, 0, 0, 1);">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="p-[25px] overflow-x-auto h-full">
                <div class="super-sale" v-if="activeItem === 1">
                    <superSale @add-to-cart="addToCart" />
                </div>
                <div class="yummy" v-if="activeItem === 2">
                    <yummy @add-to-cart="addToCart" />
                </div>
                <div class="myBox" v-if="activeItem === 3">
                    <myBox @add-to-cart="addToCart" />
                </div>
                <div class="combo" v-if="activeItem === 4">
                    <combo @add-to-cart="addToCart" />
                </div>
                <div class="buy_1_get_3" v-if="activeItem === 5">
                    <buy_1_get_3 @add-to-cart="addToCart" />
                </div>
                <div class="chickenLove" v-if="activeItem === 6">
                    <chickenLove @add-to-cart="addToCart" />
                </div>
                <div class="pizza" v-if="activeItem === 7">
                    <pizza @add-to-cart="addToCart" />
                </div>
                <div class="starter" v-if="activeItem === 8">
                    <starter @add-to-cart="addToCart" />
                </div>
                <div class="drink" v-if="activeItem === 9">
                    <drink @add-to-cart="addToCart" />
                </div>
            </div>
        </div>
        <div class="basket w-[25%] h-full border-l-2">
            <h1 class="text-center p-[10px] text-3xl">-- Your Basket --</h1>
            <span>Free shipping for invoices over 250,000 VND</span>
            <div class="h-full grid" style="grid-template-rows: 3fr 1fr;">
                <div id="itemCart" class=" overflow-x-auto h-full">
                    <div class="Empty h-[40px] bg-[#E8F4FD] pl-3" v-if="Cart.length === 0">
                        <div class="animate-cart-empty flex items-center  gap-2 font-mono">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32">
                                <path fill="currentColor"
                                    d="M5 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10H11l.5 2h13.656l-1.906 7H11.781L9.156 8.5A1.983 1.983 0 0 0 7.22 7zm17 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1m9 0c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1" />
                            </svg>
                            <p>Your cart is empty.</p>
                        </div>
                    </div>
                    <div class="Cart" v-for="itemCart in Cart" :key="itemCart.id">
                        <img :src="itemCart.image" width="150px" />
                        <div>
                            <h3>{{ itemCart.name }}</h3>

                        </div>
                        <button @click="removeFromCart(itemCart)">Remove</button>
                    </div>
                </div>
                <div class="Provisional bottom-0 bg-white">
                    <div class="px-1">
                        <button class=" w-full border border-[#0A8020] text-[#0A8020] rounded-lg p-1">USE VOUCHER
                            CODE</button>
                    </div>
                    <form action="Provisional" class="py-3">
                        <div class="flex justify-between px-3 text-[18px]">
                            <label for="SubTotal">Sub total: </label>
                            <span>{{ SubTotal }},000</span>
                        </div>
                        <div class="flex justify-between px-3 text-[18px]">
                            <label for="MemberDis">Member Dis: </label>
                            <span class=" text-red-800">-{{ MemberDiscount }},000</span>
                        </div>
                        <div class="flex justify-between px-3 text-[18px]">
                            <label for="PromortionDis">Promortion Dis: </label>
                            <span>{{ PromotionDiscount }},000</span>
                        </div>
                        <div class="flex justify-between px-3 text-[18px]">
                            <label for="ShippingFee">Shipping Fee: </label>
                            <span>{{ ShippingFee }},000</span>
                        </div>
                    </form>
                    <div class="p-1">
                        <button
                            class="mt-3 w-full p-3 bg-[#0A8020] rounded-lg flex justify-between font-bold text-white">
                            <span>
                                CHECK OUT
                            </span>
                            <span>{{ Total }},000</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import superSale from '../product/super-sale.vue';
import yummy from '../product/yummy.vue';
import myBox from '../product/my-box.vue';
import combo from '../product/combo.vue';
import buy_1_get_3 from '../product/buy_1_get_3.vue';
import chickenLove from '../product/chicken_love.vue';
import pizza from '../product/pizza.vue';
import starter from '../product/starter.vue';
import drink from '../product/drink.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default {
    components: {
        superSale,
        yummy,
        myBox,
        combo,
        buy_1_get_3,
        chickenLove,
        pizza,
        starter,
        drink,
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay, Pagination, Navigation],
        };
    },
    data() {
        return {
            Cart: [],
            SubTotal: 0,
            MemberDiscount: 0,
            PromotionDiscount: 0,
            ShippingFee: 22,
            Total: 0,
            itemMenus: [
                { id: 1, name: 'SUPER DEAL' },
                // { id: 2, name: 'YUMMY' },
                { id: 3, name: 'MY BOX' },
                { id: 4, name: 'COMBO' },
                // { id: 5, name: 'BUY 1 GET 3' },
                { id: 6, name: 'CHICKEN LOVE' },
                { id: 7, name: 'PIZZA' },
                { id: 8, name: 'STARTER' },
                { id: 9, name: 'DRINK' },
            ],
            activeItem: 1, // Mục menu mặc định là 'SUPER DEAL'
        };
    },
    mounted() {
        // Thực hiện các thao tác cần thiết khi trang được tải
        // Ở đây, chúng ta đặt lớp 'active' cho mục menu mặc định
        this.activateMenuItem(this.itemMenus.find(item => item.id === this.activeItem));
    },
    methods: {
        activateMenuItem(menuItem) {
            this.activeItem = menuItem.id;
        },

        scrollLeft() {
            const menuProduct = this.$refs.menuProduct;
            const scrollWidth = menuProduct.scrollWidth;
            menuProduct.scrollTo({
                left: 0,
                behavior: 'smooth'
            });
        },

        scrollRight() {
            const menuProduct = this.$refs.menuProduct;
            const scrollWidth = menuProduct.scrollWidth;
            menuProduct.scrollTo({
                left: scrollWidth,
                behavior: 'smooth'
            });
        },
        // Thêm sản phẩm vào giỏ hàng
        addToCart(product) {
            this.Cart.push(product);

            // Tam tinh
            this.SubTotal += product.price;

            // Tinh lai
            this.calculateTotal();
        },

        //Xóa sản phẩm
        removeFromCart(item) {
            const index = this.Cart.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.Cart.splice(index, 1);
                console.log("Item removed from cart:", item);
                this.SubTotal -= item.price;
                this.calculateTotal();
            }
        },
        calculateTotal() {
            // Dieu kien free ship
            if (this.SubTotal >= 250) {
                this.ShippingFee = 0;
            } else {
                this.ShippingFee = 22;
            }
            this.Total = this.SubTotal - this.MemberDiscount - this.PromotionDiscount + this.ShippingFee;
        },
    }
}
</script>

<style>
.menu-item {
    padding: 10px 5px;
    font-weight: bold;
}

.menu-item.active {
    background-image: url('src/assets/backgroundCategory.png') !important;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
}

.menu-item.active:hover {
    color: white !important;
}

.menuProduct {
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
}

.menuProduct::-webkit-scrollbar {
    display: none;
}

#itemCart::-webkit-scrollbar {
    width: 2px;
}
</style>