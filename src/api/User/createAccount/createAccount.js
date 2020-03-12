import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createAccount: async (_, args) => {
            const { username, email, firstName = "", lastName = "", bio = "" } = args;
            const exists_name = await prisma.$exists.user({ username });
            const exists_email = await prisma.$exists.user({ email });
            if (exists_name) {
                throw Error("This username is already taken");
                return;
            }
            if (exists_email) {
                throw Error("This email is already taken");
                return;
            }
            try {
                await prisma.createUser({
                    username,
                    email,
                    firstName,
                    lastName,
                    bio
                });
                return true;
            } catch (e) {
                console.error(e);
                return false;
            }
        }
    }
};