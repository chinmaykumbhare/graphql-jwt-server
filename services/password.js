import bcrypt from "bcrypt";

export class Password {
    async generateHash(password) {
        // const password = process.env.HASING_SECRET;
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    }
    async compareHash(password, hash) {
        const response = await bcrypt.compare(password, hash);
        return response;
    }
}