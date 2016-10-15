export interface IPost {
  id: number,
  title: string,
  body: string,
  userId: number
}

export interface IPostData {
  userId: number,
  title: string,
  body: string
}