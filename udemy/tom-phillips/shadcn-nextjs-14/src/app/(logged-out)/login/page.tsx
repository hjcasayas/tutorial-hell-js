'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonStandingIcon } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

type FormValuesType = z.infer<typeof formSchema>;

function LoginPage() {
    const form = useForm<FormValuesType>({ resolver: zodResolver(formSchema), defaultValues: { email: '', password: '' } });
    const handleSubmit = (values: FormValuesType) => {
        console.log('Submitted');
    };

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Login to your SupportMe Account</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is the email address you signed up to SupportMe with
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Pasword</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Pasword" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Don't have an account?</small> <Button size='sm' variant='outline' asChild><Link href='/sign-up'>Sign Up</Link></Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default LoginPage;