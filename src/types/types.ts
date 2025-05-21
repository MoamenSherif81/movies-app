export interface IMovie {
  id: number
  name: string
  summary: string
  language: string
  runtime: number
  image: {
    original: string
    medium: string
  }
  premiered: string
  status: string
  rating: { average: number }
  genres: string[]
}

export interface ICastMember {
  person: Person
  character: Character
}

export interface Person {
  id: number
  url: string
  name: string
  country: {
    name: string
    code: string
    timezone: string
  }
  birthday: string | null
  deathday: string | null
  gender: string
  image: {
    medium: string
    original: string
  }
  updated: number
}

export interface Character {
  id: number
  url: string
  name: string
  image: {
    medium: string
    original: string
  }
}
