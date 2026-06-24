import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-royal-blue text-white">
      <div className="section-container pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              
              <div>
                <span className="font-bold text-xl text-white">
                  Powerlink Electrical
                </span>
                <span className="font-bold text-xl text-royal-yellow">
                  {" "}
                  Services
                </span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Professional electrical services for buildings and banks. Quality
              work, guaranteed safety.
            </p>

            {/* Social Media Links - REMEMBER TO UPDATE THE URLs! */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/YourPageName"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-royal-yellow"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.twitter.com/YourHandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-royal-yellow"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-royal-yellow"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-royal-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-royal-yellow">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Building Setup
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Bank Winding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Electrical Maintenance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Safety Inspections
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-royal-yellow">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-royal-yellow mr-3 mt-0.5" />
                <span className="text-gray-300">
                  Office no 1473, Abu Huraria Block, Lahore, Punjab, Pakistan
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-royal-yellow mr-3" />
                <a
                  href="tel:+923016581220"
                  className="text-gray-300 hover:text-white"
                >
                  +92 3004343234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-royal-yellow mr-3" />
                <a
                  href="mailto:info@powerlink.com"
                  className="text-gray-300 hover:text-white"
                >
                  info@powerlink.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Powerlink Electrical Services. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
