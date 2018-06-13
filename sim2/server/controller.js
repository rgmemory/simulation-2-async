module.exports = {
    login: function(req, res){
        req.app.get('db').get_users().then(users => {
            const foundUser = users.find(current => {

                return (current.username == req.body.username && current.password == req.body.password);
            })

            if(foundUser){
                req.session.user = {user_id: null, username: ''}
                req.session.user.user_id = foundUser.user_id;
                req.session.user.username = foundUser.username;
                res.status(200).send(req.session.user)
            }else{
                console.log('unauthorized')
                res.sendStatus(500);
            }

            res.sendStatus(200);
        })
    },


    getProperties: function(req, res){
        console.log('getpropsworks')
        req.app.get('db').get_properties().then(properties => {
            res.send(properties)
        })
    }
}