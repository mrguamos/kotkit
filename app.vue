<script setup lang="ts">
import type { RootObject } from './types/tiktok'

const videoId = ref('')
const link = ref('')
const loading = ref(false)
const generateLink = async () => {
  if (videoId.value) {
    try {
      loading.value = true
      const url = '/api/download'
      const data = await $fetch<RootObject>(url, {
        params: {
          aweme_id: videoId.value,
        },
      })
      link.value = data?.aweme_list[0].video.play_addr.url_list[0] ?? ''
    }
    finally {
      loading.value = false
    }
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full min-h-screen space-y-10">
    <div class="flex flex-col">
      <span class="flex place-self-end animate-ping absolute w-2 h-2 rounded-full bg-red-500 opacity-75" />
      <span class="relative text-7xl font-extrabold text-center text-yellow-500 ">TikTok <span class="text-white">Downloader</span></span>
    </div>
    <Loading v-show="loading" />
    <div :class="{ invisible: loading }" class="flex flex-col items-center w-full gap-y-5">
      <input v-model="videoId" type="text" placeholder="VIDEO ID" class="text-center p-2 rounded-md text-black max-w-sm w-full">
      <button class="border-green-500 border-2 rounded-md py-2 px-4 w-48 text-center" @click="generateLink">
        Generate Link
      </button>
      <NuxtLink :class="{ invisible: !link }" :to="link" target="_blank" class="text-center border-2 border-teal-500 py-2 px-4 rounded-md w-48">
        Open
      </NuxtLink>
    </div>
  </div>
</template>
