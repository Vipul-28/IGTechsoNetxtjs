import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";
import { escape } from "querystring";
 
export const authOptions: any = {
    // Configure one or more authentication providers
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials: any) {
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    console.log("heyy",user)
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        console.log(isPasswordCorrect)
                        if (isPasswordCorrect===true) {
                            console.log("hua")
                            return user;
                        }
                        else {
                    throw new Error("WSSs");

                        }
                    }
                } catch (err: any) {
                    throw new Error(err);
                }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }: { user: AuthUser; account: Account }) {
            if (account?.provider == "credentials") {
                return true;
            }
        },
    },
};
 
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };