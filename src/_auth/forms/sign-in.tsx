import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SigninValidation } from "@/lib/validation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/auth-context";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/loader";
import { useSignInAccount } from "@/lib/react-query/queries";

function SignIn() {
    const navigate = useNavigate();
    const { toast } = useToast();
    const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

    const { mutateAsync: signInAccount, isPending } = useSignInAccount();

    const form = useForm<z.infer<typeof SigninValidation>>({
        resolver: zodResolver(SigninValidation),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const handleSignin = async (user: z.infer<typeof SigninValidation>) => {

        const session = await signInAccount(user);

        if (!session) {
            toast({ title: "Login failed. Please try again." });

            return;
        }

        const isLoggedIn = await checkAuthUser();

        if (isLoggedIn) {
            form.reset();

            navigate("/")
        } else {
            toast({ title: "Login failed. Please try again.", })
        }
    };

    return (
        <Form {...form}>
            <div className="sm:w-420 flex-center flex-col">
                <img src="/assets/images/logo.svg" alt="logo" />
                <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
                    Log in to your account
                </h2>
                <p className="text-light-3 small-medium md:base-regular mt-2">
                    Welcome back! Please enter your details.
                </p>
                <form
                    onSubmit={form.handleSubmit(handleSignin)}
                    className="flex flex-col gap-5 w-full mt-4"
                >
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Email</FormLabel>
                            <FormControl>
                                <Input type="text" className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="shad-form_label">Password</FormLabel>
                            <FormControl>
                                <Input type="password" className="shad-input" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <Button type="submit" className="shad-button_primary">
                        {isPending || isUserLoading ? (
                            <div className="flex-center gap-2">
                                <Loader />
                            </div>
                        ) : (
                            "Log in"
                        )}
                    </Button>
                </form>
            </div>
        </Form>
    );
}

export default SignIn;