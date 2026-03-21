import { Award, Globe, Heart, Shield, Users, Zap } from "lucide-react";
import styles from "./about.module.css";

export default function About() {
  const stats = [
    { number: "500K+", label: "Happy Customers" },
    { number: "50K+", label: "Products Sold" },
    { number: "99.5%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring satisfaction with every purchase.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description:
        "Every product is carefully selected and tested to meet our high standards of quality.",
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description:
        "Quick shipping, responsive support, and hassle-free returns - we value your time.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "We listen to our customers and continuously improve based on your feedback.",
    },
    {
      icon: Award,
      title: "Expert Selection",
      description:
        "Our team of tech experts curates the best products so you don't have to.",
    },
    {
      icon: Globe,
      title: "Sustainable",
      description:
        "Committed to eco-friendly practices and sustainable business operations.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "Emily Watson",
      role: "Head of Customer Experience",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      name: "David Kim",
      role: "Director of Product",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
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
        </div>
      </div>

      <div className={`container ${styles.containerBox}`}>
        {/* Stats */}
        <div className="flex flex-wrap justify-between">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`box-border border-radius text-center ${styles.statsBox} box-shadow`}
            >
              <div className="text-3xl text-bold color-primary">
                {stat.number}
              </div>
              <div className="color-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Our Story */}
        <div className="flex flex-wrap justify-between">
          <div className={`${styles.storySectionBox}`}>
            <h2 className="text-3xl">Our Story</h2>
            <div className="color-foreground">
              <p>
                TechStore was born from a simple observation: buying technology
                shouldn't be complicated or overwhelming. Our founder, Sarah
                Chen, experienced firsthand how confusing it was to choose the
                right laptop for her small business.
              </p>
              <p>
                She envisioned a store where technology is presented clearly,
                honestly, and with the customer's needs in mind. A place where
                you can trust the recommendations, understand the differences,
                and make confident decisions.
              </p>
              <p>
                Today, we're proud to serve over 500,000 customers worldwide,
                helping them find the perfect technology solutions for work,
                creativity, and everyday life. Our commitment to quality,
                transparency, and exceptional service remains as strong as day
                one.
              </p>
            </div>
          </div>
          <div className={`${styles.storySectionBox}`}>
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Office"
              className={`${styles.storyImg}`}
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="flex flex-col gap-lg">
          <div className="text-center">
            <h2 className="text-3xl">Our Values</h2>
            <p className="color-foreground">
              These core principles guide everything we do and every decision we
              make.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`${styles.valuesDiv} box-border border-radius box-shadow`}
                >
                  <div className={`${styles.valuesIcon}`}>
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

        {/* Team*/}
        <div className="flex flex-col gap-lg">
          <div className="text-center">
            <h2 className="text-3xl">Meet Our Team</h2>
            <p className="color-foreground">
              The passionate people behind TechStore who work every day to bring
              you the best technology experience.
            </p>
          </div>
          <div className="flex flex-wrap justify-between">
            {team.map((member, index) => (
              <div
                key={index}
                className={`${styles.teamBox} box-border box-shadow`}
              >
                <div className={`${styles.teamImgDiv}`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`${styles.teamImg}`}
                  />
                </div>
                <div className={`${styles.teamContent}`}>
                  <h3 className="margin-block-none">{member.name}</h3>
                  <p className="margin-block-none color-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`${styles.missionBox} text-center`}>
          <h2 className="text-3xl">Our Mission</h2>
          <p className={`${styles.missionP} color-foreground text-xl`}>
            "To empower people through technology by providing carefully curated
            products, honest guidance, and exceptional service - making the
            digital world accessible to everyone."
          </p>
        </div>

        {/* Sustainability */}
        <div className="flex flex-wrap justify-between">
          <div className={`${styles.sustainabilityBox}`}>
            <img
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Sustainability"
              className={`${styles.sustainabilityImg}`}
            />
          </div>
          <div className={`${styles.sustainabilityBox}`}>
            <h2 className="text-3xl">Our Commitment to Sustainability</h2>
            <div className="color-foreground">
              <p>
                We believe in doing business responsibly. That's why we're
                committed to reducing our environmental impact and promoting
                sustainable practices throughout our operations.
              </p>
              <ul className={`${styles.sustainabilityContentUl}`}>
                <li className="flex gap-md">
                  <div className={`${styles.sustainabilityListTypeDiv}`}>
                    <div className={`${styles.sustainabilityListType}`} />
                  </div>
                  <span>
                    Eco-friendly packaging made from recycled materials
                  </span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.sustainabilityListTypeDiv}`}>
                    <div className={`${styles.sustainabilityListType}`} />
                  </div>
                  <span>Carbon-neutral shipping options available</span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.sustainabilityListTypeDiv}`}>
                    <div className={`${styles.sustainabilityListType}`} />
                  </div>
                  <span>Partnership with certified recycling programs</span>
                </li>
                <li className="flex gap-md">
                  <div className={`${styles.sustainabilityListTypeDiv}`}>
                    <div className={`${styles.sustainabilityListType}`} />
                  </div>
                  <span>Energy-efficient warehouse and office operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
