const adminMiddleware = async (req, res, next) => {
    try {
        const adminRole = req.user.isAdmin;

        if(!adminRole){
            return res.status(403).json({ message: "Access denied. User is not admin. "});
        }
        // res.status(200).json({messasge : req.user.isAdmin})
        next();
    } catch (error) {
        return res.status(401).json({ message: "Error in admin authentication." });
    }
}

module.exports = adminMiddleware;