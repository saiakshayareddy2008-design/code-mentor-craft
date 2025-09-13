import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CodeEditor } from '@/components/ui/code-editor';
import { ErrorPanel } from '@/components/ui/error-panel';
import { TutorialPanel } from '@/components/ui/tutorial-panel';
import { ExerciseGenerator } from '@/components/ui/exercise-generator';
import { Code, Zap, BookOpen, Bug, Play, Users, Trophy } from 'lucide-react';
import heroImage from '@/assets/hero-coding-platform.jpg';

const Index = () => {
  const handleCodeChange = (code: string) => {
    console.log('Code changed:', code);
  };

  const handleRunCode = () => {
    console.log('Running code...');
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">CodeMaster</h1>
                <p className="text-xs text-muted-foreground">Programming Education Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
              <Button variant="primary" size="sm">
                <Trophy className="w-4 h-4 mr-2" />
                Challenges
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Programming education platform with code elements" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Master Programming with AI-Powered Learning
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Advanced code analysis, real-time error detection, personalized debugging suggestions, 
              and interactive tutorials powered by artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" className="shadow-glow">
                <Play className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg">
                <BookOpen className="w-5 h-5 mr-2" />
                View Tutorials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Powerful Learning Tools</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform combines advanced AI analysis with interactive learning to accelerate your programming journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-secondary border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Code className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">Smart Code Analysis</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Real-time code analysis with intelligent suggestions and best practice recommendations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Syntax validation
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  Performance optimization
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Code quality scoring
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-secondary border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-error/20">
                  <Bug className="w-5 h-5 text-error" />
                </div>
                <h4 className="font-semibold">Error Detection</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced error detection with contextual debugging suggestions and fix recommendations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-error"></div>
                  Runtime error prediction
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  Logic error detection
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Smart fix suggestions
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-secondary border-border shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-warning/20">
                  <Zap className="w-5 h-5 text-warning" />
                </div>
                <h4 className="font-semibold">Exercise Generation</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                AI-powered exercise generation tailored to your skill level and learning progress.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Personalized difficulty
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  Progressive challenges
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Instant feedback
                </div>
              </div>
            </Card>
          </div>

          {/* Main Platform Interface */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Code Editor - Takes up 2 columns */}
            <div className="xl:col-span-2 space-y-6">
              <CodeEditor
                language="javascript"
                onCodeChange={handleCodeChange}
                onRunCode={handleRunCode}
              />
              <ErrorPanel />
            </div>
            
            {/* Side Panels */}
            <div className="space-y-6">
              <TutorialPanel />
              <ExerciseGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 backdrop-blur-sm py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">CodeMaster</h3>
                <p className="text-xs text-muted-foreground">Powered by AI</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 CodeMaster. Empowering developers worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;