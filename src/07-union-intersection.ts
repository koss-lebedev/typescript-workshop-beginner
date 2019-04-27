type StringOrNumber = string | number

type Area = {
  width: number
  height: number
}

type AreaWithUnit = Area & {
  unit: string
}
