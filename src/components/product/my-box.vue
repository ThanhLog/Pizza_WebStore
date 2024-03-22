<template>
    <div id="myBox" class="grid grid-cols-2 gap-[20px]">
        <div v-for="item in itemsMybox" :key="item.id" class=" rounded-lg shadow-md">
            <img :src="item.image" :alt="item.info" class="w-full rounded-t-lg">
            <div class="mt-2 px-3">
                <div class="w-full pr-[10px] font-bold flex justify-between">
                    <p>{{ item.name }}</p>
                    <p class=" bg-[#fff831]">NEW</p>
                </div>
                <div class=" overflow-y-auto overflow-x-[0] h-[60px] w-full">
                    <p class="w-full">
                        {{ item.info.length <= 78 ? item.info : (showFullText[item.id] ? item.info : item.info.slice(0,
            78) + '...') }} <button v-if="item.info.length > 78" @click="toggleFullText(item.id)"
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
            itemsMybox: [
                {
                    id: 1,
                    image: "./src/assets/product/myBox/My_Box_99k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 1",
                    info: "For 1-2 Pax 01 Pizza Chicken Deluxe/ Pizza Cheese Lover's/Pizza Pepperoni (Personal) 01 Crinkle Cut / Cheesy Pops / Garlic Bread",
                },
                {
                    id: 2,
                    image: "./src/assets/product/myBox/My_Box_139k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 2",
                    info: "01 Pizza Veggie Supreme/Pepperoni/Hawaiian/Cheese Lover's/Chicken Deluxe/Korean BBQ Spicy Beef (Personal) 01 Crinkle - Cut French Fries 01 Cheesy Pops/ Garlic Bread"
                },
                {
                    id: 3,
                    image: "./src/assets/product/myBox/My_Box_159k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 3",
                    info: "01 Pizza (Personal) 01 Crinkle - Cut French Fries 01 Garlic Bread/ Cheesy Pops"
                },
                {
                    id: 4,
                    image: "./src/assets/product/myBox/My_Box_179k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 4",
                    info: "01 Pizza (Personal) 01 Crinkle - Cut French Fries/ Garlic Bread / Cheesy Pops 01 Chicken Wings BBQ(2Pcs) / Fried Chicken Wings Korean(2Pcs) / Fried Chicken Wings Karaage(2Pcs) / Fried Chicken Wings Mekong(2Pcs) "
                },
                {
                    id: 5,
                    image: "./src/assets/product/myBox/My_Box_249k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 5",
                    info: "01 Pizza (Regular) 01 Crinkle - Cut French Fries 01 Garlic Bread/ Cheesy Pops"
                },
                {
                    id: 6,
                    image: "./src/assets/product/myBox/My_Box_269k_1200x437_new3.jpg",
                    name: "COMBO MY BOX 5",
                    info: "01 Pizza (Regular) 01 Garlic Bread/ Cheesy Pops 01 Chicken Wings BBQ(2Pcs) / Fried Chicken Wings Korean(2Pcs) / Fried Chicken Wings Karaage(2Pcs) / Fried Chicken Wings Mekong(2Pcs) "
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