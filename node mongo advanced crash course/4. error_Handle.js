//COMMON JS:
// const { errorHandle } = require('./import export.js')
// console.log(errorHandle)
import { errorHandle } from "./import export.js"
try {
    // undefined.find()
    // new Error()
    // new Error(message)
    // new Error(message, options)
    // new Error(message, fileName)
    // new Error(message, fileName, lineNumber)

    // Error()
    // Error(message)
    // Error(message, options)
    // Error(message, fileName)
    // Error(message, fileName, lineNumber)
    const emailError = new Error("Email already exists")
    throw emailError
}
catch (err) {
    errorHandle(err)
}



// function errorHandle(error) {
//     const { name, message, stack } = error
//     console.log(message)
// }