import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Shield, Loader2 } from "lucide-react";

const onboardingSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" }),
  mobile: z.string()
    .trim()
    .regex(/^[6-9]\d{9}$/, { message: "Please enter a valid 10-digit Indian mobile number" }),
  pancard: z.string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, { message: "Please enter a valid PAN card number (e.g., ABCDE1234F)" }),
  bankName: z.string()
    .trim()
    .min(2, { message: "Bank name is required" })
    .max(100, { message: "Bank name must be less than 100 characters" }),
  accountNumber: z.string()
    .trim()
    .regex(/^\d{9,18}$/, { message: "Account number must be 9-18 digits" }),
  ifscCode: z.string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{4}0[A-Z0-9]{6}$/, { message: "Please enter a valid IFSC code" }),
  currentJob: z.string()
    .trim()
    .min(2, { message: "Job description is required" })
    .max(200, { message: "Job description must be less than 200 characters" }),
  immediateGoals: z.string()
    .trim()
    .max(500, { message: "Immediate goals must be less than 500 characters" })
    .optional(),
  shortTermGoals: z.string()
    .trim()
    .max(500, { message: "Short term goals must be less than 500 characters" })
    .optional(),
  longTermGoals: z.string()
    .trim()
    .max(500, { message: "Long term goals must be less than 500 characters" })
    .optional(),
});

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

export default function Onboarding() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "",
      mobile: "",
      pancard: "",
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      currentJob: "",
      immediateGoals: "",
      shortTermGoals: "",
      longTermGoals: "",
    },
  });

  const onSubmit = async (data: OnboardingFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call to fetch credit card info and CIBIL score using PAN
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Store data (in a real app, this would go to Lovable Cloud)
      console.log("User onboarding data:", data);
      
      toast({
        title: "Profile Created Successfully! 🎉",
        description: "Your financial profile has been set up. Redirecting to dashboard...",
      });
      
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to MuneemAI
          </h1>
          <p className="text-muted-foreground">Let's set up your financial profile to get started</p>
        </div>

        <Card className="shadow-xl border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Your Information
            </CardTitle>
            <CardDescription>
              All information is encrypted and secure. We'll use your PAN to fetch credit card info and CIBIL score.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Details</h3>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mobile Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter 10-digit mobile number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="pancard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>PAN Card Number *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., ABCDE1234F" 
                            {...field}
                            onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                          />
                        </FormControl>
                        <FormDescription>
                          We'll use this to fetch your credit card info and CIBIL score
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="currentJob"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Job/Work *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Delivery Partner, Freelance Driver" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Bank Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Bank Details</h3>
                  
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., State Bank of India" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your bank account number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="ifscCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>IFSC Code *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="e.g., SBIN0001234" 
                            {...field}
                            onChange={(e) => field.onChange(e.target.value.toUpperCase())}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Financial Goals */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Financial Goals</h3>
                  
                  <FormField
                    control={form.control}
                    name="immediateGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Immediate Goals (Next 1-3 months)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="e.g., Save for new phone, clear small debts"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="shortTermGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Term Goals (3-12 months)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="e.g., Save for vehicle down payment, build emergency fund"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="longTermGoals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Long Term Goals (1+ years)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="e.g., Buy own house, children's education, retirement planning"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Setting up your profile...
                    </>
                  ) : (
                    "Complete Setup"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Shield className="h-4 w-4" />
            Your data is encrypted and secure
          </p>
        </div>
      </div>
    </div>
  );
}
