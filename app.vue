<script setup lang="ts">
const url = ref('')
const path = '/api/download'
const router = useRouter()
const download = async () => {
  if (url.value) {
    const routeData = router.resolve({
      path,
      query: {
        url: url.value,
      },
    })
    window.open(routeData.href, '_blank')
  }
}
</script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center justify-center space-y-10">
    <div class="flex flex-col">
      <span class="absolute flex h-2 w-2 animate-ping place-self-end rounded-full bg-red-500 opacity-75" />
      <span class="relative text-center text-7xl font-extrabold text-yellow-500 ">TikTok <span class="text-white">Downloader</span></span>
    </div>

    <div class="flex w-full flex-col items-center gap-y-5">
      <input v-model="url" type="text" placeholder="Paste URL here" class="w-full max-w-sm rounded-md p-2 text-center text-black">
      <button class="w-48 rounded-md border-2 border-green-500 py-2 px-4 text-center" @click="download">
        Download
      </button>
    </div>
  </div>
</template>
