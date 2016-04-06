/**
 * Meal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      title: {
          type: "text",
          required: true
      },
      calories: {
          type: "integer",
          required: true
      },
      eatenAt: {
          type: "datetime",
          required: true
      },      
      owner: {
          model: 'User',
          index: true
      }

  }
};

