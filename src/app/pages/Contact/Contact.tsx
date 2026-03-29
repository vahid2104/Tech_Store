import React, { useState } from "react";
import styles from "./contact.module.css";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    //Simulate sending email
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`min-h-screen bg-color-white ${styles.mainBox}`}>
      {/* Hero Section */}
      <div className={`w-full gradient-header ${styles.heroSection}`}>
        <div className="container flex justify-center">
          <div className={`text-center ${styles.heroText}`}>
            <h1 className="text-4xl">Get In Touch</h1>
            <p className="text-lg color-foreground">
              Have a question or feedback? We'd love to hear from you. Send us a
              message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`container flex flex-col items-center gap-lg ${styles.containerBox}`}
      >
        <div className="flex flex-wrap gap-md justify-between">
          {/* Contact Informations */}
          <div className={`flex flex-col gap-lg ${styles.contactInfo}`}>
            <div>
              <h2 className="text-2xl">Contact Informations</h2>
              <p className="color-foreground">
                Feel free to reach out through any of these channels. Our team
                is here to help!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-md">
              {/* Email */}
              <div className="box-border border-radius padding flex gap-md">
                <div className={`${styles.iconCard}`}>
                  <Mail className={`${styles.infoIcons}`} />
                </div>
                <div className="flex flex-col gap-sm">
                  <h3 className="margin-block-none">Email Us</h3>
                  <a
                    href="mailto:support@techstore.com"
                    className={`${styles.contactA}`}
                  >
                    support@techstore.com
                  </a>
                  <p className="text-sm color-foreground margin-block-none">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
              {/* Phone */}
              <div className="box-border border-radius padding flex gap-md">
                <div className={`${styles.iconCard}`}>
                  <Phone className={`${styles.infoIcons}`} />
                </div>
                <div className="flex flex-col gap-sm">
                  <h3 className="margin-block-none">Call Us</h3>
                  <a href="tel:+18008324786" className={`${styles.contactA}`}>
                    1-800-TECH-STORE
                  </a>
                  <p className="text-sm color-foreground margin-block-none">
                    Mon-Fri: 9am - 6pm EST
                  </p>
                </div>
              </div>
              {/* Address */}
              <div className="box-border border-radius padding flex gap-md">
                <div className={`${styles.iconCard}`}>
                  <MapPin className={`${styles.infoIcons}`} />
                </div>
                <div className="flex flex-col gap-sm">
                  <h3 className="margin-block-none">Visit Us</h3>
                  <p className="text-sm color-foreground margin-block-none">
                    123 Tech Avenue
                    <br />
                    San Francisco, CA 94105
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-color-gray padding border-radius">
              <h3 className="margin-block-none">Business Hours</h3>
              <div className="flex justify-between margin-t">
                <span className="color-foreground">Monday - Friday</span>
                <span className="text-semibold">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="color-foreground">Saturday</span>
                <span className="text-semibold">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="color-foreground">Sunday</span>
                <span className="text-semibold">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.contactForm} box-border border-radius`}>
            <h2 className="margin-block-none">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="w-full h-full flex flex-col items-center justify-center padding">
                <div
                  className={`flex items-center justify-center ${styles.successIconDiv}`}
                >
                  <CheckCircle className={`${styles.successIcon}`} />
                </div>
                <h3 className="text-xl">Message Sent Successfully!</h3>
                <p className="color-foreground text-center">
                  Thank you for contacting us. We'll get back to you as soon as
                  possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-md">
                <div className={`flex gap-md ${styles.responsiveInput}`}>
                  <Input
                    label="Your Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="John Maximoff"
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <Input
                  label="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  required
                  placeholder="How can we help you?"
                />

                <div>
                  <label
                    htmlFor="textarea"
                    className="w-full text-semibold"
                    style={{ fontSize: "0.875rem", color: "#1a1a1a" }}
                  >
                    Message
                  </label>
                  <textarea
                    className={`w-full box-border border-radius padding margin-t text-lg border-box ${styles.textarea}`}
                    id="textarea"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="box-border bg-color-gray border-radius padding">
                  <p className="text-sm color-foreground margin-block-none">
                    <strong>Note: </strong>
                    We typically respond within 24 hours during business days.
                    For urgent matters, please call us directly.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="gap-md"
                >
                  {isSubmitting ? (
                    <>
                      <div className={`${styles.spinner}`} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
        {/* FAQ Section */}
        <div className={`flex flex-col gap-lg ${styles.faqSection}`}>
          <div className="text-center">
            <h2 className={`margin-block-none ${styles.faqSectionTitle}`}>
              Frequently Asked Questions
            </h2>
            <p className="color-foreground">
              Find quick answers to common questions
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-md">
            <div
              className={`box-border border-radius padding ${styles.faqBoxes}`}
            >
              <h3 className="margin-block-none">
                What are your shipping options?
              </h3>
              <p className="text-sm color-foreground">
                We offer standard (5-7 days), express (2-3 days), and overnight
                shipping. Free standard shipping on orders over $50.
              </p>
            </div>
            <div
              className={`box-border border-radius padding ${styles.faqBoxes}`}
            >
              <h3 className="margin-block-none">What is your return policy?</h3>
              <p className="text-sm color-foreground">
                We accept returns within 30 days of delivery. Items must be in
                original, unused condition with all packaging.
              </p>
            </div>
            <div
              className={`box-border border-radius padding ${styles.faqBoxes}`}
            >
              <h3 className="margin-block-none">
                Do you offer warranty on products?
              </h3>
              <p className="text-sm color-foreground">
                All products come with manufacturer warranty. Extended warranty
                options are available at checkout.
              </p>
            </div>
            <div
              className={`box-border border-radius padding ${styles.faqBoxes}`}
            >
              <h3 className="margin-block-none">How can I track my order?</h3>
              <p className="text-sm color-foreground">
                Once shipped, you'll receive a tracking number via email. You
                can also track orders in your account dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
