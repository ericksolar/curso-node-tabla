const argv = require('yargs')
        .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
        })
        .option('h',{
            alias: 'hasta',
            type: 'number',
            default: 10,
            describe: 'Es la multiplicando de la tablas'
        })
        .check(( argv , options ) =>{
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un numero'
            }
            return true;
        })
        .check(( argv , options ) =>{
            if( isNaN( argv.h ) ){
                throw 'hasta donde quieres la tabla'
            }
            return true;
        })
        .option('l',{
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola'
        })
        .argv;

module.exports = argv;
