import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a
      href="tel:+1234567890"
      className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
    >
      <Phone className="h-6 w-6" />
    </a>
  );
}