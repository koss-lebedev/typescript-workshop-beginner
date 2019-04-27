/* GENERICS */

type Boxed<T> = {
  value: T
}

const unbox = (box) => {
  return box.value
}
