import type { RootObject } from './../../types/tiktok'
export default eventHandler(async (event) => {
  const url = 'https://api.tiktokv.com/aweme/v1/feed/'
  const data = await $fetch<RootObject>(url, {
    params: getQuery(event),
  })
  const video = await $fetch<Blob>(data?.aweme_list[0].video.play_addr.url_list[0] ?? '')
  const arrayBuffer = await video.arrayBuffer()
  event.node.res.setHeader('Content-Disposition', 'attachment; filename=download.mp4')
  event.node.res.setHeader('Content-Type', event.node.req.headers['content-type'] || '')
  event.node.res.writeHead(200)
  event.node.res.write(Buffer.from(arrayBuffer))
  event.node.res.end()
})
