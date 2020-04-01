import { data } from './constants'

export const filterData = (text: string, page: number) => data.slice(page * 1000, page * 1000 + 1000).filter(name => name.toUpperCase().includes(text.toUpperCase()))