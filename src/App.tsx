import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Code,
  Smartphone,
  Wallet,
  Users,
  CreditCard,
  Key,
  ChevronDown,
  ArrowRight,
  MapPin,
  Phone,
  Menu,
  X,
  Download,
  FileText,
  Award,
  Briefcase
} from 'lucide-react';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Accounts Module (Authentication Domain)",
      description: "Central login system used across multiple subdomains handling user authentication, signup, and password recovery with secure redirections.",
      technologies: ["React.js", "Axios", "TanStack Query", "Bootstrap", "React Hook Form", "Git"],
      icon: <Key className="w-8 h-8" />,
      impact: "Reduced login/signup errors by 25% and improved user onboarding experience",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "My Accounts Module",
      description: "Comprehensive user profile management system allowing users to update personal details, manage documents, work history, academic records, and security features.",
      technologies: ["React.js", "Redux", "Context API", "Axios", "React Hook Form", "TanStack Query", "Git"],
      icon: <Users className="w-8 h-8" />,
      impact: "Created seamless account management with enhanced security features including MFA and device management",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      title: "Wallet Module",
      description: "Advanced payment system with 7-step KYC verification process and live mobile money integration for Uganda, enabling secure deposits and transactions.",
      technologies: ["React.js", "Redux", "Context API", "Axios", "React Hook Form", "TanStack Query", "Git"],
      icon: <Wallet className="w-8 h-8" />,
      impact: "Integrated third-party mobile money services ensuring secure and seamless wallet transactions",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Multi-Account Management Module",
      description: "Centralized account management system working across multiple subdomains with account switching, user management, and logout functionality.",
      technologies: ["JavaScript", "CSS"],
      icon: <Smartphone className="w-8 h-8" />,
      impact: "Single reusable script managing all account functionalities across subdomains with consistent UX",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Pay Module",
      description: "Wallet-to-wallet payment system with QR code generation, WhatsApp/Telegram link previews, built with Next.js for SEO optimization.",
      technologies: ["Next.js", "Tailwind CSS", "Axios", "TanStack Query", "Bootstrap", "React Hook Form", "Git"],
      icon: <CreditCard className="w-8 h-8" />,
      impact: "SEO-friendly payment system with social media integration for easy transaction sharing",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 6,
      title: "Roots Project",
      description: "Redesigned central login system with enhanced UI/UX, improved authentication flow, and better user experience across multiple subdomains.",
      technologies: ["React.js", "Axios", "TanStack Query", "Bootstrap", "React Hook Form", "Git"],
      icon: <Code className="w-8 h-8" />,
      impact: "Complete UI/UX revamp reducing login errors by 25% and enhancing user onboarding",
      color: "from-teal-500 to-blue-500"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"] },
    { category: "Styling", items: ["Tailwind CSS", "Bootstrap", "CSS-in-JS", "Responsive Design"] },
    { category: "State Management", items: ["Redux", "Context API", "TanStack Query", "React Hook Form"] },
    { category: "Tools & APIs", items: ["Axios", "Git", "RESTful APIs", "Third-party Integrations"] }
  ];

  const handleCursorEnter = (variant: string) => setCursorVariant(variant);
  const handleCursorLeave = () => setCursorVariant('default');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // Create a dummy PDF download - in real implementation, you'd link to your actual resume
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Stalin_S_Frontend_Developer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-300 ease-out ${
          cursorVariant === 'hover' ? 'w-12 h-12' : 'w-6 h-6'
        }`}
        style={{ 
          left: `${mousePosition.x - (cursorVariant === 'hover' ? 24 : 12)}px`, 
          top: `${mousePosition.y - (cursorVariant === 'hover' ? 24 : 12)}px` 
        }}
      >
        <div className={`w-full h-full rounded-full border-2 ${
          cursorVariant === 'hover' 
            ? 'border-purple-400 bg-purple-400 bg-opacity-20' 
            : 'border-white bg-white'
        } transition-all duration-300`} />
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => scrollToSection('home')}
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
            >
              Stalin S
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => handleCursorEnter('hover')}
                  onMouseLeave={handleCursorLeave}
                  className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-fade-in-up">
              <div className="flex flex-col space-y-2">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'resume', label: 'Resume' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Stalin S
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fade-in-up delay-200">
              Frontend Developer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-300">
              Crafting seamless user experiences with modern web technologies. 
              Specialized in React.js ecosystems and complex authentication systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
            <button 
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center gap-2"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com"
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="p-3 border border-gray-600 rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com"
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="p-3 border border-gray-600 rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:stalin@example.com"
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="p-3 border border-gray-600 rounded-full hover:border-green-500 hover:bg-green-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Here are some of the key projects I've worked on, showcasing my expertise in frontend development and system integration.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className={`group relative bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-3">Impact & Results</h4>
                    <p className="text-gray-300 text-sm bg-gray-900/50 p-3 rounded-lg border-l-4 border-purple-500">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600 group-hover:border-purple-500/30 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="flex items-center gap-2 text-purple-400 font-medium hover:text-purple-300 transition-colors duration-300 group/btn">
                    Learn More 
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`text-center animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 text-purple-400">
                  {skillGroup.category}
                </h3>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      onMouseEnter={() => handleCursorEnter('hover')}
                      onMouseLeave={handleCursorLeave}
                      className="bg-gray-700 p-3 rounded-lg border border-gray-600 hover:border-purple-500/50 hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Resume & Experience
            </h2>
            <p className="text-gray-400 text-lg">
              Download my complete resume or explore my professional journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Resume Download Card */}
            <div 
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 mb-6">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Download Resume</h3>
                <p className="text-gray-400 mb-6">
                  Get my complete resume with detailed work experience, projects, and technical skills.
                </p>
                <button
                  onClick={downloadResume}
                  onMouseEnter={() => handleCursorEnter('hover')}
                  onMouseLeave={handleCursorLeave}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <div 
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Experience</h4>
                    <p className="text-gray-400">Frontend Developer specializing in React.js ecosystems</p>
                  </div>
                </div>
              </div>

              <div 
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Key Achievement</h4>
                    <p className="text-gray-400">Reduced login/signup errors by 25% across multiple projects</p>
                  </div>
                </div>
              </div>

              <div 
                onMouseEnter={() => handleCursorEnter('hover')}
                onMouseLeave={handleCursorLeave}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Specialization</h4>
                    <p className="text-gray-400">Authentication systems, payment modules, and user management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-center">Professional Summary</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-4">Core Expertise</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Frontend Development with React.js & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Authentication & Security Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Payment Integration & Wallet Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    State Management (Redux, Context API)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Projects</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Multi-domain Authentication Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    KYC-enabled Wallet & Payment Modules
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Account Management Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Mobile Money Integration (Uganda)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about frontend development.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">stalin.dev@example.com</p>
            </div>

            <div 
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91 XXXXX XXXXX</p>
            </div>

            <div 
              onMouseEnter={() => handleCursorEnter('hover')}
              onMouseLeave={handleCursorLeave}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 hover:scale-105"
            >
              <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Available for Remote Work</p>
            </div>
          </div>

          <button
            onMouseEnter={() => handleCursorEnter('hover')}
            onMouseLeave={handleCursorLeave}
            className="px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-lg"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Stalin S. Crafted with passion and React.js</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        * {
          cursor: none;
        }

        a, button {
          cursor: none;
        }
      `}</style>
    </div>
  );
}

export default App;