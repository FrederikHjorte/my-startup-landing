import './App.css'
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen w-full p-0 m-0">
      {/* Sticky Header */}
      <header className={`sticky top-0 bg-black p-4 z-50 w-full transition-shadow transition-border-b duration-300 ${scrolled ? 'header-outline header-scrolled' : ''}`}>
        <nav className={`flex justify-between w-full px-8 transition-all duration-300 ${scrolled ? 'py-2 scale-105' : ''}`}>
          <div className="text-xl font-bold">StartupName</div>
          <ul className="flex gap-6 text-sm items-center">
            <li className="hover:text-gray-400 cursor-pointer font-bold">Home</li>
            <li className="hover:text-gray-400 cursor-pointer font-bold">Features</li>
            <li className="hover:text-gray-400 cursor-pointer font-bold">Pricing</li>
            <li className="hover:text-gray-400 cursor-pointer font-bold">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-4 w-full min-h-[500px]">
        <h1 className="hero-gradient-outline text-7xl italic font-extrabold max-w-2xl animate-fade-in-down">
          Welcome to the Future of Productivity
        </h1>
        <p className="text-gray-400 max-w-xl mt-8">Boost your workflow with our cutting-edge tools and collaborative environment designed for modern teams.</p>
        <div className="mt-10 flex gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-md text-lg shadow transition">
            Sign up now
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-md text-lg transition">
            Learn more
          </button>
        </div>
      </section>
      {/* Cards Section */}
      <section className="flex justify-center gap-6 px-6 flex-wrap w-full min-h-[500px]">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-80">
          <img
            src="src/assets/undraw_developer-activity_4zqd.svg"
            alt="Automation Illustration"
            className="h-40 w-full object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Feature One</h2>
          <p className="text-gray-400">Discover how we streamline your daily tasks with automation and insights.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-80">
          <img
            src="src/assets/undraw_launch-event_aur1.svg"
            alt="Collaboration Illustration"
            className="h-40 w-full object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Feature Two</h2>
          <p className="text-gray-400">Collaborate in real-time with your team across multiple projects.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md w-80">
          <img
            src="src/assets/undraw_metrics_5v8d.svg"
            alt="Security Illustration"
            className="h-40 w-full object-contain rounded mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">Feature Three</h2>
          <p className="text-gray-400">Secure and scalable solutions tailored for your business growth.</p>
        </div>
      </section>

      <div className="mt-8"></div>

      {/* Company Description Section */}
      <section className="px-8 py-12 w-full max-w-4xl mx-auto">
        <div className="text-gray-300 text-lg space-y-0 text-center">
          <p>StartupName is a next-generation productivity platform designed for modern teams. We bring all your projects, tasks, and communication into one seamless workspace.</p>
          <p>Our tools empower teams to collaborate in real-time, automate repetitive work, and gain actionable insights with powerful analytics.</p>
          <p>Security and scalability are built-in, so you can focus on growth without worry.</p>
          <p>Integrate with your favorite apps and streamline your workflow from day one.</p>
          <p>Join thousands of teams who trust StartupName to help them move faster and achieve more together.</p>
        </div>
      </section>

      {/* Centered Bold Text Section */}
      <section className="text-center py-16 px-4 w-full">
        <h2 className="text-3xl font-bold">Join thousands of teams moving faster with StartupName</h2>
      </section>

      {/* Extra Content Section */}
      <section className="w-full bg-gray-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-gray-200 text-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Why choose StartupName?</h3>
          <p className="mb-2">
            StartupName offers a unified workspace that adapts to your team's needs, making collaboration effortless and enjoyable.
          </p>
          <p className="mb-2">
            Our platform is designed for flexibility, security, and speed—empowering you to focus on what matters most.
          </p>
          <p className="mb-2">
            With seamless integrations, real-time updates, and world-class support, StartupName is your partner in productivity.
          </p>
          <p>
            Experience the difference today and see how your team can achieve more, together.
          </p>
        </div>
      </section>

      {/* Icon Section */}
      <section className="w-full bg-black py-8 px-4 flex items-center">
        <div className="flex justify-center items-center gap-16 w-full">
          <svg className="w-14 h-14 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4" />
            <path d="M24 14v10l7 7" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="w-14 h-14 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
            <rect x="8" y="8" width="32" height="32" rx="8" stroke="currentColor" strokeWidth="4"/>
            <path d="M16 24h16M24 16v16" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
          </svg>
          <svg className="w-14 h-14 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="4"/>
            <path d="M18 24l6 6 6-12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <svg className="w-14 h-14 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
            <rect x="12" y="12" width="24" height="24" rx="6" stroke="currentColor" strokeWidth="4"/>
            <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="4"/>
          </svg>
        </div>
      </section>

      {/* New Content Section */}
      <section className="w-full bg-gray-900 py-20 px-4 min-h-[500px] flex items-center">
        <div className="max-w-3xl mx-auto text-center text-gray-200 w-full">
          <h3 className="text-2xl font-bold mb-4">Get in Touch with StartupName</h3>
          <p className="mb-6 text-lg">
            Have questions or want to learn more? Reach out to our team and discover how StartupName can help your business grow.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-md text-lg shadow transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="w-full bg-black py-20 px-4 min-h-[500px] flex items-center">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          <div className="flex-1 flex justify-center items-center">
            <img
              src="src/assets/undraw_launch-event_aur1.svg"
              alt="Launch Event"
              className="w-80 h-80 object-contain"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="text-gray-200 text-xl text-center space-y-4">
              <p>Empower your team with modern tools and seamless collaboration.</p>
              <p>StartupName adapts to your workflow and scales with your business.</p>
              <p>Join the future of productivity today.</p>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 1: Testimonials */}
      <section className="w-full bg-gray-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">What Our Customers Say</h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-gray-900 rounded-xl p-6 flex-1">
              <p className="text-gray-200 mb-4">"StartupName transformed the way our team works. Collaboration has never been easier!"</p>
              <span className="text-purple-400 font-semibold">— Alex, Product Manager</span>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 flex-1">
              <p className="text-gray-200 mb-4">"The automation features save us hours every week. Highly recommended!"</p>
              <span className="text-purple-400 font-semibold">— Jamie, Operations Lead</span>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 flex-1">
              <p className="text-gray-200 mb-4">"Secure, scalable, and easy to use. StartupName is the perfect fit for our growing company."</p>
              <span className="text-purple-400 font-semibold">— Morgan, CTO</span>
            </div>
          </div>
        </div>
      </section>

      {/* New Section 2: Integrations */}
      <section className="w-full bg-black py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6 text-white">Seamless Integrations</h3>
          <p className="text-gray-300 mb-8">
            Connect StartupName with your favorite tools and platforms. Our integrations make it easy to bring all your work together in one place.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-gray-200 font-semibold">Slack</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-gray-200 font-semibold">Google Drive</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-gray-200 font-semibold">Zoom</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-gray-200 font-semibold">Trello</span>
            <span className="bg-gray-800 px-6 py-3 rounded-lg text-gray-200 font-semibold">GitHub</span>
          </div>
        </div>
      </section>

      {/* New Section 3: Call to Action */}
      <section className="w-full bg-purple-700 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-extrabold mb-6 text-white">Ready to Supercharge Your Team?</h3>
          <p className="text-lg text-purple-100 mb-8">
            Start your free trial today and discover how StartupName can help your team achieve more, faster.
          </p>
          <button className="bg-white text-purple-700 font-bold py-4 px-12 rounded-full text-xl shadow-lg hover:bg-purple-100 transition">
            Start Free Trial
          </button>
        </div>
      </section>
    </div>
  );
}
