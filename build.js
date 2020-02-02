const Fs = require("fs")
const Path = require("path")
const Request = require("request")
const Zip = require("adm-zip")
const Rimraf = require("rimraf")

const ArchivePath = Path.join(__dirname, "feathericons.zip")
const SvgPath = Path.join(__dirname, "svg")
const IndexFilePath = Path.join(__dirname, "index.js")
const FeatherIconsUrl = "https://github.com/feathericons/feather/archive/master.zip"
const ComponentDirPath = Path.join(__dirname, "components")
const ComponentTemplate = "const m = require(\"mithril\")\n\
module.exports = { view: (vnode) => { return m.trust(`SVG`) } }"

function abort(e) {
  console.error(e)
  process.exit(1)
}

function download(url) {
  return new Promise((resolve, reject) => {
    let archive = Fs.createWriteStream(ArchivePath)
    console.log("Downloading latest version of Feather Icons from Github...")
    let req = Request({ uri: url })

    req.pipe(archive)

    req.on("finish", () => {
      archive.close()
    })

    req.on("error", (e) => {
      archive.close()
      Fs.unlinkSync(ArchivePath)
      reject(e)
    })

    archive.on("error", (e) => {
      archive.close()
      Fs.unlinkSync(ArchivePath)
      reject(e)
    })

    archive.on("close", () => resolve())

  })
}

function unzip(path) {
  console.log("Extracting archive...")
  let zipUtil = new Zip(path)
  zipUtil.extractEntryTo("feather-master/icons/", SvgPath, false, false)
}

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1)
}

String.prototype.toPascalCase = function() {
  let words = this.split("-")
  let capitalized = words.map((word) => word.capitalize())
  return capitalized.join("")
}

function renderSvg(svg) {
  let newSvg = svg.replace(/width="(\d+)"/, "width=\"${vnode.attrs.width || \"24\"}\"")
  newSvg = newSvg.replace(/height="(\d+)"/, "height=\"${vnode.attrs.height || \"24\"}\"")
  newSvg = newSvg.replace(/fill="(\w+)"/, "fill=\"${vnode.attrs.fill || \"none\"}\"")
  newSvg = newSvg.replace(/stroke="(\w+)"/, "stroke=\"${vnode.attrs.stroke || \"currentColor\"}\"")
  newSvg = newSvg.replace(/\n ?/g, "")
  return newSvg
}

function createComponent(iconSvgFile, iconName) {
  let iconSvgPath = Path.join(SvgPath, iconSvgFile)
  let iconComponentPath = Path.join(ComponentDirPath, `${iconName}.js`)
  let iconComponentFile = Fs.createWriteStream(iconComponentPath)
  let svg = Fs.readFileSync(iconSvgPath).toString()
  let renderedSvg = renderSvg(svg)
  let component = ComponentTemplate.replace("SVG", renderedSvg)
  iconComponentFile.write(component)
  iconComponentFile.close()
}

function cleanup() {
  console.log("Cleaning up...")
  Rimraf.sync(SvgPath)
  Fs.unlinkSync(ArchivePath)
}

function generateComponents() {
  console.log("Generating mithril components from svg files...")

  if (!Fs.existsSync(ComponentDirPath)) {
    Fs.mkdirSync(ComponentDirPath)
  }

  Fs.readdir(SvgPath, (e, files) => {
    if (e) abort(e)

    let indexFile = Fs.createWriteStream(IndexFilePath)
    let iconName = null

    indexFile.write("module.exports = {\n")

    files.forEach((file) => {
      iconName = file.split(".")[0].toPascalCase()
      createComponent(file, iconName)
      indexFile.write(`  ${iconName}: require("./components/${iconName}"),\n`)
    })

    indexFile.write("}")
    indexFile.close()
    cleanup()
    console.log("Done.")
  })
}


download(FeatherIconsUrl)
  .then(() => {
    unzip(ArchivePath)
    generateComponents()
  })
  .catch((e) => abort(e))
