type Comment = {
  id: string
  content: string
}

type Article = {
  title: string
  content: string
  author: string
  comments: Comment[]
  meta: {
    publishedAt: Date
  }
}

export const processArticle = (article: Article) => {
  article.author = 'Jon'
  article.meta.publishedAt = new Date()
  article.comments.push({ id: '5', content: 'You suck!'})

  // do some processing...
}
