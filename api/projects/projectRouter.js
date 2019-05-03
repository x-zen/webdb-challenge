const router = require('express').Router();

const Db = require('./projectModel.js');


router.get('/', (req, res) => {
  Db.find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: 'We ran into an error retrieving the projects' });
    });
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Db.findById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ message: 'We could not find the project' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'We ran into an error retrieving the project' });
  }
});

router.post('/', async (req, res) => {
  const project = req.body;

  if (project.name) {
    try {
      const inserted = await Db.addProject(project);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the project' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the project' });
  }
});

router.post('/act', async (req, res) => {
  const action = req.body;

  if (action.name) {
    try {
      const inserted = await Db.addAction(action);
      res.status(201).json(inserted);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'We ran into an error creating the action' });
    }
  } else {
    res.status(400).json({ message: 'Please provide name of the action' });
  }
});
module.exports = router;
