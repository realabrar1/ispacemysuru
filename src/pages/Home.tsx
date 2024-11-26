import { ChevronRight, Book, Users, Award, Building, ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import FloatingCallButton from '../components/FloatingCallButton';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'AutoCAD',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdCxk9_g9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9Z9/viewform?usp=pp_url&entry.1=${formData.name}&entry.2=${formData.phone}&entry.3=${formData.email}&entry.4=${formData.course}`;
    window.open(formUrl, '_blank');
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const courses = [
    {
      title: 'AutoCAD / ZW',
      image: 'https://images.unsplash.com/photo-1545670723-196ed0954986',
      description: 'Master industry-standard CAD software for precise technical drawings and 2D/3D design.',
      duration: '4 weeks',
      features: ['Basic to advanced drafting', '2D and 3D modeling', 'Project-based learning']
    },
    {
      title: 'SketchUp',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      description: 'Learn 3D modeling and visualization for architectural designs.',
      duration: '3 weeks',
      features: ['3D modeling fundamentals', 'Material application', 'Scene composition']
    },
    {
      title: 'Photoshop',
      image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f',
      description: 'Create stunning architectural visualizations and presentations.',
      duration: '2 weeks',
      features: ['Image editing', 'Post-processing', 'Presentation graphics']
    },
    {
      title: 'Revit',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      description: 'Master Building Information Modeling (BIM) for modern construction projects.',
      duration: '6 weeks',
      features: ['BIM fundamentals', 'Family creation', 'Documentation']
    },
    {
      title: 'Lumion',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      description: 'Create photorealistic 3D renderings and animations.',
      duration: '3 weeks',
      features: ['Real-time rendering', 'Material creation', 'Animation basics']
    }
  ];

  const projects = [
    {
      title: 'Modern Residential Complex',
      image: 'https://images.unsplash.com/photo-1545670723-196ed0954986'
    },
    {
      title: 'Commercial Plaza',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      title: 'Urban Planning Project',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      title: 'Sustainable Architecture',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative">
        <Slider {...sliderSettings}>
          {[
            {
              image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
              title: "Transform Your Career in Architecture",
              subtitle: "Join our comprehensive training program"
            },
            {
              image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
              title: "Master Modern Design Tools",
              subtitle: "Learn from industry experts"
            },
            {
              image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
              title: "Build Your Future",
              subtitle: "Hands-on experience with latest technology"
            }
          ].map((slide, index) => (
            <div key={index} className="relative">
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.subtitle}</p>
                <a
                  href="#courses"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center"
                >
                  Know More <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Main Title */}
      <div className="text-center py-16 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          INTEGRATED SKILL PROGRAM FOR ARCHITECTS & CIVIL ENGINEERS
        </h1>
      </div>

      {/* About Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-start space-x-8">
            <Building className="w-12 h-12 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="text-3xl font-bold mb-6">About I-SPACE</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                I-SPACE is a premier training centre dedicated to transforming architecture
                and civil engineering graduates into industry-ready professionals. Our
                intensive 3-month practical skill program combines the best of knowledge
                with hands-on experience, giving you the practical skills, confidence, and
                connections you need to excel in today's competitive professional field.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Section */}
      <div id="courses" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <p className="text-blue-600 font-semibold mb-4">Duration: {course.duration}</p>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    {course.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <a
                    href="/courses"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700">
                  Select Course
                </label>
                <select
                  id="course"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                >
                  <option value="AutoCAD">AutoCAD / ZW</option>
                  <option value="SketchUp">SketchUp</option>
                  <option value="Photoshop">Photoshop</option>
                  <option value="Revit">Revit</option>
                  <option value="Lumion">Lumion</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>


      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits of I-SPACE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Certification</h3>
              <p className="text-gray-600">
                Receive an industry-recognized certificate upon completion, boosting your credentials
                and job prospects.
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Job Placement Assistance</h3>
              <p className="text-gray-600">
                Get placed in firms of architects, engineers, builders, and more. Start your own
                venture and become an entrepreneur.
              </p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 mx-auto text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Professional Confidence</h3>
              <p className="text-gray-600">
                Enter the job market as a well-rounded, confident professional ready to tackle
                any challenge.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      {/* Projects Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-center font-semibold px-4">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124739.85296532282!2d76.52623233174714!3d12.307677559511644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3baf7bd63afbae73%3A0x3b4c2cfa06dfd3b2!2s24%2C%201st%20Cross%20Rd%2C%20telecom%20Layout%2C%20Bogadi%202nd%20Stage%2C%20Bogadi%202nd%20Stage%20North%2C%20Mysuru%2C%20Karnataka%20570026!3m2!1d12.3076901!2d76.6086217!5e0!3m2!1sen!2sin!4v1732586799587!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        {/* Google Reviews Section */}
      <GoogleReviews />

      <FloatingCallButton />
    </div>
  );
}
