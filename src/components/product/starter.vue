<template>
    <div class="flex flex-col gap-[50px]">
        <!-- Items Fried Delights -->
        <div id="Menu-Fired-Delights">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Fried Delights</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsFired" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class="mt-4 p-2">
                        <h3 class=" text-[18px]">{{ item.name }}</h3>
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
        <!-- Items Salad  -->
        <div id="Menu-Salad">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Salad</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsSalad" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class="mt-4 p-2">
                        <h3 class=" text-[18px] h-[50px]">{{ item.name }}</h3>
                        <p class="mt-3 h-[150px]">{{ item.info }}</p>
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
        <!-- Items Soups  -->
        <div id="Menu-Soups">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Soups</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsSoup" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class=" mt-4 p-2">
                        <h3 class=" text-[18px]">{{ item.name }}</h3>
                        <div class=" mt-2 border-t-2">
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
        <!-- Item Pasta -->
        <div id="Menu-Pasta">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Pasta Creations</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsPasta" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class="mt-4 p-2">
                        <h3 class=" text-[18px] h-[50px]">{{ item.name }}</h3>
                        <p class="mt-3 h-[150px]">{{ item.info }}</p>
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
        <!-- Item Rice -->
        <div id="Menu-Rice">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Pasta Creations</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsRice" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class="mt-4 p-2">
                        <h3 class=" text-[18px] h-[50px]">{{ item.name }}</h3>
                        <p class="mt-3 h-[150px]">{{ item.info }}</p>
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
        <!-- Item Oven -->
        <div id="Menu-Oven">
            <h3 class=" text-[30px] text-[#E54746] font-bold border-b-2 border-[#E54746]">Pasta Creations</h3>
            <div class=" mt-6 grid grid-cols-4 gap-[20px]">
                <div v-for="item in itemsOven" :key="item.id" class="shadow-lg shadow-[#999999]-500/40">
                    <img :src="item.image" :alt="item.name" />
                    <div class="mt-4 p-2">
                        <h3 class=" text-[18px] h-[50px]">{{ item.name }}</h3>
                        <p class="mt-3 h-[100px]">{{ item.info }}</p>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            itemsFired: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/Calamari.jpg",
                    name: "Calamari",
                    info: "Crispy Fried Calamari",
                    price: 99
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Cheesy Rings.jpg",
                    name: "Cheesy Rings",
                    info: "Crispy Fried Cheese Ring",
                    price: 79
                },
                {
                    id: 3,
                    image: "./src/assets/product/Starter/Crinkle Cut French Fries.jpg",
                    name: "Crinkle Cut French Fries",
                    info: "Crinkle Cut Fries With In House Tomato Sauce",
                    price: 59
                },
                {
                    id: 4,
                    image: "./src/assets/product/Starter/Nachos.jpg",
                    name: "Nachos",
                    info: "Nachos With Cheesy Dipping Sauce Or House-Made Tomato Sauce",
                    price: 29
                }
            ],
            itemsSalad: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/Chicken Salad With Pesto.jpg",
                    name: "Chicken Salad With Pesto",
                    info: "Garden Salads With Grilled Chicken Fillets And Pesto Sauce",
                    price: 79
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Crispy Salmon Skin Salad.jpg",
                    name: "Crispy Salmon Skin Salad",
                    info: "Baby Potato, Ham, Green And Red Capsicum Mixed With Sesame Dressing",
                    price: 89
                },
                {
                    id: 3,
                    image: "./src/assets/product/Starter/Grill Shrimp and Peach Salad.jpg",
                    name: "Grill Shrimp and Peach Salad",
                    info: "Enjoy a slice of fresh peach, blending authentic shrimp flavor with lettuce, tomato and olive",
                    price: 99
                },
                {
                    id: 4,
                    image: "./src/assets/product/Starter/Tuna Bacon Salad.jpg",
                    name: "Tuna Bacon Salad",
                    info: "Pizza Hut Best-Seller Mixed Greens With Tuna, Bacon, French Beans, Cherry Tomato, Corns In A Bed Of With Classic Mayonnaise",
                    price: 79
                }
            ],
            itemsPasta: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/Carbonara Spaghetti.jpg",
                    name: "Carbonara Spaghetti",
                    info: "Spaghetti In A Delicious Creamy Sauce With Bacon",
                    price: 90
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Marinara Seafood Spaghetti.jpg",
                    name: "Marinara Seafood Spaghetti",
                    info: "Spaghetti In A Delicious Tomato Sauce With Shrimps, Squids, Onions And Capsicums",
                    price: 139
                },
                {
                    id: 3,
                    image: "./src/assets/product/Starter/Seafood Black Pepper Spaghetti.jpg",
                    name: "Seafood Black Pepper Spaghetti",
                    info: "Spaghetti In A Delicious Black Pepper Sauce With Shrimps, Crab Sticks, Squid, French Bean, Mushroom, Capsicum",
                    price: 130
                },
                {
                    id: 4,
                    image: "./src/assets/product/Starter/Spaghetti Bolognese.jpg",
                    name: "Spaghetti Bolognese",
                    info: "Spaghetti With Classic Beef Bolognese Sauce",
                    price: 120
                },
            ],
            itemsSoup: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/Creamy Chicken Sup.jpg",
                    name: "Creamy Chicken Sup",
                    price: 49
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Seafood Chowder.jpg",
                    name: "Seafood Chowder",
                    price: 69
                }
            ],
            itemsRice: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/BBQ Chicken Wings With Garlic Rice.jpg",
                    name: "BBQ Chicken Wings With Garlic Rice",
                    info: "Auromatic Garlic Rice With Delicious Chicken Wings",
                    price: 129
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Fiesta Seafood Rice.jpg",
                    name: "Fiesta Seafood Rice",
                    info: "With Shrimps, Squid And Fresh Vegetables",
                    price: 99
                },
                {
                    id: 3,
                    image: "./src/assets/product/Starter/Pepper Sausage Baked Rice.jpg",
                    name: "Pepper Sausage Baked Rice",
                    info: "When rice and sausage are mixed into one, served with fresh carrots, beans and corn on a black pepper sauce",
                    price: 99
                },
                {
                    id: 4,
                    image: "./src/assets/product/Starter/Spicy Prawn Fried Rice.jpg",
                    name: "Spicy Prawn Fried Rice",
                    info: "With Shrimps, Squid And Fresh Vegetables",
                    price: 99
                },
                {
                    id: 5,
                    image: "./src/assets/product/Starter/Pesto Seafood Baked Rice.jpg",
                    name: "Pesto Seafood Baked Rice",
                    info: "More delicious with shrimp, more filling with rice, and more fresh with carrots, corn, and beans on a familiar pesto base",
                    price: 99
                },
            ],
            itemsOven: [
                {
                    id: 1,
                    image: "./src/assets/product/Starter/Baked Cheesy Corn With Bacon.jpg",
                    name: "Baked Cheesy Corn With Bacon",
                    info: "Sweet Corn, Bacon Mixed With Cheesy Mayo And Garlic Butter Grilled With Mozzarella Cheese On Top",
                    price: 79,
                },
                {
                    id: 2,
                    image: "./src/assets/product/Starter/Garlic Bread.jpg",
                    name: "Garlic Bread",
                    info: "Deliciously Crusty Grilled Bread Covered With Savory Garlic-Butter Sauce",
                    price: 29
                },
                {
                    id: 3,
                    image: "./src/assets/product/Starter/Cheesy Pops.jpg",
                    name: "Cheesy Pops",
                    info: "Filled With 2 Types Of Cheese",
                    price: 69
                },
                {
                    id: 4,
                    image: "./src/assets/product/Starter/Honey Mustard Fries.jpg",
                    name: "Honey Mustard Fries",
                    info: "Baked cheesy bacon and honey mustard fries.",
                    price: 79
                },
                {
                    id: 5,
                    image: "./src/assets/product/Starter/Italian Sausages.jpg",
                    name: "Italian Sausages",
                    info: "A Pizza Hut Lover's Must-Have: Grilled Juicy Italian Sausage",
                    price: 99
                },
            ],
        }
    },
    methods: {
        addToCart(item) {
            this.$emit('add-to-cart', item);
        }
    }
}
</script>