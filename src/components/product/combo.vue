<template>
    <div id="Combo" class="grid grid-cols-2 gap-[20px]">
        <div v-for="item in itemsCombo" :key="item.id" class=" rounded-lg shadow-md">
            <img :src="item.image" :alt="item.info" class="w-full rounded-t-lg">
            <div class="mt-2 px-3">
                <div class="w-full pr-[10px] font-bold flex justify-between">
                    <p>{{ item.name }}</p>
                    <p class=" bg-[#fff831]">NEW</p>
                </div>
                <div class=" overflow-y-auto overflow-x-[0] h-[80px] w-full">
                    <p class="w-full text-[13x]">
                        {{ item.info.length <= 100 ? item.info : (showFullText[item.id] ? item.info : item.info.slice(0,
            100) + '...') }} <button v-if="item.info.length > 100" @click="toggleFullText(item.id)"
                            class=" text-[#FFA500]">
                            {{ showFullText[item.id] ? 'Read less' : 'Read more' }}
                            </button>
                        </p>
                </div>
            </div>
            <div class=" w-full text-end border-t-2 mt-3 p-2">
                <button @click="addToCart(item)"
                    class="mt-2 bg-[#0A8020] w-[150px] py-1 font-bold text-white rounded-md">ADD</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showFullText: {},
            itemsCombo: [
                {
                    id: 1,
                    image: './src/assets/product/Combo/Ga_Danh_Le.jpg',
                    name: "Ga Danh Le",
                    info: "Combo for 2-3 people 01 Cheesy Chicken Pizza/ ALC Pizza(Regular) 01 Bacon Carbonara Spaghetti / Fiesta Seafood Rice / Tuna Bacon Salad 01 Chicken Wings(4pcs) or Boneless Chicken(optional flavor) Drink: 03 Cans of Soft Drink / Aquafina"
                },
                {
                    id: 2,
                    image: "./src/assets/product/Combo/Ga_Ca_Hoi.jpg",
                    name: "GA CA HOI",
                    info: "Combo for 4-6 people 01 Cheesy Chicken Pizza/ ALC Pizza(Large) 01 Bacon Carbonara Spaghetti / Fiesta Seafood Rice / Tuna Bacon Salad 01 Chicken Wings(6pcs) or Boneless Chicken(optional flavor) Drink: 06 Cans of Soft Drink / Aquafina"
                },
                {
                    id: 3,
                    image: "./src/assets/product/Combo/Tiec_Ngon_ Tron_Niem_Vui_1.jpg",
                    name: "COMBO 1",
                    info: "For 1-2 pax: 01 Hawaiian/ Cheese Lover/ Chicken Deluxe/ Pepperoni/ Korean BBQ Spicy Beef/ Veggie Supreme Pizza (Regular), 01 Crinkle Cut Fries/ Cheese Pops/ Creamy Chicken Soup, 02 Cans of Soft Drink/ 02 Aquafina. Unlock more side dish items with VND 10,0"
                },
                {
                    id: 4,
                    image: "./src/assets/product/Combo/Tiec_Ngon_ Tron_Niem_Vui_2.jpg",
                    name: "COMBO 2",
                    info: "For 2-3 pax: 01 ALC Pizza (Regular), 01 Bacon Carbonara Spaghetti/ Fiesta Seafood Rice/ Tuna Bacon Salad, / 02 Cans of Soft Drink/ 02 Aquafina. Unlock more side dish items with VND 30,000."
                },
                {
                    id: 5,
                    image: "./src/assets/product/Combo/Tiec_Ngon_ Tron_Niem_Vui_3.jpg",
                    name: "COMBO 3",
                    info: "For 3-4 pax: 01 ALC Pizza (Large), 01 Bacon Carbonara Spaghetti/ Fiesta Seafood Rice/ Tuna Bacon Salad, 01 Crinkle Cut Fries/ Cheese Pops/ Creamy Chicken Soup, 04 Cans of Soft Drink/ 04 Aquafina. Unlock more side dish items with VND 10,000 or 30,000."
                },
                {
                    id: 6,
                    image: "./src/assets/product/Combo/Tiec_Ngon_ Tron_Niem_Vui_4.jpg",
                    name: "COMBO 4",
                    info: "For 5-6 pax: 01 ALC Pizza (Large), 01 ALC Pizza (Regular), 01 Bacon Carbonara Spaghetti/ Fiesta Seafood Rice, 01 Tuna Bacon Salad/ Chicken Salad With Pesto Sauce, 06 Cans of Soft Drink/ 06 Aquafina. Unlock more side dish items with VND 10,000 or 30,000.",
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