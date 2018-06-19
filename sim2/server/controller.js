module.exports = {
    login: function(req, res){
        req.app.get('db').get_users().then(users => {
            const foundUser = users.find(current => {

                return (current.username == req.body.username && current.password == req.body.password);
            })

            if(foundUser){
                // console.log(foundUser, 'found a user match')
                req.session.user = {user_id: null, username: ''}
                req.session.user.user_id = foundUser.user_id;
                req.session.user.username = foundUser.username;
                console.log('session is', req.session.user)
                res.status(200).send(req.session.user)
            }else{
                console.log('unauthorized')
                res.sendStatus(500);
            }
        })
    },


    getProperties: function(req, res){
        if(req.query.filter){
            console.log('there are queries', req.session.user.user_id, req.query.filter)
            req.app.get('db').get_filtered_properties([req.session.user.user_id, req.query.filter]).then(properties =>
                // console.log(properties),
                res.status(200).send(properties)
            )
        }
        else{
            console.log('no filter')
            req.app.get('db').get_userprops([req.session.user.user_id]).then(properties => {
                res.send(properties)
            })
        }
    },

    postProperty: function(req, res){
        // console.log('req.body', req.body)
        // console.log('req.session', req.session.user.user_id)
        let {name, description, address, city, state, zip, image, loan, mortgage, rent} = req.body
        req.app.get('db').add_property([name, description, address, city, state, zip, image, loan, mortgage, rent, req.session.user.user_id]).then(property => {
            res.sendStatus(200)
        })
    },

    delete: function(req, res){
        req.app.get('db').delete_property([req.params.id]).then(reply => {
            res.sendStatus(200);
        })
    },
    
    register: function(req, res){
        
        req.app.get('db').register_user([req.body.username, req.body.password]).then(user =>{
            
            req.app.get('db').get_users().then(users => {

                const foundUser = users.find(current => {                    
                    return (current.username == req.body.username && current.password == req.body.password);
                })
                
                req.session.user = {user_id: null, username: ''}
                req.session.user.user_id = foundUser.user_id;
                req.session.user.username = foundUser.username;
                console.log('session is', req.session.user)
                res.status(200).send(req.session.user)
            
            
                res.sendStatus(200);
            })
        })

    }
    
}