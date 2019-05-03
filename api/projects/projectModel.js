const db = require('../../data/dbConfig.js');

module.exports = {
  find,
  findById,
  addProject,
  addAction,
};


function find() {
  return db('projects');
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function addProject(project) {

  return db('projects')
    .insert(project, 'id')
    .then(([id]) => {
      return findById(id);
    });
}

function addAction(action) {

  return db('actions')
    .insert(action, 'id')
    .then(([id]) => {
      return findById(id);
    });
}
