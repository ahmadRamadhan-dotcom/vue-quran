<template>
  <main
    class="mx-auto w-11/12 sm:w-[96%] md:w-10/12 lg:w-[80%] xl:w-[1100px] 2xl:w-[1300px] mt-10 grid place-content-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <SurahCard :surah-data="surahData" />
  </main>
  <div
    v-show="error"
    id="error"
    class="grid place-content-center place-items-center h-screen"
  >
    <p class="text-red-500 text-center font-bold text-2xl">Opps! {{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import SurahCard from "~/components/home/SurahCard.vue";

const surahData = ref([]);
const error = ref(null);

const fetchSurah = async () => {
  try {
    const response = await axios.get("https://equran.id/api/surat");
    surahData.value = response.data;
  } catch (err) {
    error.value = err;
  }
};

onMounted(() => {
  fetchSurah();
});
</script>
