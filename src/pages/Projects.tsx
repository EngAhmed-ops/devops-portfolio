import { useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { PROJECTS_BY_CATEGORY } from '../data/portfolio';

export const Projects = () => {
 

 
      {/* Terminal Header */}
      <TerminalHeader
        command="docker ps -a"
        description="Listing deployed projects "
      />

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjects().map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden group hover:border-primary-500/50 transition-all duration-300 shadow-card hover:shadow-card-hover"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                  
                
                
                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="font-mono text-xl font-bold text-primary-500 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-200 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-neutral-800 text-neutral-300 text-xs rounded border border-neutral-700 hover:border-primary-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-neutral-800 text-neutral-400 text-xs rounded border border-neutral-700">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 pt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
                    >
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span className="text-sm font-mono">Code</span>
                    </a>
                    
                    {project.websiteLink && (
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-neutral-400 hover:text-primary-500 transition-colors group/btn"
                      >
                        <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                        <span className="text-sm font-mono">Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {getProjects().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="font-mono text-4xl text-neutral-600 mb-4">404</div>
              <div className="text-neutral-400">No projects found in this category.</div>
            </motion.div>
          )}
        </div>
      </section>

     
               
                 

              

     
               

