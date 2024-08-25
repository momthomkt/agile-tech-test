import { Dispatch, SetStateAction } from 'react';
export type postType = {
  id: string,
  title: string,
  description: string,
  tags: any
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

export type postCreateEditType = {
  id: string,
  title: string,
  description: string,
  tags: string[]
}

export type PropCreateEditType = {
  post?: postCreateEditType,
  tags: string[],
  isModalOpen: boolean,
  setIsModalOpen: Dispatch<SetStateAction<boolean>>,
  fetchPost: (current_page?: number) => Promise<void>
}