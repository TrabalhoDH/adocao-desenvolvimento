const authMiddleware = {
    auth: (request, response, next) => {
        if (request.session.autorizado) {
            return next();
        }

        response.redirect('login');
    }
}








module.exports = authMiddleware;