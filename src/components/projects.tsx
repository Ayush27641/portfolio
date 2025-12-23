"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface ProjectProps {
  id: string;
  name: string;
  description: string;
  photo: string;
  url: string;
  tags?: string[];
  date?: string;
  featured?: boolean;
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const list: ProjectProps[] = [
    {
      id: "quick-court",
      name: "Quick Court",
      description:
        "Scalable full-stack sports venue booking platform with real-time synchronization, analytics dashboards, and multi-role authentication supporting 1,000+ users.",
      photo: "/quickcourt.jpeg",
      url: "https://github.com/Ayush27641/QuiickCourt.git",
      tags: ["React", "Node.js", "PostgreSQL", "Supabase", "Socket.IO", "Full Stack"],
      date: "2024",
      featured: true,
    },
    {
      id: "wealth-watcher",
      name: "Wealth Watcher", 
      description:
        "AI-powered finance management platform with GenAI receipt scanner, automated workflows, and interactive dashboards. Achieved 99.9% uptime with intelligent data extraction.",
      photo: "/wealth.jpeg",
      url: "https://wealth-watcher-8yj1.vercel.app/",
      tags: ["Next.js", "Supabase", "Prisma", "AI", "Tailwind CSS", "Full Stack"],
      date: "2024",
      featured: true,
    },
    {
      id: "steganography-framework",
      name: "Steganography Detection Framework",
      description:
        "Advanced deep learning system using custom SRNet architecture for steganography detection. Achieved 93.9% accuracy on 10,000+ images with real-time steganalysis capabilities.",
      photo: "/stegano.jpg", 
      url: "https://github.com/Ayush27641/Steganography_DeepLearning.git",
      tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning", "Computer Vision"],
      date: "2024",
      featured: true,
    },
    {
      id: "drconnect",
      name: "DrConnect",
      description:
        "Healthcare appointment and prescription management system with secure authentication, doctor directory, payment integration via Razorpay, and real-time notifications for seamless patient care.",
      photo: "/drconnect.png",
      url: "https://github.com/Ayush27641/DR.CONNECT.git",
      tags: ["React", "Redux", "Tailwind CSS", "Razorpay", "Healthcare", "Full Stack"],
      date: "2024",
      featured: true,
    },
    {
      id: "movie-recommender-system",
      name: "Movie Recommender System", 
      description:
        "End-to-end ML project using collaborative and content-based filtering with TF-IDF. Features EDA, model training, Streamlit/Flask web interface, and ready-to-deploy architecture.",
      photo: "/recommender_system.jpg",
      url: "https://github.com/Ayush27641/V-Recommender.git",
      tags: ["Python", "Machine Learning", "TF-IDF", "Streamlit", "Data Science"],
      date: "2024", 
      featured: true,
    },
    {
      id: "4",
      name: "V-Server",
      description:
        "A custom HTTP server built in C++ with handcrafted database engine, custom request parsing, optimized memory management. Features multi-threading and performance-focused architecture for high-throughput backend infrastructure.",
      photo: "/vserver.png",
      url: "https://github.com/Ayush27641/V-Server.git",
      tags: ["C++", "HTTP", "Custom DB", "File I/O", "Low Level Development"],
      date: "2024",
      featured: true,
    },
  ];

  // Get all unique tags
  const allTags = ["Full Stack", "AI", "Machine Learning", "Low Level Development"];

  // Filter projects based on search and selected tag
  const filteredProjects = list.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || project.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  // Show only 4 projects initially, or all if showAll is true
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);
  const hasMoreProjects = filteredProjects.length > 4;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div
        className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 md:py-20"
        id="Projects"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-center items-center mb-6">
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  Projects
                </h1>
                <motion.span
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary ml-2"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                >
                  .
                </motion.span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                A collection of innovative projects showcasing expertise in
                modern web technologies, system design, and creative
                problem-solving.
              </p>
            </motion.div>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            className="mb-12 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 bg-background/50 backdrop-blur-sm border-2 focus:border-primary transition-all duration-300"
                />
              </div>
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="rounded-full transition-all duration-300"
              >
                All
              </Button>
              {allTags.slice(0, 8).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    setSelectedTag(selectedTag === tag ? null : tag)
                  }
                  className="rounded-full transition-all duration-300"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -50, scale: 0.9 }}
                  transition={{
                    duration: 0.6,
                    delay: showAll ? 0 : 0.1 * index,
                    ease: "easeOut",
                    layout: { duration: 0.3 },
                  }}
                >
                  <ProjectCard project={item} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Show More Button */}
          {hasMoreProjects && (
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                onClick={() => setShowAll(!showAll)}
                size="lg"
                className="group relative overflow-hidden px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 font-semibold">
                  {showAll
                    ? "Show Less"
                    : `Show More (${filteredProjects.length - 4} more)`}
                  <motion.div
                    animate={{ rotate: showAll ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectProps }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border-2 bg-background/80 backdrop-blur-sm transition-all duration-500",
        "hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50",
        "dark:bg-neutral-950/80 dark:border-neutral-800",
        project.featured &&
          "ring-2 ring-primary/20 ring-offset-2 ring-offset-background"
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={project.photo || "/placeholder.svg?height=400&width=600"}
          width={600}
          height={400}
          alt={`Screenshot of ${project.name}`}
          className={cn(
            "object-cover w-full h-full transition-all duration-700",
            isHovering && "scale-110"
          )}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute left-4 top-4"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-3 py-1 shadow-lg">
              ⭐ Featured
            </Badge>
          </motion.div>
        )}

        {/* Date Badge */}
        {project.date && (
          <motion.div
            className="absolute right-4 top-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Badge
              variant="secondary"
              className="bg-background/90 backdrop-blur-sm"
            >
              <Calendar className="mr-1 h-3 w-3" />
              {project.date}
            </Badge>
          </motion.div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-6 space-y-4">
        {/* Title */}
        <motion.h3
          className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {project.name}
        </motion.h3>

        {/* Tags */}
        {project.tags && project.tags.length > 0 && (
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.tags.map((tag, index) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ scale: 1.1 }}
              >
                <Badge
                  variant="outline"
                  className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Description */}
        <motion.p
          className="flex-1 text-muted-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            className="w-full group/button font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            <Link href={project.url} target="_blank" rel="noopener noreferrer">
              <span>Explore Project</span>
              <motion.div
                className="ml-2"
                whileHover={{ x: 3, y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
