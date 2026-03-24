import {
  Briefcase,
  Coffee,
  Globe,
  Heart,
  TrendingUp,
  Users,
} from "lucide-react";
import styles from "./careers.module.css";
import { Link } from "react-router-dom";

export default function Careers() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health insurance, dental, vision, and mental health support.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Professional development budget, training programs, and clear career paths.",
    },
    {
      icon: Globe,
      title: "Remote Friendly",
      description:
        "Flexible work arrangements with remote and hybrid options available.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO, flexible hours, and unlimited sick days.",
    },
    {
      icon: Users,
      title: "Great Team",
      description:
        "Collaborative culture with team events and inclusive environment.",
    },
    {
      icon: Briefcase,
      title: "Competitive Pay",
      description:
        "Market-leading salaries, equity options, and performance bonuses.",
    },
  ];

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description:
        "Build and scale our e-commerce platform using modern web technologies.",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      description:
        "Lead product strategy and execution for our customer experience initiatives.",
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description:
        "Help customers get the most value from their technology purchases.",
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description:
        "Develop and execute marketing campaigns to grow our brand and customer base.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description:
        "Create beautiful, intuitive experiences that delight our customers.",
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description:
        "Turn data into insights that drive business decisions and growth.",
    },
  ];

  const hiringProcess = [
    {
      step: "1",
      title: "Apply",
      description: "Submit your application and resume",
    },
    {
      step: "2",
      title: "Screen",
      description: "Phone or video screen with our team",
    },
    {
      step: "3",
      title: "Interview",
      description: "In-depth interviews with the team",
    },
    {
      step: "4",
      title: "Offer",
      description: "Reference checks and offer letter",
    },
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className={`w-full gradient-header ${styles.heroSection}`}>
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-4xl margin-block-none">
            Bringing Technology <br />
            to Everyone
          </h1>
          <p className={`text-lg color-foreground ${styles.heroP}`}>
            Founded in 2020, TechStore has been dedicated to making the latest
            technology accessible, affordable, and easy to understand for
            everyone.
          </p>
          <a href="#positions" className={`${styles.Link}`}>
            View Open Positions
          </a>
        </div>
      </div>

      <div className={`container ${styles.containerBox}`}>
        {/* Why Join Us */}
        <div className="flex flex-col gap-lg">
          <div className="text-center">
            <h2 className="text-3xl">Why Join TechStore?</h2>
            <p className="color-foreground">
              We're building something special, and we want you to be part of
              it.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            {benefits.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${styles.benefitsDiv} box-border border-radius box-shadow`}
                >
                  <div className={`${styles.benefitsIcon}`}>
                    <Icon />
                  </div>
                  <h3>{value.title}</h3>
                  <p className="color-foreground margin-block-none">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Culture */}
        <div className="flex flex-wrap justify-between">
          <div className={`${styles.cultureBox}`}>
            <h2 className="text-3xl">Our Culture</h2>
            <div className="color-foreground">
              <p>
                At TechStore, we believe that great work comes from happy,
                empowered people. We've built a culture that values:
              </p>
              <ul className={`${styles.cultureContentUl}`}>
                <li className="flex gap-md">
                  <div className={`${styles.cultureListTypeDiv}`}>
                    <div className={`${styles.cultureListType}`} />
                  </div>
                  <span>
                    <strong>Ownership:</strong> Take initiative, make decisions,
                    and own your work
                  </span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.cultureListTypeDiv}`}>
                    <div className={`${styles.cultureListType}`} />
                  </div>
                  <span>
                    <strong>Collaboration:</strong> Work together, share
                    knowledge, help each other succeed
                  </span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.cultureListTypeDiv}`}>
                    <div className={`${styles.cultureListType}`} />
                  </div>
                  <span>
                    <strong>Innovation:</strong> Try new things, learn from
                    failures, always improve
                  </span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.cultureListTypeDiv}`}>
                    <div className={`${styles.cultureListType}`} />
                  </div>
                  <span>
                    <strong>Customer Focus:</strong> Put customers first in
                    everything we do
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${styles.cultureBox}`}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Team collaboration"
              className={`${styles.cultureImg}`}
            />
          </div>
        </div>

        {/* Open Positions */}
        <div id="positions" className="flex flex-col items-center gap-lg">
          <div className="w-full text-center">
            <h2 className="text-3xl">Open Positions</h2>
            <p className="color-foreground">
              Find your next opportunity and join our growing team
            </p>
          </div>
          <div className="w-full flex flex-col gap-lg">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="box-border box-shadow padding border-radius flex flex-wrap items-center justify-between"
              >
                <div>
                  <div className="flex items-center gap-md">
                    <h3 className="margin-block-none">{position.title}</h3>
                    <span className={`${styles.positionLabel}`}>
                      {position.department}
                    </span>
                  </div>
                  <p className="color-foreground">{position.description}</p>
                  <div className="color-foreground flex flex-wrap gap-md items-center">
                    <span className="flex items-center gap-sm text-sm">
                      <Globe className={`${styles.positionIcon}`} />
                      {position.location}
                    </span>
                    <span className="flex items-center gap-sm text-sm">
                      <Briefcase className={`${styles.positionIcon}`} />
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`${styles.Link} ${styles.positionLink}`}
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="flex flex-col items-center text-center gap-lg">
          <div>
            <h2 className="text-3xl">Our Hiring Process</h2>
            <p className="color-foreground">
              We've designed our process to be transparent, fair, and respectful
              of your time.
            </p>
          </div>
          <div className="flex justify-between flex-wrap">
            {hiringProcess.map((item, index) => (
              <div
                key={index}
                className={`box-border padding border-radius ${styles.processBox}`}
              >
                <div>
                  <span className={`${styles.processStep}`}>{item.step}</span>
                </div>
                <h3 className="margin-block-none">{item.title}</h3>
                <p className="color-foreground margin-block-none">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`box-border ${styles.ctaDiv}`}>
          <h2 className="text-3xl margin-block-none">
            Don't See a Perfect Fit?
          </h2>
          <p className="color-foreground">
            We're always looking for talented people. Send us your resume and
            tell us why you'd be great for TechStore.
          </p>
          <Link to="/contact" className={`${styles.Link}`}>
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
