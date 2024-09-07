import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const db=new pg.Client({
  user:'postgres',
  database:'melicious',
  password:'a1b2c3@#',
  host:'localhost',
  port:5432
});

db.connect();

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/melicious", async(req, res) => {
  try{
  const data = await db.query('SELECT * FROM urls');
  const items = data.rows;
  const linksArray = items.map(item => item.link);
  res.json(linksArray) ;
  }
  catch(err){
    console.log(err);
  }
});


app.post('/report', async (req, res) => {
  const link = req.body.link;
  
  // Validate the link
  if (!link) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  try {
    await db.query("INSERT INTO public.urls (link) VALUES ($1)", [link]);
    res.json({ message: 'URL reported successfully', link });
  } catch (err) {
    console.error(err); // Log the error
    res.status(500).json({ error: 'Database error', details: err });
  }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });