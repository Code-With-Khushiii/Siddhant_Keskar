import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Menu, Linkedin, X, MapPin, BarChart3, Database, Brain, Code2, Wrench, LineChart, Workflow, Award, BookOpen, GraduationCap, ArrowUpRight, ExternalLink } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'summary', label: 'Summary' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'publications', label: 'Publications' },
  { id: 'contact', label: 'Contact' }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [photoFailed, setPhotoFailed] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const { id } of navItems) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Analyst with 2+ years of experience in product analytics, business analytics, SQL, Python, Power BI, statistical analysis, data visualisation, and ETL pipelines across enterprise and digital product environments. Analyzed user behaviour, engagement, funnel performance, and transaction data across 10,000+ monthly events, driving a 25% increase in active users and reducing production error rates by 30%. Delivered data pipelines, predictive analytics, dashboards, and AI-enabled workflows that improved reporting accuracy, automated high-volume processes, and reduced manual processing time by 75%.";

  const experience = [
    {
      company: "Prorigo Software Pvt. Ltd.",
      role: "Software Engineer (Data & ML)",
      location: "Pune, India",
      dates: "May 2024 – Aug 2025",
      highlights: [
        "Engineered a document extraction workflow using Python and Azure OpenAI for 5+ enterprise clients, converting unstructured documents into structured datasets and cutting manual processing effort by 75%.",
        "Integrated predictive analytics into transaction pipelines processing 10,000+ monthly events, decreasing production errors by 30% while maintaining 99.9% system uptime.",
        "Examined 10,000+ monthly transaction events to identify error patterns, strengthen data quality controls, and improve production performance monitoring.",
        "Automated document-processing workflows across 5+ enterprise implementations, standardizing data extraction and structured outputs while reducing manual intervention by 75%.",
        "Developed reusable C# backend and React.js components across client implementations, reducing duplicated development effort and shortening delivery timelines by up to 50% per engagement.",
        "Directed 2–3 client projects from requirements gathering through delivery, translating business requirements into data, analytics, and product solutions while coordinating cross-functional teams and stakeholder demonstrations."
      ]
    },
    {
      company: "Spring Money",
      role: "Data Analyst",
      location: "Pune, India",
      dates: "Jan 2023 – Jun 2023",
      highlights: [
        "Consolidated user-behavior data from 3 digital sources, including Google Play, Apple App Store, and the product website, into a unified analytics pipeline, eliminating duplicate-counting issues and improving reporting accuracy by 10%.",
        "Analyzed engagement data across 3 core content formats, including quizzes, polls, and courses, identifying behavioral patterns that informed content restructuring and boosted active user engagement by 25% within one quarter.",
        "Evaluated onboarding funnel performance across key user journey stages, identifying drop-off drivers that informed UX improvements and resolved the top 3 recurring customer support queries.",
        "Translated cross-channel behavioral and funnel data from 3 digital platforms into actionable product insights, supporting decisions that improved data accuracy by 10%, increased active users by 25%, and reduced recurring support issues."
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Customer & Product Analytics",
      category: "Network Analytics",
      stack: ['Python', 'NetworkX', 'Scikit-learn'],
      metric: "541,909",
      metricLabel: "Transactions analyzed",
      highlights: [
        "Analyzed 541,909 e-commerce transactions using Python and NetworkX, constructing a weighted customer-product network and applying Louvain community detection to identify 4 distinct product communities and uncover co-purchasing patterns.",
        "Benchmarked graph-based product recommendations using the PageRank algorithm against collaborative filtering, achieving a 0.57 diversity score versus 0.47 and identifying broader recommendations to support customer segmentation and merchandising insights."
      ]
    },
    {
      title: "Temporal-Graph Framework for Social Media Misinformation Detection",
      category: "MSc Dissertation",
      stack: ['Python', 'PyTorch', 'Graph Neural Networks', 'Statistical Analysis'],
      metric: "63",
      metricLabel: "Controlled experiments · 7 GNN architectures",
      highlights: [
        "Designed and evaluated 7 graph neural network architectures across PHEME, Twitter15, and Twitter16 datasets, completing 63 controlled experiments to analyze temporal patterns in misinformation propagation.",
        "Built an end-to-end Python pipeline for data parsing, graph construction, model training, and evaluation using macro-F1, class weighting, early stopping, and statistical significance testing.",
        "Developed unit and regression tests to identify data-quality anomalies and model implementation issues, improving the reliability and reproducibility of the analytical pipeline."
      ]
    }
  ];

  const skillCategories = [
    {
      icon: BarChart3,
      title: 'Data Analytics & Visualization',
      skills: ['SQL', 'Python', 'Power BI', 'Microsoft Excel', 'Pandas', 'NumPy', 'PySpark', 'Matplotlib', 'Statistical Analysis', 'Data Visualization', 'Exploratory Data Analysis (EDA)', 'NetworkX']
    },
    {
      icon: Database,
      title: 'Data Engineering & Cloud',
      skills: ['ETL Pipelines', 'Data Processing', 'REST APIs', 'Azure Data Services', 'AWS', 'Docker']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      skills: ['PyTorch', 'Scikit-learn', 'Predictive Modeling', 'Classification', 'Recommendation Systems', 'Model Evaluation']
    },
    {
      icon: Code2,
      title: 'Programming & Development',
      skills: ['Python', 'SQL', 'C#', '.NET', 'React.js']
    },
    {
      icon: Wrench,
      title: 'Tools & Methodologies',
      skills: ['Git', 'Azure DevOps', 'Jira', 'VS Code', 'Agile', 'Scrum', 'CI/CD']
    }
  ];

  const education = [
    {
      school: "Queen Mary University of London",
      degree: "Master of Science (MSc) in Data Science",
      location: "London, United Kingdom",
      dates: "Sep 2025 – Sep 2026"
    },
    {
      school: "Symbiosis Institute of Technology (SIT)",
      degree: "Bachelor of Technology (B.Tech) in Electronics and Telecommunications Engineering",
      location: "Pune, India",
      dates: "Aug 2019 – Jun 2023"
    }
  ];

  const certifications = [
    {
      title: "Online Certificate Programme in Data Science & Machine Learning",
      issuer: "IIT Delhi, Continuing Education Programme (CEP)",
      date: "Jun 2024"
    }
  ];

  const publications = [
    {
      title: "IoT Based Stormwater Quality Management System",
      venue: "IEEE ICECONF, Chennai",
      date: "Mar 2023",
      doi: "10.1109/10084104",
      link: "https://ieeexplore.ieee.org/document/10084104"
    }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="relative flex items-center justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden font-display text-black tracking-widest text-sm">SIDDHANT KESKAR</div>
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              {photoFailed ? (
                <div className="w-36 h-36 rounded-full mx-auto mb-6 bg-black text-white flex items-center justify-center border-4 border-brown/30 shadow-lg">
                  <span className="text-5xl font-display tracking-wide">SK</span>
                </div>
              ) : (
                <img
                  src="images/image.png"
                  alt="Siddhant Keskar"
                  onError={() => setPhotoFailed(true)}
                  className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
                />
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              SIDDHANT KESKAR
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Analyst · Product & Business Analytics · SQL, Python, Power BI
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> London, United Kingdom
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mt-6 mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 text-center">
            {[
              { label: 'ACTIVE USERS', value: '+25%', detail: 'Engagement in One Quarter' },
              { label: 'MANUAL EFFORT', value: '−75%', detail: 'AI Document Extraction' },
              { label: 'PRODUCTION ERRORS', value: '−30%', detail: 'Predictive Analytics' },
              { label: 'MONTHLY EVENTS', value: '10,000+', detail: 'At 99.9% Uptime' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Turning product, behavioural, and transaction data into decisions — from raw pipelines to dashboards and predictive models.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: LineChart,
                title: 'Product Analytics',
                detail: 'Analyzes engagement, funnels, and user behaviour across platforms — insights that lifted active users by 25% and resolved the top 3 recurring support queries.'
              },
              {
                icon: Workflow,
                title: 'Data Pipelines & Automation',
                detail: 'Builds ETL and AI-enabled workflows with Python and Azure OpenAI, cutting manual processing by 75% and improving reporting accuracy by 10%.'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                detail: 'Applies predictive modeling, recommendation systems, and graph neural networks — reducing production errors by 30% and powering MSc research at Queen Mary.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Data, analytics, and machine learning across enterprise software and digital fintech products.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Network analytics, recommendation systems, and graph-based machine learning research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-sm border border-brown/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
              >
                <div className="mb-6">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <div className="text-3xl font-display text-black mb-1">{project.metric}</div>
                <div className="text-xs tracking-widest text-brown/70 uppercase mb-6">{project.metricLabel}</div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light text-sm flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span key={tech} className="text-xs text-brown border border-brown/30 px-2 py-1 font-light">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Analytics, data engineering, and machine learning expertise
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 flex items-start gap-6">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0 md:ml-6 flex-shrink-0">
                    {edu.location} · {edu.dates}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-display text-black tracking-wide text-center mt-20 mb-8">CERTIFICATIONS</h3>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 flex items-start gap-6">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-black tracking-wide mb-1">{cert.title}</h3>
                  <p className="text-brown font-light">{cert.issuer} · {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PUBLICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {publications.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10 flex items-start gap-6">
                <div className="w-12 h-12 bg-black flex-shrink-0 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display text-black tracking-wide mb-2">“{paper.title}”</h3>
                  <p className="text-brown font-medium mb-1">{paper.venue} · {paper.date}</p>
                  <p className="text-brown/80 font-light text-sm mb-3">DOI: {paper.doi}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                  >
                    View on IEEE Xplore <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's talk about data analytics, product analytics, or data science opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+447553994394"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +44 7553 994394
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:siddhantkeskar13@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors break-all"
              >
                siddhantkeskar13@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/siddhant-keskar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors inline-flex items-center"
              >
                LinkedIn <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-brown mr-6" />
              <span className="text-white/80 font-light">London, United Kingdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © {new Date().getFullYear()} Siddhant Keskar · Data & Product Analytics.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
