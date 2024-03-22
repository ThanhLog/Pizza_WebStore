<template>
  <div class="grid grid-cols-2 gap-[20px]">
    <div v-for="item in itemsSale" :key="item.id" class=" rounded-lg shadow-md">
      <img :src="item.image" :alt="item.info" class="w-full rounded-t-lg">
      <div class="mt-2">
        <div class="w-full pr-[10px] font-bold flex justify-between">
          <p>{{ item.name }}</p>
          <p class=" bg-[#fff831]">NEW</p>
        </div>
        <div>
          {{ item.info }}
        </div>
        <div class=" w-full text-end border-t-2 mt-3 p-2">
          <button @click="addToCart(item)"
            class="mt-2 bg-[#0A8020] w-[150px] py-1 font-bold text-white rounded-md">ADD</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsSale: [
        {
          id: 1,
          image: "./src/assets/product/superSale/CATEGORY-01_20240223131357ANZ.jpeg",
          name: "90% OFF FOR 2ND PIZZA (REGULAR)",
          info: "Buy 1 Regular Pizza and 1 Drink 1.5L, discount from 90% for 1 Regular Pizza (lower product tier)"
        },
        {
          id: 2,
          image: "./src/assets/product/superSale/CATEGORY-02_202402231314392DB.jpeg",
          name: "90% OFF FOR 2ND PIZZA (LARGE)",
          info: "Buy 1 Large Pizza and 1 Drink 1.5L, discount from 90% for 1 Large Pizza (lower product tier)"
        },
      ]
    }
  },
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item);
    }
  }
}
</script>

<style></style>
