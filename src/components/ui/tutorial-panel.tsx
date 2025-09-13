import React, { useState } from 'react';
import { Card } from './card';
import { Button } from './button';
import { Progress } from './progress';
import { ChevronLeft, ChevronRight, BookOpen, Target, Lightbulb } from 'lucide-react';

interface TutorialStep {
  id: string;
  title: string;
  content: string;
  code?: string;
  hint?: string;
}

interface TutorialPanelProps {
  tutorial?: {
    title: string;
    steps: TutorialStep[];
  };
}

const defaultTutorial = {
  title: "JavaScript Fundamentals",
  steps: [
    {
      id: '1',
      title: 'Variables and Data Types',
      content: 'Learn how to declare variables and understand different data types in JavaScript.',
      code: 'let message = "Hello World";\nconst number = 42;\nconst isActive = true;',
      hint: 'Use let for variables that can change, const for constants'
    },
    {
      id: '2',
      title: 'Functions',
      content: 'Functions are reusable blocks of code that perform specific tasks.',
      code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet("Alice"));',
      hint: 'Functions can take parameters and return values'
    },
    {
      id: '3',
      title: 'Arrays and Loops',
      content: 'Arrays store multiple values, and loops help you iterate through them.',
      code: 'const fruits = ["apple", "banana", "orange"];\n\nfor (let fruit of fruits) {\n  console.log(fruit);\n}',
      hint: 'Use for...of loop to iterate through array elements'
    }
  ]
};

export const TutorialPanel: React.FC<TutorialPanelProps> = ({ 
  tutorial = defaultTutorial 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const progress = ((currentStep + 1) / tutorial.steps.length) * 100;

  const goToNextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setShowHint(false);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowHint(false);
    }
  };

  const currentStepData = tutorial.steps[currentStep];

  return (
    <Card className="h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="font-semibold">{tutorial.title}</h3>
        </div>
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-muted-foreground">
            Step {currentStep + 1} of {tutorial.steps.length}
          </span>
          <span className="text-xs text-muted-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-success" />
            <h4 className="font-medium">{currentStepData.title}</h4>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {currentStepData.content}
          </p>
        </div>

        {currentStepData.code && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium">Example Code:</h5>
            <div className="bg-code-bg rounded-lg p-3 font-mono text-sm border border-border">
              <pre className="text-foreground whitespace-pre-wrap">
                {currentStepData.code}
              </pre>
            </div>
          </div>
        )}

        {currentStepData.hint && (
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowHint(!showHint)}
              className="text-warning hover:text-warning"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </Button>
            {showHint && (
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                <p className="text-sm text-warning-foreground">
                  💡 {currentStepData.hint}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>
          <Button
            variant="primary"
            onClick={goToNextStep}
            disabled={currentStep === tutorial.steps.length - 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </Card>
  );
};