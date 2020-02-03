const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  if(err){
      console.log('Unable to Connect to mongodb Server');
  }
  console.log('Connected to MongoDb server');

  const db = client.db('TodoApp')
                        // Printing all the items in a collection
    //  db.collection('Todos').find().toArray().then((docs) => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs,undefined,2));
    //  }), (err) => {
    //    console.log('Unable to fetch Todos',err);
    //  }

               //Deleting Many Items from the collection

          db.collection('Todos').deleteMany({name:"Gain john"})
          .then((result)=>{
                 console.log(result); 
          }),(err) => {
            console.log('Unable to delete items',err);
          }     

  client.close();

});

