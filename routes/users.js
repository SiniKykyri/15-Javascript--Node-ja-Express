var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Tänne pääsee user juttulin kautta');
});

/* GET metodi*/
router.get('/toka' ,function(request,response)
{
    response.send('Olen toka reitti');
}
);
/*GET metodi yhdellä parametrilla*/
router.get('/kolmas/:name',function(request, response){
  response.send('Heippa  ' +request.params.name)

}
);
/*GET metodi kahdella parametrilla*/
router.get('/neljas/:fname/:lname',function(request, response){
  response.send('Heippa  ' +request.params.fname+' ' + request.params.lname);

}
);

/*POST metodi*/

router.post('/', function(request,response)
{
  response.send(request.body.fname+ ' ' +request.body.lname)
}
);

module.exports = router;
