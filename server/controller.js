const db = require('../db/');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students

      let queryStr = 'select * from students left outer join images on students.id = images.id'

      db.query(queryStr, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(result)
        }
      })


    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      db.query(`insert into students (name) values ("${req.body.name}")`, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(result)
        }
      })

    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      let { name } = req.body

      db.query(`update students set name = "${name}" where id = ${req.params.id}`, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(result)
        }
      })

    }
  },

  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      let { imgurl } = req.body

      db.query(`insert into images (imgurl) values ("${imgurl}")`, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send(result)
        }
      })

    }
  }
};

module.exports = controller