"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { redirect } from "next/navigation";
const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            email: user.email,
            password: user.password,
            name: user.name,
            image: user.image
        })
        if (data) {
            redirect('/login');
        }
        if (error) {
            console.log(error.message);
        }
    }
    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="mx-auto max-w-7xl">
            <div>
                <h1 className="text-3xl text-center mt-10">Create Account</h1>
            </div>
            <Card className="border rounded-none my-5">
                <Form onSubmit={onSubmit} className="flex w-96 flex-col gap-4" >
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your Name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>
                    <TextField
                        name="image"
                        type="url"
                    >
                        <Label>Image</Label>
                        <Input placeholder="Enter your Image URL (Optional)" />
                        <FieldError />
                    </TextField>
                    <div className="flex flex-col justify-center gap-2">
                        <Button className="w-full mt-5" type="submit">
                            <Check />
                            Submit
                        </Button>
                    </div>
                </Form>
                <Button onClick={handleGoogleSignin} className="w-full" variant="tertiary">
                    Sign in with Google
                </Button>
            </Card>
        </div>
    );
};

export default SignUpPage;