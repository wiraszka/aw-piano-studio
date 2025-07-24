import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Google Maps API key endpoint
  app.get("/api/maps-key", async (req: Request, res: Response) => {
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ message: "Google Maps API key not configured" });
    }
    res.json({ apiKey });
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const result = insertContactSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.format() 
        });
      }
      
      // Store the contact submission
      const contact = await storage.createContactSubmission(result.data);
      
      // Send email notification (would be configured with actual SMTP settings in production)
      try {
        if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: process.env.SMTP_SECURE === "true",
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          });
          
          await transporter.sendMail({
            from: `"AW Music Studios" <${process.env.SMTP_USER}>`,
            to: "adam.wirasz@gmail.com",
            subject: `New Contact Form Submission from AW Piano Studio`,
            text: `
              Name: ${contact.name}
              Email: ${contact.email}
              Phone: ${contact.phone || 'Not provided'}
              
              Message:
              ${contact.message}
              
              Receive Updates: ${contact.receiveUpdates ? 'Yes' : 'No'}
            `,
            html: `
              <h2>New Contact Form Submission</h2>
              <p><strong>Name:</strong> ${contact.name}</p>
              <p><strong>Email:</strong> ${contact.email}</p>
              <p><strong>Phone:</strong> ${contact.phone || 'Not provided'}</p>
              <p><strong>Message:</strong></p>
              <p>${contact.message.replace(/\n/g, '<br>')}</p>
              <p><strong>Receive Updates:</strong> ${contact.receiveUpdates ? 'Yes' : 'No'}</p>
            `
          });
        }
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // Don't fail the request if email sending fails
      }
      
      return res.status(201).json({ 
        message: "Contact form submitted successfully", 
        id: contact.id 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  // Get all contact submissions (would be admin protected in production)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ message: "An error occurred while fetching contact submissions" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
