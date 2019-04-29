type Article = {
  title: string
  content: string
  author: string
}

const testFunction = (article: Article) => {
  article.title = 'Some title'
  article.content = 'Lorem ipsum'
}

/* ----- */

type State = {
  colors: string[]
  isLoading: boolean
  name: string
}

const mapStateToProps = (state: State) => ({
  colors: state.colors,
})

type MapStateToPropsType = typeof mapStateToProps
