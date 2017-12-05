module.exports = {
    
        login: (req, res, next) => {
            const dbInstance = req.app.get('db')
            const { session } = req;
            const { username, password } = req.body;
        },
    
        register: (req, res, next) => {
            const dbInstance = req.app.get('db')
            const { session } = req;
            const { username, password } = req.body;
            
            dbInstance.register([ username, password ])
                .then( () => res.status(200).send() )
                .catch( () => res.status(500).send() );
        },
    
        logout: (req, res, next) => {
            const { session } = req;
            session.destroy();
            res.status(200).send();
        }
    }