<template>
    <div id="chickenLove" class=" grid grid-cols-4 gap-[20px]">
        <div v-for="item in itemsChickenLove" :key="item.id" class=" min-h-[300px] shadow-lg">
            <img :src="item.image" width="100%" />
            <div class="p-2">
                <h2 class="h-[30px] block">{{ item.name }}</h2>
                <div class="mt-6 w-full h-[80px] overflow-x-auto">
                    <p class="w-full">
                        {{ item.info.length <= 52 ? item.info : (showFullText[item.id] ? item.info : item.info.slice(0,
                            52) + '...' ) }} <button v-if="item.info.length > 52" @click="toggleFullText(item.id)"
                            class=" text-[#FFA500]">
                            {{ showFullText[item.id] ? 'Read less' : 'Read more' }}
                            </button>
                    </p>
                </div>
                <div class="w-full border-t">
                    <button class="w-full flex justify-between p-2 mt-4 rounded-md text-white font-bold bg-[#0A8020]" @click="addToCart(item)">
                        <span>ADD</span>
                        <span>{{ item.price }},000</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showFullText: {},
            itemsChickenLove: [
                {
                    id: 1,
                    image: "./src/assets/product/chickenLove/S_Ga_Gion_Karaage_400x275.jpg",
                    name: "Fried Chicken Wings Karaage (4Pcs)",
                    info: "Special fried chicken wings in the Karaage style with layers of crispy skin",
                    price: 119
                },
                {
                    id: 2,
                    image: "./src/assets/product/chickenLove/Canh_Ga_BBQ_400x275.jpg",
                    name: "Chicken Wings BBQ (4Pcs)",
                    info: "Best chicken in town for BBQ lover",
                    price: 119
                },
                {
                    id: 3,
                    image: "./src/assets/product/chickenLove/Ga_Khong_Xuong_Korean.jpg",
                    name: "Fried Boneless Chicken Korean",
                    info: "Boneless chicken for endless perfection fulfilled with special Korean spicy sauce in every bite",
                    price: 119
                },
                {
                    id: 4,
                    image: "./src/assets/product/chickenLove/Ga_Khong_Xuong_Mekong.jpg",
                    name: "Fried Boneless Chicken Mekong",
                    info: "Boneless chicken for endless perfection fulfilled with signature Mekong garlic sauce in every bite",
                    price: 119
                },
                {
                    id: 5,
                    image: "./src/assets/product/chickenLove/Ga_Xot_Cay_Korean.jpg",
                    name: "Fried Chicken Wings Korean (4Pcs)",
                    info: "Mildly spicy tasty chicken for Korean cuisine lovers",
                    price: 129
                },
                {
                    id: 6,
                    image: "./src/assets/product/chickenLove/Ga_Pho_Mai.jpg",
                    name: "Boneless Chicken Bakes Cheesy",
                    info: "Double cheese for double tasty flavour which makes every piece of boneless Karaage crispy chicken more special",
                    price: 129,
                },
                {
                    id: 7,
                    image: "./src/assets/product/chickenLove/Ga_Mekong_400x275.jpg",
                    name: "Fried Chicken Wings Mekong (4Pcs)",
                    info: "Great taste of chicken combined with the signature Mekong garlic sauce",
                    price: 129
                },
                {
                    id: 8,
                    image: "./src/assets/product/chickenLove/S_Ga_Gion_Karaage_400x275.jpg",
                    name: "Fried Chicken Wings Karaage (6Pcs)",
                    info: "Special fried chicken wings in the Karaage style with layers of crispy skin",
                    price: 149
                },
                {
                    id: 9,
                    image: "./src/assets/product/chickenLove/Canh_Ga_BBQ_400x275.jpg",
                    name: "Chicken Wings BBQ (6Pcs)",
                    info: "Best chicken in town for BBQ lover",
                    price: 149
                },
                {
                    id: 10,
                    image: "./src/assets/product/chickenLove/Ga_Xot_Cay_Korean.jpg",
                    name: "Fried Chicken Wings Korean (6Pcs)",
                    info: "Mildly spicy tasty chicken for Korean cuisine lovers",
                    price: 169
                },
                {
                    id: 11,
                    image: "./src/assets/product/chickenLove/Ga_Mekong_400x275.jpg",
                    name: "Fried Chicken Wings Mekong (6Pcs)",
                    info: "Great taste of chicken combined with the signature Mekong garlic sauce",
                    price: 169
                }
            ]
        }
    },
    methods: {
        toggleFullText(id) {
            this.showFullText[id] = !this.showFullText[id];
        },
        addToCart(item) {
            this.$emit('add-to-cart', item);
        }
    }
}
</script>

<style></style>