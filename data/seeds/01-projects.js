
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Sprint', description: 'Get 3 stars', completed: true},
        {id: 2, name: 'Build Week', description: 'Get 3 stars', completed: false},
        {id: 3, name: 'Labs', description: 'Do amazing!', completed: false},
      ]);
    });
};
