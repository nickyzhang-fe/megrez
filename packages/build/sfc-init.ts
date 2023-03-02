#! /usr/bin/env node
// 参考https://github.com/team-innovation/vue-sfc-rollup/blob/master/sfc-init.js
const path = require('path')
const fs = require('fs')
const readlineSync = require('readline-sync')

// 小写转驼峰
const pascalify = (str) => {
  const camelized = str.replace(/-([a-z])/g, (c) => c[1].toUpperCase())
  return camelized.charAt(0).toUpperCase() + camelized.slice(1)
}

// Helper to replace vars in files
const replaceVars = (str, vars) => {
  let newstr = str
  Object.keys(vars).forEach((key) => {
    const rx = new RegExp('{{\\s?' + key + '\\s?}}', 'g')
    newstr = newstr.replace(rx, vars[key])
  })
  return newstr
}

/**
 * 判断文件夹存在
 * @param filePath
 */
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath)
  if (fs.existsSync(dirname)) {
    return true
  }
  ensureDirectoryExists(dirname)
  fs.mkdirSync(dirname)
}

const npmName = readlineSync.question(
  'What is the npm name of your component? ',
)
const [scope, component] = npmName.split('/')
console.log(42, scope, component)
const pathName = readlineSync.question('What is the path of your component? ')
const componentPath = pathName
  ? `/components/${scope}/${pathName}`
  : `/components/${scope}`
const savePath = readlineSync.questionPath(
  `Save the component files to: (.${componentPath})`,
  {
    defaultInput: path.join(
      path.resolve(__dirname, `..${componentPath}`),
      component,
    ),
    exists: false,
    isDirectory: true,
    create: true,
  },
)
// Stop prompting for input, start processing
const componentName = `${scope}/${component}`
const componentNamePascal = pascalify(componentName)
const vars = {
  npmName,
  componentName,
  componentNamePascal,
  pathName,
}
console.log(59, vars)

const newFiles = {
  package: '',
  component: '',
  edit: '',
}
const templatePath = path.join(__dirname, '../template')
console.log(75, templatePath)
newFiles.package = replaceVars(
  fs.readFileSync(path.join(templatePath, 'package.json')).toString(),
  vars,
)
newFiles.component = replaceVars(
  fs.readFileSync(path.join(templatePath, 'src', 'index.vue')).toString(),
  vars,
)

newFiles.edit = replaceVars(
  fs.readFileSync(path.join(templatePath, 'src', 'edit.vue')).toString(),
  vars,
)
console.log(89, newFiles)
console.log(90, savePath)
const paths = {
  package: path.join(savePath, 'package.json'),
  component: path.join(savePath, 'src', 'index.vue'),
  edit: path.join(savePath, 'src', 'edit.vue'),
}

Object.keys(paths).forEach((key) => {
  ensureDirectoryExists(paths[key])
  fs.writeFileSync(paths[key], newFiles[key])
})

// Display completion messages
console.log(
  '\n' +
    'Init is complete, your files have been generated and saved into ' +
    'the directory you specified above.' +
    '\n' +
    'Within that directory, use src/components/' +
    `${scope}/${component}` +
    'index.vue or edit.vue as a ' +
    'starting point for your SFC.' +
    '\n' +
    "When you're ready, open url http://local.boss.qidian.com/noah2/activity/demo/" +
    `${scope}/${component}` +
    '@0.0.0' +
    '\n\n',
)
