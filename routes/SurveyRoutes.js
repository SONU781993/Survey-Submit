//const requireLogin= require('../middleware/requireLogin');
module.exports=(app)=>{
  app.post('/api/surveys/SurveysNew',async (req, res)=>{
    const data=
  res.send(req.body);
  const user=  req.user.save();
  console.log(user);
  });
}
