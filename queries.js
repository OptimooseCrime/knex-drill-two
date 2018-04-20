const database = require("./database-connection");

module.exports = {
    list(){
      return database('coffee')
    },
    read(id){
      return database('coffee')
        .where('id', id)
    },
    create(coffee){
      return database('coffee')
        .insert(coffee)
        .returning('*')
        .then(record => record[0])
    },
    update(id, coffee){
      return database('coffee')
        .update(coffee)
        .where('id', id)
        .returning('*')
    },
    delete(id){
      return database('coffee')
      .where('id', id)
      .del()
    }
}
