<template>
  <router-link to="/" class="fixed top-24">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z"
        fill="currentColor"
      />
    </svg>
  </router-link>
  <div
    v-if="detailSurah"
    class="mt-4 w-11/12 sm:w-[94%] md:w-[700px] xl:w-[760px] mx-auto"
  >
    <div
      :class="
        showMore
          ? 'min-h-[6.5em] transition duration-300'
          : 'min-h-[9em] overflow-hidden'
      "
      class="w-full relative border border-[#464b50] rounded-sm shadow-sm"
    >
      <div class="flex items-center gap-2 pl-5 pt-5">
        <p class="font-normal text-xl">{{ detailSurah.nomor }}.</p>
        <p id="surah_name" class="font-normal text-xl">
          {{ detailSurah.nama_latin }}
        </p>
        <p id="ayat" class="-translate-y-1">{{ detailSurah.nama }}</p>
      </div>
      <p
        v-html="detailSurah.deskripsi"
        :class="showMore ? '' : 'truncate ...'"
        class="md:text-justify p-5"
      ></p>
      <div
        @click="showMore = !showMore"
        class="absolute bottom-0 cursor-pointer w-full grid place-content-center"
      >
        <p
          :class="showMore ? 'rotate-180' : ''"
          class="text-center w-10 flex justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            display="inline-block"
            vertical-align="middle"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="m12 15.375l-6-6l1.4-1.4l4.6 4.6l4.6-4.6l1.4 1.4Z"
            />
          </svg>
        </p>
      </div>
    </div>
    <div class="w-full sticky top-0 z-[30] mt-4">
      <audio controls class="w-full">
        <source :src="detailSurah.audio" type="audio/mpeg" />
      </audio>
    </div>

    <div
      v-for="(data, index) in detailSurah.ayat"
      :key="index"
      :class="index == 0 ? 'mt-10' : ''"
      class="w-full mb-4 border border-[#464b50] min-h-[5.5em] rounded-sm p-5"
    >
      <div class="grid place-content-end">
        <p id="ayat" class="font-['Amiri_Quran'] text-base">{{ data.ar }}</p>
      </div>
      <div class="mt-5">
        <p class="italic">{{ data.tr }}</p>
        <p>{{ data.idn }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";

const route = useRoute();
const no = route.params.no;
const showMore = ref(false);

const detailSurah = ref(null);

onMounted(() => {
  axios
    .get(`https://equran.id/api/surat/${no}`)
    .then((res) => (detailSurah.value = res.data));
});
</script>
