const { promisify } = require("util")
const fs = require("fs")

/**
 * Returns an array of the names of the files contained in folderPath
 */
const getAnimalPictures = async () => {
  const readdir = promisify(fs.readdir)
  const files = await readdir("./public/images").catch((err) => {
    console.error(`Error reading images: ${err}`)
  })
  return files
}

const writeDataFile = async (file, obj) => {
  const asyncWriteFile = promisify(fs.writeFile)

  await asyncWriteFile(file, JSON.stringify(obj))
    .then(console.info("😸 Pet data file created succesfully"))
    .catch(e => console.error(`Error creating data file for pets : ${e}`))
}


/* Entry point, gets animal data from the picture folder and generates a JSON data file */
(async () => {
  console.info("🐶 Creating our animal data list")

  const paths = await getAnimalPictures()
  const names = paths.map(picture => picture.split('.')[0])

  if (paths.length !== names.length) {
    console.error("Error retrieving animal data")
    return
  }

  const animalData = paths.map((imagePath, index) => {
    return {
      path: imagePath,
      name: names[index]
    }
  })

  await writeDataFile('./src/animals.json', animalData)
})()

