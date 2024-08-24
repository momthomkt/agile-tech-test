export type postType = {
  id: string,
  title: string,
  description: string,
  tags: string | string[]
}

export type getPostType = {
  posts: postType[],
  current_page: number,
  total_page: number,
  page_size: number,
  total: number
}

export type dataPagingType = {
  current_page: number,
  total_page: number,
  page_size: number,
  total: number
}