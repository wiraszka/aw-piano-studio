import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema } from '@shared/schema';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      receiveUpdates: false
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us! We'll get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: any) => {
    mutate(data);
  };

  return (
    <section id="contact" className="section-padding bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-center">
            <span className="text-primary">Contact</span>
          </h2>
          <div className="title-underline mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Interested in piano lessons or have a question? Fill out the form below, and we'll get back to you promptly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            {/* Contact Form */}
            <Form {...form}>
              <form 
                onSubmit={form.handleSubmit(onSubmit)} 
                className="bg-white text-gray-800 rounded-lg shadow-lg p-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 font-medium mb-2">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Your name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 font-medium mb-2">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="Your email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 font-medium mb-2">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          placeholder="Your phone number" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="block text-gray-700 font-medium mb-2">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={5}
                          placeholder="Your message" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="receiveUpdates"
                  render={({ field }) => (
                    <FormItem className="mb-6 flex items-start space-x-2">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-gray-600 font-normal cursor-pointer">
                        I agree to receive emails about lessons, events, and studio updates. We respect your privacy and will never share your information.
                      </FormLabel>
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full py-3 bg-primary hover:bg-opacity-90 text-white font-medium rounded-lg transition duration-300"
                >
                  {isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-semibold mb-6">Get in Touch</h3>
              <p className="mb-6">
                Whether you're interested in starting lessons, have questions about our programs, or want to discuss performance opportunities, we're here to help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-piano-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Phone</h4>
                    <p>226-456-0457</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-piano-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Email</h4>
                    <p>adam.wirasz@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-piano-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-secondary">Response Time</h4>
                    <p>We respond to all inquiries within 24 hours during business days.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
