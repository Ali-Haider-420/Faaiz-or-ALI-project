"use client";

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendEmail } from "@/app/actions"; // Import our new Server Action

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // --- THIS IS THE MAIN CHANGE ---
  // The function is now async to wait for the server action
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a FormData object from the form element
    const formElement = e.currentTarget;
    const formDataObj = new FormData(formElement);
    
    // Call the server action and wait for the result
    const result = await sendEmail(formDataObj);

    // Handle the result from the server
    if (result.success) {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      // Clear the form fields on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      // Show an error toast if something went wrong
      toast({
        title: "Uh oh! Something went wrong.",
        description: result.message || "There was a problem with your request.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false); // Re-enable the button
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="w-full"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(+92) 300-1234567"
          className="w-full"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project needs and location info..."
          required
          className="min-h-[120px] w-full"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full md:w-auto btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
