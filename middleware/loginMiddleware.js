
const authMiddleware = (req, res, next) => {
    const token = req.headers['authorization']; 
  
    if (!token) {
      return res.status(401).json({ message: 'Acceso no autorizado, Token no ha sido proporcionado.' });
    }
  
    next();
  };
  
  module.exports = authMiddleware;
  