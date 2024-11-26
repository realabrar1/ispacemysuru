import { ChevronRight } from 'lucide-react';

export default function Courses() {
  const courses = [
    {
      title: 'AutoCAD / ZW',
      image: 'https://images.unsplash.com/photo-1545670723-196ed0954986',
      description: 'Master industry-standard CAD software for precise technical drawings and 2D/3D design.',
      duration: '4 weeks',
      features: [
        'Basic to advanced drafting techniques',
        '2D and 3D modeling',
        'Project-based learning',
        'Industry-standard practices'
      ]
    },
    {
      title: 'SketchUp',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e',
      description: 'Learn 3D modeling and visualization for architectural designs.',
      duration: '3 weeks',
      features: [
        '3D modeling fundamentals',
        'Material and texture application',
        'Scene composition',
        'Rendering basics'
      ]
    },
    {
      title: 'Photoshop',
      image: 'https://images.unsplash.com/photo-1561998338-13ad7883b20f',
      description: 'Create stunning architectural visualizations and presentations.',
      duration: '2 weeks',
      features: [
        'Image editing techniques',
        'Architectural post-processing',
        'Presentation graphics',
        'Digital art creation'
      ]
    },
    {
      title: 'Revit',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      description: 'Master Building Information Modeling (BIM) for modern construction projects.',
      duration: '6 weeks',
      features: [
        'BIM fundamentals',
        'Family creation',
        'Documentation',
        'Collaboration tools'
      ]
    },
    {
      title: 'Lumion',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      description: 'Create photorealistic 3D renderings and animations.',
      duration: '3 weeks',
      features: [
        'Real-time rendering',
        'Material creation',
        'Animation basics',
        'Scene composition'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Courses</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-blue-600 font-semibold mb-4">Duration: {course.duration}</p>
                
                <h3 className="font-semibold mb-2">What you'll learn:</h3>
                <ul className="list-disc list-inside mb-6 text-gray-600">
                  {course.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Enroll now <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}