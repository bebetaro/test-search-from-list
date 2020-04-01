import faker from 'faker'

export const data: string[] = []

for (let i = 0; i < 300000; i++) {
  const fake = faker.name.findName()
  data.push(fake)
}