import axios from 'axios'
import * as fs from 'fs'

export const downloadUnsplashImage = async (filepath: string) => {
  const url = 'https://source.unsplash.com/random/1600x900'
  const writer = fs.createWriteStream(filepath)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}
