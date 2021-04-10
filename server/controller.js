const db = require('../db/');

const controller = {
  students: {
    getStudents: function (req, res) {
      // TODO: add your code here to fetch all students
      const queryStr='SELECT * FROM students INNER JOIN images on students.id=images.id'
      db.query(queryStr, (err, result)=>{
        if(err){
          res.status(400).send(err)
        }else{
          res.status(200).send(result)
        }
      })
    },
    postName: function (req, res) {
      // TODO: add your code here to add a student's name
      const {name} = req.body;
      const queryStr= `INSERT INTO students (name) VALUES ('${name}')`;
      db.query(queryStr, (err, result)=>{
        if(err){
          res.status(400).send(err)
        }else{
          res.status(200).send(result)
        }
      })
    },
    updateName: function (req, res) {
      // TODO: add your code here to update a student's name
      const id=req.params.id;
      const {name}=req.body;
      const queryStr=`UPDATE students SET name = '${name}' WHERE id=${id}`;
      db.query(queryStr, (err, result)=>{
        if(err){
          res.status(400).send(err)
        }else{
          res.status(200).send(result)
        }
      })
    }
  },

  images: {
    postImg: function (req, res) {
      // TODO: add your code here to add a student image
      const {imgurl}=req.body;
      const queryStr=`INSERT INTO images (imgurl) VALUES ('${imgurl}')`
      db.query(queryStr, (err, result)=>{
        if(err){
          res.status(400).send(err)
        }else{
          res.status(200).send(result)
        }
      })
    }
  }
};

module.exports = controller