import React, { useState } from 'react';
import { userData, technicalSkills, softSkills, projects, trainings, education } from '../data/portfolioData';

export const agentProfileData = {
  metadata: {
    format: "Agent-Readable Profile & Portfolio Manifest",
    schemaVersion: "1.0.0",
    generatedFor: "AI Agents, LLMs, Web Crawlers, Recruiters, and Automated Systems",
    canonicalUrl: "https://portfolio.mraks.dev/knowmeai",
    portfolioUrl: "https://portfolio.mraks.dev",
    lastUpdated: "2026-11-19"
  },
  person: {
    name: userData.name,
    preferredName: "Mr. Aks",
    role: userData.profession,
    tagline: "Building robust, scalable backends, zero-knowledge architectures, and intelligent full-stack AI systems.",
    summary: userData.bio,
    location: "India",
    contact: {
      email: userData.email,
      github: userData.github,
      linkedin: userData.linkedin,
      resumeUrl: userData.resumeUrl,
      contactFormEndpoint: "https://api.web3forms.com/submit"
    }
  },
  highlights: [
    "AI Full Stack Developer and Software Engineer with deep expertise in Java Spring Boot microservices, Node.js, and React.",
    "250+ LeetCode milestones demonstrating strong algorithmic problem-solving and Data Structures & Algorithms proficiency.",
    "Zero-knowledge architecture design with client-side AES-256-GCM encryption and PBKDF2 key derivation (Secure Save).",
    "Microservice distributed systems architecture with CQRS, Redis caching, RabbitMQ event streams, and AWS EC2 deployments.",
    "Automated CI/CD workflows across GitHub Actions, Docker Compose, Vercel, and native Android Gradle compilation."
  ],
  skills: {
    technical: technicalSkills.map(s => s.name),
    aiAndTools: [
      "Claude AI (Prompt engineering, agentic development, artifact design)",
      "GitHub Copilot (AI-assisted paired programming & refactoring)",
      "OpenAI Codex & LLMs (Function calling, embeddings, system prompt orchestration)",
      "FreeLLM & GenAI Ecosystems",
      "Git, GitHub Actions, Docker, Postman, Vercel, AWS EC2"
    ],
    soft: softSkills.map(s => s.name)
  },
  projects: projects.map(p => ({
    title: p.title,
    description: p.description,
    technologies: p.technologies,
    links: {
      github: p.github || null,
      live: p.live || null,
      extra: p.extraLinks || []
    }
  })),
  trainingsAndCertifications: trainings.map(t => ({
    title: t.title,
    organization: t.organization,
    duration: t.duration,
    certificateUrl: t.certificate || null,
    points: t.points
  })),
  education: education.map(e => ({
    institution: e.institution,
    degree: e.degree,
    duration: e.duration,
    score: e.score
  }))
};

const KnowMeAI: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const jsonString = JSON.stringify(agentProfileData, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `anjan-kumar-sahoo-knowmeai.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-gray-200 p-4 md:p-10 font-mono selection:bg-cyan-500/30">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">
                PORTFOLIO.MRAKS.DEV<span className="text-cyan-400">/knowmeai</span>
              </h1>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              Agent-readable endpoint for AI agents, crawlers, LLMs, and automated evaluators.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
            >
              {copied ? "Copied JSON!" : "Copy JSON"}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 transition-all border border-cyan-500/30"
            >
              Download .json
            </button>
            <a
              href="/"
              className="px-4 py-2 text-xs font-bold rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 transition-all border border-purple-500/30"
            >
              Interactive Portfolio
            </a>
          </div>
        </div>

        {/* Quick Read / Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-cyan-400 font-bold uppercase tracking-wider">Entity</span>
            <div className="text-white text-sm font-semibold">{agentProfileData.person.name}</div>
            <div className="text-gray-400">{agentProfileData.person.role}</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-purple-400 font-bold uppercase tracking-wider">Key Direct Links</span>
            <div className="truncate"><a href={agentProfileData.person.contact.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub: {agentProfileData.person.contact.github}</a></div>
            <div className="truncate"><a href={agentProfileData.person.contact.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">LinkedIn: {agentProfileData.person.contact.linkedin}</a></div>
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
            <span className="text-green-400 font-bold uppercase tracking-wider">Machine Readable</span>
            <div className="text-gray-300">Format: Standard JSON (RFC 8259)</div>
            <div className="text-gray-400">Total Projects: {agentProfileData.projects.length} | Skills: {agentProfileData.skills.technical.length}</div>
          </div>
        </div>

        {/* Code / JSON Display */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#090d1f]">
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-[11px] text-gray-400">knowmeai.json</span>
            </div>
            <span className="text-[11px] text-gray-500">application/json</span>
          </div>
          <pre className="p-4 md:p-6 text-xs md:text-sm text-cyan-300 overflow-x-auto max-h-[70vh] leading-relaxed">
            <code>{jsonString}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default KnowMeAI;
