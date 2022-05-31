const authMiddleware = {
    auth:(request,response,next)=>{
        if(request.session.autorizado){
        return next();
    }
}
}








module.exports = authMiddleware;