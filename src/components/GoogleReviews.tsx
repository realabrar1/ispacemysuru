import { Star } from 'lucide-react';

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Rahul Kumar",
      rating: 5,
      text: "Excellent training center! The hands-on experience and industry exposure helped me land my dream job. Highly recommended for architecture graduates.",
      date: "2 months ago"
    },
    {
      name: "Priya Singh",
      rating: 5,
      text: "The mentors are extremely knowledgeable and supportive. The practical training approach makes complex software easy to understand.",
      date: "1 month ago"
    },
    {
      name: "Mohammed Ali",
      rating: 5,
      text: "Best institute for learning architectural software. The site visits and real-world projects gave me great confidence.",
      date: "3 months ago"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <div className="flex items-center justify-center mb-2">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-8 object-contain"
            />
            <div className="flex ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-gray-600">Based on 50+ reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xl">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-2">{review.text}</p>
              <p className="text-sm text-gray-400">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="https://www.google.com/maps/place/YOUR_GOOGLE_MAPS_LINK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            View all reviews on Google
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
