
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'leet code', notes: '', completed: true, project_id: '1'},
        {id: 2, description: 'win win win', notes: '', completed: true, project_id: '1'},
        {id: 3, description: 'leet code', notes: '', completed: false, project_id: '2'},
        {id: 4, description: 'win win win', notes: '', completed: false, project_id: '2'},
        {id: 5, description: 'leet code', notes: '', completed: false, project_id: '3'},
        {id: 6, description: 'win win win', notes: '', completed: false, project_id: '3'}
      ]);
    });
};
