import React from "react";
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card.tsx";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.tsx";

// <span className="text-lg font-heading inline-flex items-center gap-2">
//                     <span className="inline-flex items-center">{item.icon}</span>
//                     <span>{item.title}</span>
//                   </span>
export default function LoanRequestLoanDetails() {
    return (
        <div className="flex flex-col">
            <h2 className="font-heading font-medium text-3xl inline-flex items-center w-full pb-4 gap-2">
                <span className="icon-[ph--bank] inline-flex items-center"></span>
                Loan details
            </h2>
            <Card className="  border-0">
                <CardHeader>
                    <CardDescription>Help us understand the specifics of the loan you are applying for.</CardDescription>
                </CardHeader>
                <CardContent className=" font-paragraph flex flex-col gap-8">
                    <div className="flex flex-col gap-8 md:flex md:flex-row  md:gap-4 items-baseline">
                        <FormField
                            key="loanType"
                            name="loanType"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Loan type</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a loan type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Type 1">
                                                    Type 1
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>Choose the type of loan that best fits your needs</FormDescription>
                                    <FormMessage />
                                </FormItem>

                                )}
                        />

                        <FormField
                            key="numInstallments"
                            name="numInstallments"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Number of installments</FormLabel>
                                    <FormControl>
                                        <Select {...field}>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose a loan type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Type 1">
                                                    Type 1
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormDescription>Indicate the number of payments over which you want to repay the loan</FormDescription>
                                    <FormMessage />
                                </FormItem>

                            )}
                        />
                    </div>

                    <FormField
                        key="interestRateType"
                        name="interestRateType"
                        render={({ field }) => (
                            <FormItem className="md:w-1/2 md:pr-2">
                                <FormLabel>Interest rate type</FormLabel>
                                <FormControl>
                                    <Select {...field} defaultValue="0">
                                        <SelectTrigger>
                                            <SelectValue/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="0">
                                                Fixed
                                            </SelectItem>
                                            <SelectItem value="1">
                                                Variable
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormDescription>Select whether you prefer a fixed or variable interest rate.</FormDescription>
                                <FormMessage />
                            </FormItem>

                        )}
                    />
                </CardContent>
            </Card>
        </div>
    );
}