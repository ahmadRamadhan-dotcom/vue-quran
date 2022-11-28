<template>
  <router-link
    v-for="(data, index) in surahData"
    :key="index"
    :to="{
      name: 'Surah',
      params: {
        no: data.nomor,
      },
    }"
    class="border border-[#464b50] hover:border-[#2ca4ab] group flex justify-between items-center transition duration-200 rounded-[.25rem] h-[4.4em] p-5"
  >
    <div class="flex gap-5" id="surah_preview_left">
      <div
        class="bg-[#343a40] group-hover:bg-[#2ca4ab] rotate-45 group-hover:text-black rounded-sm w-10 h-10 grid place-content-center place-items-center"
      >
        <p class="rotate-[-45deg] font-bold">{{ data.nomor }}</p>
      </div>
      <div>
        <p id="surah_name" class="text-base font-bold">{{ data.nama_latin }}</p>
        <p
          id="meaning"
          class="text-[#777] font-bold text-[12px] group-hover:text-[#2ca4ab]"
        >
          {{ data.arti }}
        </p>
      </div>
    </div>
    <div id="surah_preview_right">
      <p id="ayat" class="text-[13px] text-right">{{ data.nama }}</p>
      <p class="text-[#777] font-bold text-[12px] group-hover:text-[#2ca4ab]">
        {{ data.jumlah_ayat }} Ayat
      </p>
    </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  surahData: Array,
});
</script>
