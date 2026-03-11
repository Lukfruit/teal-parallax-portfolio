import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, ExternalLink } from "lucide-react";
import firefoxIcon from "@/assets/firefox-icon.svg";

interface ChallengeSolution {
  challenge: string;
  solution: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challengesSolutions?: ChallengeSolution[];
  repo?: string;
  link?: string;
  firefoxAddon?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-background border-border p-0">
        {/* Hero section with giant background text */}
        <div className="relative flex flex-col overflow-hidden px-8 pt-10 pb-8 min-h-[280px] justify-end">
          {/* Giant background text */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
            <span 
              className="font-bold text-primary/[0.07] dark:text-primary/[0.12] whitespace-nowrap select-none"
              style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
            >
              {project.title}
            </span>
          </div>

          <DialogHeader className="text-left mb-5">
            <DialogTitle className="text-3xl md:text-5xl font-bold text-foreground tracking-tight">
              {project.title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="flex gap-2 flex-wrap mb-5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-secondary/90 backdrop-blur-sm border border-muted-foreground/20 text-primary text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          {(project.repo || project.link || project.firefoxAddon) && (
            <div className="flex gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
              {project.firefoxAddon && (
                <a
                  href={project.firefoxAddon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.634 8.583a6.753 6.753 0 0 0-.925-1.873 7.862 7.862 0 0 0-1.532-1.605 10.028 10.028 0 0 0-1.07-.724c-.29.55-.6 1.075-.93 1.574A10.18 10.18 0 0 1 15.6 7.8a5.2 5.2 0 0 0-1.32-1.057 5.2 5.2 0 0 0-.765-.378c.068.503.09 1.01.068 1.517a6.124 6.124 0 0 1-.443 2.07 5.888 5.888 0 0 1-1.2 1.852 5.646 5.646 0 0 1-1.834 1.305 5.898 5.898 0 0 1-2.25.596 5.694 5.694 0 0 1-1.14-.027 5.674 5.674 0 0 1-1.098-.27c.396.858.963 1.623 1.665 2.246a6.2 6.2 0 0 0 2.506 1.32 6.882 6.882 0 0 0 2.83.124 7.468 7.468 0 0 0 2.679-1.013 8.074 8.074 0 0 0 2.123-1.953 8.764 8.764 0 0 0 1.376-2.692 9.187 9.187 0 0 0 .463-3.053c-.002-.276-.019-.55-.05-.822l-.001-.005zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
                  </svg>
                  Firefox Add-on
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-border text-foreground rounded-lg hover:bg-accent transition-colors text-sm font-medium"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>

        {/* Content section */}
        <div className="bg-accent p-8 space-y-6">
          {project.detailedDescription && (
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.detailedDescription}
              </p>
            </div>
          )}

          {project.challengesSolutions && project.challengesSolutions.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Challenges & Solutions</h2>
              <div className="space-y-5">
                {project.challengesSolutions.map((cs, i) => (
                  <div key={i} className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Challenge</span>
                      <p className="text-muted-foreground leading-relaxed mt-1">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-foreground uppercase tracking-wide">Solution</span>
                      <p className="text-muted-foreground leading-relaxed mt-1">{cs.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
