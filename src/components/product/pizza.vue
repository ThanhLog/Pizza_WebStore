<template>
    <div class=" grid grid-cols-4 gap-[10px]">
        <div v-for="item in itemsPizza" :key="item.id" class="rounded-md shadow-lg">
            <div>
                <img :src="item.image" :alt="item.name" width="100%">
                <div class=" p-2">
                    <div>
                        <h3 class="font-bold h-[35px] text-[15px]">{{ item.name }}</h3>
                        <div class="w-full mt-2 h-[100px] overflow-x-auto">
                            <p>
                                {{ item.info.length <= 64 ? item.info : (showFullText[item.id] ? item.info :
            item.info.slice(0, 64) + '...') }} <button v-if="item.info.length > 64"
                                    @click="toggleFullText(item.id)" class=" text-[#FFA500]">
                                    {{ showFullText[item.id] ? 'Read less' : 'Read more' }}
                                    </button>
                            </p>
                        </div>
                    </div>
                    <div class=" border-t-2	mt-2">
                        <div class=" flex flex-col relative mt-4">
                            <span class=" absolute top-[-20%] left-[15px] bg-white text-[#27272796] text-[13px]">Select
                                your
                                size</span>
                            <select name="selectSize" id="selectSize"
                                class=" outline-none border-2 px-4 py-2 rounded-md">
                                <div>
                                    <option value="P">Personal</option>
                                    <option value="R">Regular</option>
                                    <option value="L">Large</option>
                                </div>
                            </select>
                        </div>
                        <div class=" flex flex-col relative mt-4">
                            <span class=" absolute top-[-20%] left-[15px] bg-white text-[#27272796] text-[13px]">Select
                                your
                                crust</span>
                            <select name="selectCrust" id="selectCrust"
                                class=" outline-none border-2 px-4 py-2 rounded-md">
                                <div>
                                    <option value="HT">Hand Tossed <span></span></option>
                                    <option value="PAN">Pan <span></span></option>
                                    <option value="THIN">Thin <span></span></option>
                                    <option value="CCP">Cheese Stuffed Crust <span></span></option>
                                    <option value="SCP">Sausage Stuffed Crust <span></span></option>
                                    <option value="CSC">Cheese Sausage Crust <span></span></option>
                                </div>
                            </select>
                        </div>
                    </div>
                    <button @click="addToCart(item)"
                        class=" mt-3 w-full font-bold bg-[#0A8020] text-white rounded-lg p-2">ADD</button>
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
            itemsPizza: [
                {
                    id: 1,
                    image: "./src/assets/product/Pizza/Asian Beef And Reef Pizza.jpg",
                    name: "Asian Beef And Reef Pizza",
                    info: "From beef to reef, such a special combination of beef and freshly-baked seafood (shrimp, squid) with pineapple, onion, tasty Mozarella cheese",
                },
                {
                    id: 2,
                    image: "./src/assets/product/Pizza/Cheese Love.jpg",
                    name: "Cheese Love",
                    info: "A Triple-Layer Of Mozzarella Cheese On Top Of Tomato Sauce",
                },
                {
                    id: 3,
                    image: "./src/assets/product/Pizza/Cheesy Bites Trio Shrimp.jpg",
                    name: "Cheesy Bites Trio Shrimp",
                    info: "Shrimp, Onions, Red Capsicums, Pineapples, Black Olives, Parsley, Mozzarella Cheeses On Garlic-Parsley Butter Sauce."
                },
                {
                    id: 4,
                    image: "./src/assets/product/Pizza/Cheesy Chicken Pizza.jpg",
                    name: "Cheesy Chicken Pizza",
                    info: "Enjoy the great combination of Karaage chicken with pizza at once with fresh mushrooms, onions and cheese sauce."
                },
                {
                    id: 5,
                    image: "./src/assets/product/Pizza/Chicken Deluxe.jpg",
                    name: "Chicken Deluxe",
                    info: "Chicken Deluxe Pizza With Chicken Breast, Mushroom, Pineapple, Carrot And Cress Layered On Top Of Our Black Pepper Sauce",
                },
                {
                    id: 6,
                    image: "./src/assets/product/Pizza/Double Topping Ocean Delight Pizza.jpg",
                    name: "Double Topping Ocean Delight Pizza",
                    info: "Double Topping Of Seafood (Squid, Crabsticks) With Pineapple & Green Capsicum, With Cheesy Mayonnaise Sauce And Perfectly Melted Mozzarella Cheese From New Zealand.",
                },
                {
                    id: 7,
                    image: "./src/assets/product/Pizza/Double Topping Seafood Black Pepper Pizza.jpg",
                    name: "Double Topping Seafood Black Pepper Pizza",
                    info: "Double Topping Of Seafood (Shrimp, Squids, Crabsticks) Combined With Pineapple And Sliced Onions, Black Pepper Spicy Sauce And Perfectly Melted Mozzarella Cheese From New Zealand.",
                },
                {
                    id: 8,
                    image: "./src/assets/product/Pizza/Double Topping Seafood Pesto Pizza.jpg",
                    name: "Double Topping Seafood Pesto Pizza",
                    info: "Double Topping Of Seafood (Shrimp, Squids) With Sliced Mushrooms, Our Signature Pesto Sauce, Perfectly Melted Mozzarella Cheese From New Zealand, Topped With Fresh Basil."
                },
                {
                    id: 9,
                    image: "./src/assets/product/Pizza/Fisherman's Tuna.jpg",
                    name: "Fisherman's Tuna",
                    info: "Fisherman'S Tuna Pizza Bring You The Dedicate Taste Of The Ocean With Tuna, Crab Sticks, Onions, Pineapples On Top Of Pesto Sauce"
                },
                {
                    id: 10,
                    image: "./src/assets/product/Pizza/Ham And Shrimp Pepper Pizza.jpg",
                    name: "Ham And Shrimp Pepper Pizza",
                    info: "Lots of shrimp, lots of ham mixed with fresh mushrooms, onions and Mozarella cheese"
                },
                {
                    id: 11,
                    image: "./src/assets/product/Pizza/Hawaiian Paradise.jpg",
                    name: "Hawaiian Paradise",
                    info: "Hawaiian-Flavored Pizza With Hams And Pineapples"
                },
                {
                    id: 12,
                    image: "./src/assets/product/Pizza/Korean BBQ Spicy Beef.jpg",
                    name: "Korean BBQ Spicy Beef",
                    info: "Beef, Pineapples, Sprouts, Sesames In Korean Spicy Sauce Base"
                },
                {
                    id: 13,
                    image: "./src/assets/product/Pizza/Ocean Delight.jpg",
                    name: "Ocean Delight",
                    info: "Squids, Crab Sticks, Pineapples, Capsicums On Top Of Cheesy Mayo Sauce And Mozzarella Cheese"
                },
                {
                    id: 14,
                    image: "./src/assets/product/Pizza/Pepperoni.jpg",
                    name: "Pepperoni",
                    info: "Pepperoni With Mozzarella Cheese"
                },
                {
                    id: 15,
                    image: "./src/assets/product/Pizza/Premium Honey Cheese.jpg",
                    name: "Premium Honey Cheese",
                    info: "A Perfect Combination Of Assorted Cheeses - Mozzarella, Parmesan, Cheddar And Cream Cheese In Honey Sauce Base"
                },
                {
                    id: 16,
                    image: "./src/assets/product/Pizza/Seafood Black Pepper.jpg",
                    name: "Seafood Black Pepper",
                    info: "Shrimps, Squids, Pineapples, Crabsticks, Onions On A Bed Of Hot Black Pepper Sauce And Topped With Mozzarella Cheese"
                },
                {
                    id: 17,
                    image: "./src/assets/product/Pizza/Seafood Lover.jpg",
                    name: "Seafood Lover",
                    info: "A pizza that you can taste the whole flavor of ocean with lots of shrimps, carb sticks, mixed with tomotoes, corns, pineapple and Mozarella cheese"
                },
                {
                    id: 18,
                    image: "./src/assets/product/Pizza/Seafood Pesto.jpg",
                    name: "Seafood Pesto",
                    info: "Shrimp, Squid And Mushrooms On A Bed Of Signature Pesto Sauce, Topped With Mozzarella Cheese"
                },
                {
                    id: 19,
                    image: "./src/assets/product/Pizza/Shrimps Scampi.jpg",
                    name: "Shrimps Scampi",
                    info: "Shrimps, Onions, Capsicums On Top Of Garlic-Parsley Butter Sauce"
                },
                {
                    id: 20,
                    image: "./src/assets/product/Pizza/Supreme Meat Lover's.jpg",
                    name: "Supreme Meat Lover's",
                    info: "Enjoy A Tasty, Protein-Packed Serving Of Bacon, Sausage, Beef, Ham And Pepperoni"
                },
                {
                    id: 21,
                    image: "./src/assets/product/Pizza/Supreme.jpg",
                    name: "Supreme",
                    info: "Traditional Pizza With Beef, Bacon, Pepperoni, Capsicums, Mushrooms, Onions And Mozzarella Cheese"
                },
                {
                    id: 22,
                    image: "./src/assets/product/Pizza/Veggie Supreme (Garlic-Parsley Butter Sauce).jpg",
                    name: "Veggie Supreme (Garlic-Parsley Butter Sauce)",
                    info: "Black Olives, Fresh Cherry Tomatoes, Mushrooms, Pineapples, Sweet Corns, Onions On Top Of Mozzarella Cheese"
                },
                {
                    id: 23,
                    image: "./src/assets/product/Pizza/Veggie Supreme (Tomato Sauce).jpg",
                    name: "Veggie Supreme (Tomato Sauce)",
                    info: "Black Olives, Fresh Cherry Tomatoes, Mushrooms, Pineapples, Sweet Corns, Onions On Top Of Mozzarella Cheese"
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