import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ritesh*2000',
    database: 'students'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});

const createUser = (req, res) => {
    console.log("Hello");
    // const { username, password } = req.body;

    // if (!username || !password) {
    //     return res.status(400).json({ error: 'Username and password are required.' });
    // }

    // const user = { username, password };

    // connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    //     if (error) {
    //         console.error('Error signing up: ' + error);
    //         return res.status(500).json({ error: 'Error signing up. Please try again later.' });
    //     }
        
    //     console.log('User signed up successfully!');
    //     return res.status(201).json({ message: 'User signed up successfully!' });
    // });
};

export { createUser };
