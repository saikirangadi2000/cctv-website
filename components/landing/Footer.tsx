export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-brand text-white rounded-lg px-3 py-2 font-bold text-sm">
                CCTV
              </div>
              <span className="text-lg font-bold text-white">Sarvanetra</span>
            </div>
            <p className="text-sm">Expert CCTV &amp; Security Solutions for homes and businesses.</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Cameras</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">DVRs</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">NVRs</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Accessories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand transition-colors">Installation</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <p className="text-sm mb-2">Email: info@sarvanetra.com</p>
            <p className="text-sm mb-2">Phone: +91-9541781797</p>
            <p className="text-sm">Address: India</p>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; 2024 Sarvanetra. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .brand {
          color: #1c74e9;
        }
        .bg-brand {
          background-color: #1c74e9;
        }
      `}</style>
    </footer>
  );
}
