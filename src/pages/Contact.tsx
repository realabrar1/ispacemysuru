import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'AutoCAD',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Google Form submission URL would go here
    window.open(`https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=pp_url&entry.1=${formData.name}&entry.2=${formData.phone}&entry.3=${formData.email}&entry.4=${formData.course}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
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
  );
}