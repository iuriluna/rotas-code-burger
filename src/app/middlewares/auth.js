import  jwt  from 'jsonwebtoken'
import authConfig from '../../config/auth.js'

export default (request, response, next) => {
    const authToken = request.headers.authorization

    if(!authToken){
        return response.status(401).json({error: 'Token não enviado'})
    }

    const token = authToken.split(' ')[1]

    try {
        jwt.verify(token, authConfig.secret, function(err, dedoced){
            if(err){
                throw new Error()
            }

            request.userId = dedoced.id
            request.userName = dedoced.name

            return next()

        })
    }catch(err){
        return response.status(401).json({ error: 'Token inválido' })
    }

    

}
