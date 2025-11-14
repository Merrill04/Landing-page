'use client';

import { Shield, Rocket, CheckCircle, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/about-image.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-5xl font-bold text-white mb-4">
              Who Are We?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We help people to build incredible brands and superior products. Our perspective is to furnish outstanding captivating services.
            </p>

            {/* Mission & Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Our Mission</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Innovative aerial solutions</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Cutting-edge technology</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Customer-first approach</span>
                  </li>
                </ul>
              </div>

              {/* Compliance Card */}
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Compliance</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>FAA certified operations</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Safety-first protocols</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>Full regulatory adherence</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats or Badge */}
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">500+</p>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-gray-400">Safety Record</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}