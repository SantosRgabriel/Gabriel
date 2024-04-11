server.get ('/user',(req,res) => {
    db.query('SELECT * FROM user', (err, result) => {
        res.json({success: true, user: result});
    })
});