export interface AudioModel {
  id: number

  name: string

  size: number

  fileName: string

  peaks?: number[]

  duratation?: number

  authorId?: number
}
