export function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms-of-use" className="hover:text-blue-600">Terms of Use</a></li>
              <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-600">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Insurance</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Coverage Options</a></li>
              <li><a href="#" className="hover:text-blue-600">Get a Quote</a></li>
              <li><a href="#" className="hover:text-blue-600">Claims</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Maintenance</a></li>
              <li><a href="#" className="hover:text-blue-600">Support</a></li>
              <li><a href="#" className="hover:text-blue-600">Training</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Email Support</a></li>
              <li><a href="#" className="hover:text-blue-600">(888) 555-0123</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Keep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}