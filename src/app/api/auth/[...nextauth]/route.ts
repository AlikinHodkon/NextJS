import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";

const authOptions = {
    callback: {
        async signIn({ profile }: { profile: { login: string } }) {
            return profile.login === "AlikinHodkon"
        }
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }