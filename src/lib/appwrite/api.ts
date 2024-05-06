import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";

export async function getAccount() {
    try {
        // const currentAccount = await 
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getCurrentUser() {
    try {
        // const currentAccount = await getAccount();
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function signInAccount(user: { email: string; password: string }) {
    try {
        const session = await account.createEmailPasswordSession(user.email, user.password);

        return session;
    } catch (error) {
        console.log(error);
    }
}

export async function saveUserToDB(user: {
    accountId: string;
    email: string;
    name: string;
    imageUrl: string;
    usernames: string
}) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            user
        );

        return newUser;
    } catch (error) {
        console.log(error);
    }
}

export async function createUserAccount(user: INewUser) {
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name
        );

        if (!newAccount) throw Error

        const avatarUrl = avatars.getInitials(user.name);

        const newUser = await save
    } catch (error) {
        console.log(error);
        return error;
    }
}