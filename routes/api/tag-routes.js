const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({include: [{ model: Product}]})
  .then((TagData)=>{
    res.json(TagData)
    // include: [{ model: Product }],
     });
    // ,

});


router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findByPk(req.params.id, {include: [{model: Product}]
  }).then((TagData)=>{
    res.json(TagData);
  })
  
  });


router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then(()=>{
    res.json(req.body);
  })
});


router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {where: {id: req.params.id,}},
    
    )
    .then((c)=>{
      res.json(`Tag id: ${req.params.id} updated`);
 })
});


router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy(
    {where: {id: req.params.id,}},
    )
    .then((TagData)=>{
      res.json(`Tag id: ${req.params.id} removed`);
 })


});


module.exports = router;
