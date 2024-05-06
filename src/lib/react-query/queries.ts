import { useMutation } from "@tanstack/react-query"
import { createUserAccount, signInAccount } from "../appwrite/api"
import { INewUser } from "@/types"

export const useSignInAccount = () => {
    return useMutation({
        mutationFn: (user: { email: string, password: string }) => signInAccount(user),
    })
}

export const useCreateUserAccount = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};