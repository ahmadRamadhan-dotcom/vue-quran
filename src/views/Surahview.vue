<template>
  <div class="mt-4 w-11/12 sm:w-[94%] md:w-[700px] xl:w-[760px] mx-auto">
    <div
      :class="showMore ? 'min-h-[6.5em] transition duration-300' : 'h-[7.7em]'"
      class="w-full relative border border-[#464b50] rounded-sm shadow-sm"
    >
      <div class="flex items-center gap-2 pl-5 pt-5">
        <p class="font-normal text-xl">2.</p>
        <p id="surah_name" class="font-normal text-xl">Al-Baqarah</p>
        <p>الفاتحة</p>
      </div>
      <p :class="showMore ? '' : 'truncate ...'" class="md:text-justify p-5">
        Surat Al Baqarah yang 286 ayat itu turun di Madinah yang sebahagian
        besar diturunkan pada permulaan tahun Hijrah, kecuali ayat 281
        diturunkan di Mina pada Hajji wadaa' (hajji Nabi Muhammad s.a.w. yang
        terakhir). Seluruh ayat dari surat Al Baqarah termasuk golongan
        Madaniyyah, merupakan surat yang terpanjang di antara surat-surat Al
        Quran yang di dalamnya terdapat pula ayat yang terpancang (ayat 282).
        Surat ini dinamai Al Baqarah karena di dalamnya disebutkan kisah
        penyembelihan sapi betina yang diperintahkan Allah kepada Bani Israil
        (ayat 67 sampai dengan 74), dimana dijelaskan watak orang Yahudi pada
        umumnya. Dinamai Fusthaatul-Quran (puncak Al Quran) karena memuat
        beberapa hukum yang tidak disebutkan dalam surat yang lain. Dinamai juga
        surat alif-laam-miim karena surat ini dimulai dengan Alif-laam-miim.
      </p>
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
    <div class="w-full mt-8 sticky top-0 z-[30]">
      <audio controls class="w-full">
        <source
          src="https://equran-id-audio.nos.wjv-1.neo.id/content/audio/002.mp3"
          type="audio/mpeg"
        />
      </audio>
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

const detailSurah = ref([]);

onMounted(() => {
  axios
    .get(`https://equran.id/api/surat/${no}`)
    .then((res) => (detailSurah.value = res.data));
});
</script>
