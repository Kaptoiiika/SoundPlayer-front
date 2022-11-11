export interface AudioModel {
  id: number

  name: string

  size: number

  duratation: number

  fileName: string

  peaks?: number[]

  authorId?: number
}
