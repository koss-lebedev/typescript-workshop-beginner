import React, { SFC, Fragment, ReactNode } from 'react'

type RenderFn = () => ReactNode

type OuterProps = {
  content: string | RenderFn
}

const MyComponent: SFC<OuterProps> = ({ content }) => (
  <div>
    {}
  </div>
)

/* TESTING */

export const App = () => (
  <Fragment>
    <MyComponent content="Hello World" />
    <MyComponent content={() => <b>Hello world!</b>} />
  </Fragment>
)
