const jwt = require('jsonwebtoken')

//leemos de consola los parametros [ node, filename, option, secret, nameOrToken] en ese orden
// node para ejecutarlo, el filename seria index.js, option={verify or sign}, secret, nameortoken
// node index.js sign mysecret token1
const [ , , option, secret, nameOrToken ] = process.argv;

if ( !option || !secret || ! nameOrToken) {
    return console.log("missing arguments");
}

function signToken(payload, secret) {
    return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
    return jwt.verify(token, secret);
}

if (option=='sign') {
    console.log(signToken( {sub: nameOrToken}, secret ));
} else if (option=='verify') {
    console.log(verifyToken(nameOrToken, secret))
} else {
    console.log("option needs to be sign or verify")
}
// jwt.io es una web que me permite analizar el token y decodificarlo
//el iat del payload es el tiempo en que se creo