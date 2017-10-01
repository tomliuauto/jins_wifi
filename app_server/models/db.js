var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/jinswifi';

// mongoose.connect(dbURI);

// mongoose.createConnection(uri, { server: { poolSize: 4 }});

mongoose.createConnection(dbURI);

// mongoose.connect(dbURI, {
//   socketTimeoutMS: 0,
//   keepAlive: true,
//   reconnectTries: 30
// });
