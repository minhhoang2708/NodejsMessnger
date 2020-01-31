import session from 'express-session';
import connectMongo from 'connect-mongo';

let MongoStore = connectMongo(session);

// Cấu hình cho việc lưu session trong mongodatabase, default là nó lưu trong RAM, 
// sẽ rất tốn dung lượng khi đẩy lên server.
let sessionStore = new MongoStore({
  url: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  autoReconnect: true,
  autoRemove: "native"
})


let configSession = (app) => {
  app.use(session({
    cookie: { maxAge: 1000*60*60 *24 },
    secret: 'mySecret',
    resave: true,
    saveUninitialized: false, 
    store: sessionStore 
  }));
}

module.exports = configSession;