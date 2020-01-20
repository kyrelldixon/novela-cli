import * as fs from 'fs'
import * as yaml from 'js-yaml'

interface Social {
  url: string;
}

interface Author {
  name: string;
  bio: string;
  avatar: string;
  featured?: boolean;
  slug?: string;
  social?: Social[];
}

export const fetchAuthors = (path: string) => {
  try {
    if (!fs.existsSync(path)) {
      throw new Error(`No file found at ${path}`)
    }

    const fileContents = fs.readFileSync(path, 'utf8')
    const authors: Author[] = yaml.safeLoad(fileContents)

    return authors
  } catch (error) {
    throw error
  }
}
