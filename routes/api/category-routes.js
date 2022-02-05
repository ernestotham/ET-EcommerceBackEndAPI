const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({include: [{ model: Product}]})
  .then((categoryData)=>{
    res.json(categoryData)
    // include: [{ model: Product }],
     });
    // ,

})


router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
 Category.findByPk(req.params.id, {include: [{model: Product}]
}).then((categoryData)=>{
  res.json(categoryData);
})

})
  
  


router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then(()=>{
    res.json("Category Object created");
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {where: {id: req.params.id,}},
    
    )
    .then((c)=>{
      res.json(`Category ${req.params.id} Object was updated`);
 })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy(
    {where: {id: req.params.id,}},
    )
    .then((categoryData)=>{
      res.json(`Category ${req.params.id} Object was removed`);
 })


});

module.exports = router;
