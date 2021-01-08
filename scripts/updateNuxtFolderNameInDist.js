const fs = require('fs')

// directory paths
const oldDirName = 'Dist/_nuxt'
const newDirName = 'Dist/nuxt'

// rename the directory
try {
  fs.renameSync(oldDirName, newDirName);

  console.log("Nuxt folder in /dist renamed successfully.")

} catch (err) {
  console.log(err);
}
