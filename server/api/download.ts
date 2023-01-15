import type { QueryValue } from 'ufo'
import type { RootObject } from './../../types/tiktok'
export default eventHandler(async (event) => {
  const paramURL: QueryValue | QueryValue[] = getQuery(event).url
  const path = paramURL?.toString()?.split(/[?#]/)[0]
  const videoId = path?.substring(path.lastIndexOf('/') + 1, path.length)
  const url = 'https://api.tiktokv.com/aweme/v1/feed/'
  const data: RootObject = await $fetch(url, {
    params: {
      aweme_id: videoId,
    },
  })
  const video = await $fetch<Blob>(data?.aweme_list[0].video.play_addr.url_list[0] ?? '')
  const arrayBuffer = await video.arrayBuffer()
  event.node.res.setHeader('Content-Disposition', 'attachment; filename=download.mp4')
  event.node.res.setHeader('Content-Type', event.node.req.headers['content-type'] || '')
  event.node.res.writeHead(200)
  event.node.res.write(Buffer.from(arrayBuffer))
  event.node.res.end()
})
