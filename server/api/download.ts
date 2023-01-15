import type { RootObject } from './../../types/tiktok'
export default eventHandler(async (event) => {
  const paramURL: string = getQuery(event).url?.toString() || ''
  let path = paramURL.split(/[?#]/)[0]
  if (path.includes('tiktok')) {
    if (!path.includes('video')) {
      await $fetch(paramURL, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Encoding': 'gzip, deflate, br',
          'Accept-Language': 'en-US,en;q=0.9',
          'Connection': 'keep-alive',
        },
        onResponse: ({ response }) => {
          path = response.url.split(/[?#]/)[0]
        },
      })
    }
    const videoId = path.substring(path.lastIndexOf('/') + 1, path.length)
    if (videoId) {
      const url = 'https://api.tiktokv.com/aweme/v1/feed/'
      const data: RootObject = await $fetch(url, {
        params: {
          aweme_id: videoId,
        },
      })
      const video = await $fetch<Blob>(data?.aweme_list[0].video.play_addr.url_list[0] ?? '')
      const arrayBuffer = await video.arrayBuffer()
      event.node.res.setHeader('Content-Disposition', `attachment; filename=${videoId}.mp4`)
      event.node.res.setHeader('Content-Type', event.node.req.headers['content-type'] || '')
      event.node.res.writeHead(200)
      event.node.res.write(Buffer.from(arrayBuffer))
      event.node.res.end()
    }
  }
  return 'Video Not Found'
})
