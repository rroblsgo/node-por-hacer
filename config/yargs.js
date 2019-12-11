const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Actualizar una tarea por hacer'
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca la tarea como pendiente o completada'
};

const argv = require('yargs')
  .command('crear', 'Crear una tarea', {
    descripcion
  })
  .command('actualizar', 'Actualizar una tarea', {
    descripcion,
    completado
  })
  .command('borrar', 'Borrar una tarea', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}
