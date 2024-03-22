<template>
    <div id="Drink">
        <div class=" mt-6 grid grid-cols-4 gap-[20px]">
            <div v-for="item in itemsDrink" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                <img :src="item.image" :alt="item.name" />
                <div class="mt-3 p-2">
                    <h3 class=" text-[18px] h-[50px] font-bold">{{ item.name }}</h3>
                    <p class="mt-3 h-[80px]">{{ item.info }}</p>
                    <div class="border-t-2">
                        <button @click="addToCart(item)"
                            class="mt-2 w-full flex justify-between bg-[#0A8020] p-2 text-white rounded-lg">
                            <span>ADD</span>
                            <span>{{ item.price }},000</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsDrink: [
                {
                    id: 1,
                    image: "./src/assets/product/Drink/Aquafina_400x275.jpg",
                    name: "Aquafina",
                    info: "Aquafina 500ml",
                    price: 20
                },
                {
                    id: 2,
                    image: "./src/assets/product/Drink/Mirinda_Orange_Can_400x275.jpg",
                    name: "Mirinda Orange Can 320ml",
                    info: "Mirinda Orange Can 320ml",
                    price: 30
                },
                {
                    id: 3,
                    image: "./src/assets/product/Drink/Mirinda_Soda_Can_400x275.jpg",
                    name: "Mirinda Soda Can 320ml",
                    info: "Mirinda Soda Can 320ml",
                    price: 30
                },
                {
                    id: 4,
                    image: "./src/assets/product/Drink/7Up_Can_400x275.jpg",
                    name: "7Up Can 320ml",
                    info: "7Up Can 320ml",
                    price: 30
                },
                {
                    id: 5,
                    image: "./src/assets/product/Drink/Pepsi_Lemon_Can_400x275.jpg",
                    name: "Pepsi Lemon Can 320ml",
                    info: "Pepsi Lemon Can 320ml",
                    price: 30
                },
                {
                    id: 6,
                    image: "./src/assets/product/Drink/Pepsi_Can_400x275.jpg",
                    name: "Pepsi Can 320ml",
                    info: "Pepsi Can 320ml",
                    price: 30
                },
                {
                    id: 7,
                    image: "./src/assets/product/Drink/Pepsi_NoCalo_Can_400x275.jpg",
                    name: "Pepsi No Calories Can 320ml",
                    info: "Pepsi No Calories Can 320ml",
                    price: 30
                },
                {
                    id: 8,
                    image: "./src/assets/product/Drink/Peach Tea.jpg",
                    name: "Peach  Tea",
                    info: "Peach Tea, Peach Pieces And Chia Seed",
                    price: 39
                },
                {
                    id: 9,
                    image: "./src/assets/product/Drink/Black Milk Tea.jpg",
                    name: "Black Milk Tea",
                    info: "Oolong Tea, Chia Seed Served With Milk Foam On Top.",
                    price: 39
                },
                {
                    id: 10,
                    image: "./src/assets/product/Drink/Lychee Tea.jpg",
                    name: "Lychee Tea",
                    info: "Lychee Tea",
                    price: 39
                },
                {
                    id: 11,
                    image: "./src/assets/product/Drink/7Up_1.5L_400x275.jpg",
                    name: "7Up 1,5L",
                    info: "7Up 1,5L",
                    price: 42
                },
                {
                    id: 12,
                    image: "./src/assets/product/Drink/Mirinda_1.5L_400x275.jpg",
                    name: "Mirinda  1,5L",
                    info: "Mirinda 1,5L",
                    price: 42
                },
                {
                    id: 13,
                    image: "./src/assets/product/Drink/Pepsi_1.5L_400x275.jpg",
                    name: "Pepsi 1,5L",
                    info: "Pepsi 1,5L",
                    price: 42
                },
                {
                    id: 14,
                    image: "./src/assets/product/Drink/Macchiato_Peach_400x275.jpg",
                    name: "Peach Machiato",
                    info: "Rich peach tea flavor with soft milk foam cream",
                    price: 49
                },
                {
                    id: 15,
                    image: "./src/assets/product/Drink/Macchiato_Lychee_400x275.jpg",
                    name: "Lychee Macchiato",
                    info: "Strong flavor of lychee tea with soft milk foam cream",
                    price: 42
                },
                {
                    id: 16,
                    image: "./src/assets/product/Drink/Mojito_Peach_400x275.jpg",
                    name: "Peach Mojito",
                    info: "Cool summer with peachy soda flavor",
                    price: 42
                },
                {
                    id: 17,
                    image: "./src/assets/product/Drink/Mojito_Lychee_400x275.jpg",
                    name: "Lychee Mojito",
                    info: "Cool summer with lychee soda flavor",
                    price: 42
                }
            ]
        }
    },
    methods:{
        addToCart(item) {
            this.$emit('add-to-cart', item);
        }
    }
}
</script>

<style></style>