'use client';

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, PersonStandingIcon, Router } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { formSchema, FormValuesType } from "./_schemas/form.schema";
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

function SignUpPage() {
    const form = useForm<FormValuesType>({
        resolver: zodResolver(formSchema), defaultValues: {
            email: '',
            password: '',
            passwordConfirm: '',
            companyName: '',
        }
    });
    const router = useRouter();

    const handleSubmit = (values: FormValuesType) => {
        console.log('Validation passed', values);
        router.push('/dashboard');
    };

    const accountType = form.watch('accountType');

    const fromDate = useMemo(() => {
        const oneHundredTwentYearsAgo = new Date();
        oneHundredTwentYearsAgo.setFullYear(oneHundredTwentYearsAgo.getFullYear() - 120);
        return oneHundredTwentYearsAgo;
    }, []);

    return (
        <>
            <PersonStandingIcon size={50} />
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Sign up for a new SupportMe Account</CardDescription>
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
                                            <Input placeholder="johndoe@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='accountType'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Account Type</FormLabel>
                                        <Select onValueChange={field.onChange}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select an account type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="personal">Personal</SelectItem>
                                                <SelectItem value="company">Company</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {
                                accountType === 'company' ? (
                                    <>
                                        <FormField
                                            control={form.control}
                                            name='companyName'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Company Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Company name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name='numberOfEmployees'
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Number of Employees</FormLabel>
                                                    <FormControl>
                                                        <Input type="number" min={0} placeholder="Number of employees" {...field} value={field.value ?? ""} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </>
                                ) : null
                            }

                            <FormField
                                control={form.control}
                                name="dob"
                                render={({ field }) => (
                                    <FormItem className="flex flex-col pt-2">
                                        <FormLabel>Date of birth</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={"outline"}
                                                        className="flex flex-row justify-between normal-case"
                                                    >
                                                        {field.value ? (
                                                            format(field.value, "PPP")
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    defaultMonth={field.value}
                                                    onSelect={field.onChange}
                                                    initialFocus
                                                    fixedWeeks
                                                    weekStartsOn={1}
                                                    fromDate={fromDate}
                                                    toDate={new Date()}
                                                    captionLayout='dropdown-buttons'
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="passwordConfirm"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl>
                                            <PasswordInput placeholder="••••••••" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='termsAndCondition'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                        </FormControl>
                                        <div className="flex flex-row gap-2 items-center">
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                            <FormLabel>
                                                I accept the terms and conditions.
                                            </FormLabel>
                                        </div>
                                        <FormDescription>
                                            By signing you agree to our <Link href='/terms' className="text-primary hover:underline">terms and conditons</Link>
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit">Sign Up</Button>
                        </form>
                    </Form>
                </CardContent>
                <CardFooter className="justify-between">
                    <small>Already have an account?</small> <Button size='sm' variant='outline' asChild><Link href='/login'>Login</Link></Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default SignUpPage;