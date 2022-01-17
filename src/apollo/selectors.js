export const postsListSelector = (res) => {
  if (res.loading) return res

  return {
    error: res.error,
    loading: res.loading,
    data: res.data.posts.data,
    meta: res.data.posts.meta
  }
}