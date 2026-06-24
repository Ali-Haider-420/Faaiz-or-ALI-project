"use client";

import { useEffect } from "react";
import Image from "next/image";
// NOTE: We are now using the base Card components directly here
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import { Bolt, Shield, Lightbulb, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

// Data for the services is now organized here for easier management
const services = [
  {
    id: 1,
    imageSrc: "/wiring.jpg",
    title: "Commercial & Residential Wiring",
    description:
      "Complete electrical installations for new buildings, renovations, and expansions. We handle everything from initial design to final fixture installation.",
  },
  {
    id: 2,
    imageSrc: "/solar.jpg",
    title: "Solar Panel Installation",
    description:
      "Power your future with clean energy. We provide expert installation of high-efficiency solar panel systems for both homes and businesses.",
  },
  {
    id: 3,
    imageSrc: "/panel.jpg",
    title: "Power Systems & Upgrades",
    description:
      "Modernize your electrical infrastructure. We specialize in high-voltage work, electrical panel changes, and complete system upgrades.",
  },
  {
    id: 4,
    imageSrc: "/safety.jpg",
    title: "Safety Audits & Earthing",
    description:
      "Ensure your property is safe and compliant. We offer comprehensive safety inspections and professional earthing solutions for all property types.",
  },
  
];

export default function Page() {
  // Your fade-in animation useEffect hook stays the same
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      element.classList.add("opacity-0");
      observer.observe(element);
    });
    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* ======== NEW AND IMPROVED HERO SECTION ======== */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/hero-background.jpg"
          alt="An inspiring image of electrical infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Powering The Future With{" "}
              <span className="text-royal-yellow">Powerlink Electrical Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Professional electrical services specializing in building setup
              and bank winding solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              {/* Secondary Button */}
              <Button
                variant="outline"
                className="text-lg text-royal-darkgray border-white/80 hover:bg-white/60"
                asChild
              >
                {<a href="#services">Our Services</a>}
              </Button>
              
              {/* Primary Button */}
              <Button
                className="text-lg bg-green text-royal-darkgray font-semibold hover:bg-green/90"
                asChild
              >
                {<a href="#contact">Contact us</a>}
              </Button>
            </div>

            {/* MOVED SCROLL DOWN LINK HERE */}
            <a
              href="#services"
              className="flex flex-col items-center text-white hover:text-royal-yellow transition-colors pt-4"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <svg
                className="animate-bounce w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
          {/* THE ABSOLUTE DIV HAS BEEN REMOVED FROM HERE */}
        </div>
      </section>

      {/* ======== UPGRADED SERVICES SECTION (4-COLUMN LAYOUT) ======== */}
      <section id="services" className="bg-royal-gray py-20">
        <div className="section-container animate-on-scroll">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">
            We deliver reliable electrical solutions for buildings and financial
            institutions, focusing on safety, quality, and efficiency.
          </p>
          {/* THE ONLY CHANGE IS HERE: lg:grid-cols-4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {services.map((service) => (
              <Card
                key={service.id}
                className="w-full rounded-lg overflow-hidden shadow-lg flex flex-col p-0 
                           transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="flex flex-col flex-grow p-4">
                  <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-0">
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="bg-white">
        <div className="section-container animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/teammates.jpg"
                  alt="Royal Energy Solutions team"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-royal-blue rounded-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-royal-yellow rounded-full p-2">
                    <Lightbulb className="h-8 w-8 text-royal-blue" />
                  </div>
                  <div>
                    <p className="text-white font-bold">10+</p>
                    <p className="text-gray-200 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-royal-blue">
                Your Trusted Electrical Partner Since 2015
              </h2>
              <p className="text-gray-600">
                Powerlink Electrical services was born from a powerful
                partnership between two industry experts, Muhammad Faaiz
                and wasif ul Rahman. They shared a unified vision: to create an
                electrical contracting company that would set a new standard for
                quality, safety, and reliability across Pakistan.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-royal-yellow rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-royal-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-blue">
                      Certified Professionals
                    </h3>
                    <p className="text-gray-600">
                      Our team consists of licensed electricians with
                      specialized training.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-royal-yellow rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-royal-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-blue">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      We adhere to the highest industry standards and safety
                      protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-royal-yellow rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="h-4 w-4 text-royal-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal-blue">
                      Timely Delivery
                    </h3>
                    <p className="text-gray-600">
                      We understand the importance of deadlines and budget
                      constraints.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className="bg-royal-blue text-white hover:bg-royal-lightblue mt-4"
                asChild
              >
                {<a href="#contact">Work With Us</a>}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-royal-blue text-white">
        <div className="section-container animate-on-scroll">
          <h2 className="section-title text-white">Why Choose Powerlink Electrical</h2>
          <p className="section-subtitle text-gray-200">
            We&apos;re committed to excellence in everything we do, providing
            electrical solutions that you can depend on.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
              <div className="bg-royal-yellow rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-royal-yellow">
                Safety First
              </h3>
              <p className="text-gray-200">
                We prioritize safety in every project, ensuring all
                installations meet stringent safety standards.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
              <div className="bg-royal-yellow rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-royal-yellow">
                Innovative Solutions
              </h3>
              <p className="text-gray-200">
                We leverage the latest technologies to provide energy-efficient
                and forward-thinking electrical systems.
              </p>
            </div>
            <div className="p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300">
              <div className="bg-royal-yellow rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wrench className="h-7 w-7 text-royal-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-royal-yellow">
                Reliable Service
              </h3>
              <p className="text-gray-200">
                From initial consultation to project completion, our team
                provides dependable service you can count on.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-royal-gray">
        <div className="section-container animate-on-scroll">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it. Hear from businesses
            we&apos;ve helped with their electrical needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard
              quote="Powerlink Electrical Services handled our entire office building's electrical setup with incredible professionalism. The project was completed on time and within budget."
              name="Muhammad Usman"
              position="Facility Manager, Horizon Tower"
            />
            <TestimonialCard
              quote="The team at powerlink Electrical provided exceptional service for our bank branch renovation. Their expertise in financial institution requirements was impressive."
              name="Sarah Rehman"
              position="Operations Director, Allied Bank"
            />
            <TestimonialCard
              quote="We've been using Powerlink Electrical for all our maintenance needs for over 5 years. Their response time and quality of work are unmatched in the industry."
              name="khaliq Mahmood"
              position="Property Manager, Summit Buildings"
            />
          </div>
        </div>
      </section>

      <section className="bg-royal-blue text-white">
        <div className="section-container py-16 flex flex-col items-center text-center animate-on-scroll">
          <Bolt className="h-16 w-16 text-royal-yellow mb-6 animate-pulse-light" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-3xl">
            Ready to Transform Your Electrical Infrastructure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Contact us today for a consultation and free quote for your building
            or banking institution.
          </p>
          <Button className="btn-secondary text-lg px-8 py-3" asChild>
            {<a href="#contact">Get Started</a>}
          </Button>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="section-container animate-on-scroll">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            Have a project in mind? Get in touch with our team to discuss your
            electrical needs.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-royal-blue mb-4">
                  Our Office
                </h3>
                <p className="text-gray-600">
                  Office no 1473,
                  <br />
                  Lahore
                  <br />
                  Punjab Pakistan
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-royal-blue mb-4">
                  Contact Information
                </h3>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> +92 3004343234
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> info@powerlink.com
                </p>
                <p className="text-gray-600">
                  <strong>Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-royal-blue mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-royal-blue hover:text-royal-lightblue"
                  >
                    {/* ... Facebook svg ... */}
                  </a>
                  <a
                    href="#"
                    className="text-royal-blue hover:text-royal-lightblue"
                  >
                    {/* ... Twitter svg ... */}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal-blue hover:text-royal-lightblue"
                  >
                    {/* ... LinkedIn svg ... */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div> // This is the closing tag for <div className="min-h-screen">
  );
}
