'use strict';

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema( {
  firstName: {type:String, required: true},
  lastName: {type: String, required: true},
  availabilityDate: {type: [], required: true},
  submitted: {type: Date, default: Date.now, unique: true},
});

module.exports = mongoose.model('team', teamSchema);
