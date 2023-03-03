import jwt from "jsonwebtoken";

export class JWT {
    async generateToken(payload) {
        let token = "";
        const secret = process.env.JWT_SECRET;
        const options = {
            expiresIn: '30m'
        }
        try {
            token = await jwt.sign(payload, secret, options);
        } catch (error) {
            throw new Error(error);
        }
        return token;
    }
    async verifyToken(token) {
        let data = null;
        try {
            data = await jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error(error);
        }
        return data;
    }
}