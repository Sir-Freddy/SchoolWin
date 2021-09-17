import mongoose from 'mongoose';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import passport from 'passport';
import passportLocal from 'passport-local';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import User from './User';
import Feed from './FeedBack';
import dotenv from 'dotenv';

import {
  UserInterface,
  DatabaseUserInterface,
  DatabaseForumInterface,
  DatabaseFeedBackInterface,
  DatabaseContactInterface
} from './Interfaces';
import Forum from './Forum';
import ForumJs from './ForumJs';
import Contact from './Contact';
const LocalStrategy = passportLocal.Strategy;

dotenv.config();

mongoose.connect(
  `mongodb+srv://admin:admin@cluster0.ecqwp.mongodb.net/schoolwin?retryWrites=true&w=majority`,
  {
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
    if (err) throw err;
    console.log('Connected To Mongo');
  }
);

// Middleware
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
// Passport
passport.use(
  new LocalStrategy((username: string, password: string, done) => {
    User.findOne({ username: username }, (err, user: DatabaseUserInterface) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result: boolean) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  })
);

passport.serializeUser((user: DatabaseUserInterface, cb) => {
  cb(null, user._id);
});

passport.deserializeUser((id: string, cb) => {
  User.findOne({ _id: id }, (err, user: DatabaseUserInterface) => {
    const userInformation: UserInterface = {
      username: user.username,
      isAdmin: user.isAdmin,
      level: user.level,
      progression: user.progression,
      feedBack: user.feedBack,
      prenom: user.prenom,
      nom: user.nom,
      email: user.email,
      classe: user.classe,
      id: user._id,
      emailValidate: user.emailValidate
    };
    cb(err, userInformation);
  });
});

// Routes

app.post('/feedback', async (req, res) => {
  const { msg, type, firstname, star1, star2, star3, star4, star5 } = req?.body;

  Feed.findOne(
    { msg, type, firstname, star1, star2, star3, star4, star5 },
    async (err, doc: DatabaseFeedBackInterface) => {
      if (!doc) {
        const newFeed = new Feed({
          type,
          msg,
          firstname,
          star1,
          star2,
          star3,
          star4,
          star5,
          time: new Date()
        });
        await newFeed.save();
        res.send('success');
      }
    }
  );
});

app.get('/feed', async (req, res) => {
  const result = await Feed.find({});
  return res.json(result);
});

app.get('/forumMessage', async (req, res) => {
  const result = await Forum.find({});
  return res.json(result);
});

app.get('/contact', async (req, res) => {
  const result = await Contact.find({});
  return res.json(result);
});

app.get('/forumMessageJs', async (req, res) => {
  const result = await ForumJs.find({});
  return res.json(result);
});

app.post('/forum', async (req, res) => {
  const { type, msg, msgCreated, subject, subjectCreated, username } =
    req?.body;
  Forum.findOne(
    { type, username, msg, msgCreated, subject, subjectCreated },
    async (err, doc: DatabaseForumInterface) => {
      if (!doc) {
        const newForum = new Forum({
          type,
          msg,
          username,
          msgCreated,
          subject,
          subjectCreated,
          time: new Date()
        });
        await newForum.save();
        res.send('success');
      }
    }
  );
});

app.post('/forumjs', async (req, res) => {
  const { type, msg, msgCreated, subject, subjectCreated, username } =
    req?.body;
  ForumJs.findOne(
    { type, username, msg, msgCreated, subject, subjectCreated },
    async (err, doc: DatabaseForumInterface) => {
      if (!doc) {
        const newForum = new ForumJs({
          type,
          msg,
          username,
          msgCreated,
          subject,
          subjectCreated,
          time: new Date()
        });
        await newForum.save();
        res.send('success');
      }
    }
  );
});

app.post('/contact', async (req, res) => {
  const { type, msg, email, nom, phone } = req?.body;
  Contact.findOne(
    { type, email, msg, nom, phone },
    async (err, doc: DatabaseContactInterface) => {
      if (!doc) {
        const newContact = new Contact({
          type,
          msg,
          phone,
          email,
          nom,
          time: new Date()
        });
        await newContact.save();
        res.send('success');
      }
    }
  );
});

app.post('/register', async (req, res) => {
  const { username, password, prenom, nom, email, classe, _id } = req?.body;

  if (
    !username ||
    !password ||
    typeof username !== 'string' ||
    typeof password !== 'string'
  ) {
    res.send('Improper Values');
    return;
  }
  User.findOne({ username, email }, async (err, doc: DatabaseUserInterface) => {
    if (err) throw err;
    if (doc) res.send('User Already Exists');
    if (!doc) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        prenom,
        nom,
        email,
        classe,
        password: hashedPassword
      });
      await newUser.save();
      res.send('success');
    }
  });
});

const isAdministratorMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user }: any = req;
  if (user) {
    User.findOne(
      { username: user.username },
      (err, doc: DatabaseUserInterface) => {
        if (err) throw err;
        if (doc?.isAdmin) {
          next();
        } else {
          res.send("Sorry, only admin's can perform this.");
        }
      }
    );
  } else {
    res.send('Sorry, you arent logged in.');
  }
};

app.post('/login', passport.authenticate('local'), async (req, res) => {
  await res.send('success');
});

app.get('/user', (req, res) => {
  res.send(req.user);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.send('success');
});

app.post('/deleteuser', isAdministratorMiddleware, async (req, res) => {
  const { id } = req?.body;
  await User.findByIdAndDelete(id, (err) => {
    if (err) throw err;
  });
  res.send('success');
});

app.put('/user/:id', async ({ body, params }, res) => {
  const { level, progression, isAdmin } = body;
  const itemId = params.id;
  if (!level && !isAdmin && !progression) {
    return res.status(400).send({ error: 'Probleme' });
  }

  const result = await User.findOneAndUpdate({ _id: itemId }, body, {
    new: true
  });

  return res.json(result);
});

app.get('/getallusers', async (req, res) => {
  await User.find({}, (err, data: DatabaseUserInterface[]) => {
    if (err) throw err;
    const filteredUsers: UserInterface[] = [];
    data.forEach((item: DatabaseUserInterface) => {
      const userInformation = {
        id: item._id,
        username: item.username,
        prenom: item.prenom,
        nom: item.nom,
        email: item.email,
        classe: item.classe,
        isAdmin: item.isAdmin,
        feedBack: item.feedBack,
        progression: item.progression,
        level: item.level,
        emailValidate: item.emailValidate
      };
      filteredUsers.push(userInformation);
    });
    res.send(filteredUsers);
  });
});

app.listen(4000, () => {
  console.log('Server Started');
});
