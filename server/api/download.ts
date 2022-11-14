export default eventHandler(async (event) => {
  const url = 'https://api19-core-useast5.us.tiktokv.com/aweme/v1/feed/'
  return $fetch(url, {
    params: useQuery(event),
  })
})
