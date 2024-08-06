const express= require('express');
const app = express();
const port = 3000;
app.use(express.json());
app.get('/',(req,res)=>{res.send('Hello world form the backend!');});

app.post('/post', (req, res) => {
    const {username} = req.body();

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    // Process the username (e.g., save to database)
    console.log(`Received username: ${username}`);

    // Send a response back to the client
    res.status(200).send(username);
});


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});