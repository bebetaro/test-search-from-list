import { data } from './constants'

export const filterData = (text: string) => data.filter(name => name.toUpperCase().includes(text.toUpperCase()))