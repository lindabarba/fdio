const Food = require('./../model/food');

const foodTruckController = {
  index: function(req, res, next) {
    Food.find({}, function(err, foods) {
      if (err) return res.redirect('/favorites');
      res.render('index', {foods: foods});
    });
  },

  new: function(req, res, next) {
    res.render('new', {foodItem: false});
  },

  create: function(req, res, next) {
    let food = new Food(req.body);
    food.save(function(err) {
      if (err) return res.redirect('/favorites/new');
      res.redirect('/favorites');
    });
  },

  show: function(req, res, next) {
    res.render('show');
  },

  edit: function(req, res, next) {
    Food.findById(req.params.id, function(err, data) {
      if (err) res.redirect('/favorites');
      res.render('edit', {foodItem: data})
    })
  },

  update: function(req, res, next) {
    Food.findByIdAndUpdate(req.params.id, req.body, function(err, food) {
      if (err) return res.render('favorites/' + req.params.id + '/edit');
      res.redirect('/favorites');
    });
  },

  delete: function(req, res, next) {
    Food.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.redirect('/favorites');
      res.redirect('/favorites');
    });
  },

  map: function(req, res, next) {
    res.render('map');
  }

};

module.exports = foodTruckController;
