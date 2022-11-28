<template>
  <main
    class="mx-auto w-11/12 sm:w-[96%] md:w-10/12 lg:w-[80%] xl:w-[1100px] 2xl:w-[1300px] mt-10 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <SurahCard />
    <SurahCard />
    <SurahCard />
    <SurahCard />
  </main>
</template>

<script setup>
import SurahCard from "~/components/home/SurahCard.vue";
</script>
