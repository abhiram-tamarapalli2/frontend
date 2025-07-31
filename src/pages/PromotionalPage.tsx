import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Building2, Users, Zap, Shield, TrendingUp, Github, Linkedin, Mail } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const PromotionalPage = () => {
  const stats = [
    { value: '5x', label: 'Faster Query Processing', icon: Zap },
    { value: '72%', label: 'Policy Clause Match Accuracy', icon: TrendingUp },
    { value: '60%', label: 'Reduced Claim Confusion', icon: Shield }
  ];

  const features = [
    'Fine-tuned Mistral 7B',
    'Hybrid RAG integration',
    'Insurance-specific NER system',
    'Real-time document processing'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center relative overflow-hidden">
                <Building2 className="w-32 h-32 text-blue-600 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">Bajaj Finserv</p>
                  <p className="text-white/80 text-sm">Innovation Center</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Delivering Financial Innovation through AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Our AI platform is designed to handle complex policy interpretation, 
                saving hours of manual effort and delivering unprecedented accuracy 
                in insurance document analysis.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HackRx Winner Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <GlassCard className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Trophy className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                HackRx 6.0 Innovation Showcase
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Built during the prestigious HackRx 6.0 hackathon, this platform represents 
                the cutting edge of AI-powered document intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 mb-3">Team Credits:</h3>
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">AI/ML Engineers</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">Full-Stack Developers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-600">UX/UI Designers</span>
                  </div>
                </div>
                
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Impact Showcase */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Impact Showcase
            </h2>
            <p className="text-xl text-gray-600">
              Measurable improvements in document processing efficiency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <GlassCard className="p-8 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Bajaj Finserv AI</h3>
                  <p className="text-blue-200 text-sm">Document Intelligence Platform</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6">
                Revolutionizing insurance document processing with cutting-edge AI technology.
              </p>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg text-sm">
                <strong>Disclaimer:</strong> This is a HackRx 6.0 prototype. Not an official product (yet).
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <div className="space-y-2">
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 block">Terms</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 block">Privacy</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 block">Github Repo</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-200">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-200">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors duration-200">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-500 mt-12 pt-8 text-center">
            <p className="text-blue-200">
              © 2024 Bajaj Finserv AI Platform. Built for HackRx 6.0.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PromotionalPage;