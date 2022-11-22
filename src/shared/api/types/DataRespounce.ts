export interface DataRespounce<T> {
  data: {
    id: number
    attributes: Omit<T, "id">
  }
}

export interface ManyDataRespounce<T> {
  data: {
    id: number
    attributes: Omit<T, "id">
  }[]
}
