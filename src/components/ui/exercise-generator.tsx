import React, { useState } from 'react';
import { Card } from './card';
import { Button } from './button';
import { Badge } from './badge';
import { Shuffle, CheckCircle, XCircle, RefreshCw, Zap } from 'lucide-react';

interface Exercise {
  id: string;
  title: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  startingCode: string;
  expectedOutput: string;
  hints: string[];
}

interface ExerciseGeneratorProps {
  onSelectExercise?: (exercise: Exercise) => void;
}

const sampleExercises: Exercise[] = [
  {
    id: '1',
    title: 'Sum of Two Numbers',
    difficulty: 'beginner',
    description: 'Write a function that takes two numbers and returns their sum.',
    startingCode: 'function sum(a, b) {\n  // Your code here\n}',
    expectedOutput: 'sum(2, 3) should return 5',
    hints: ['Use the + operator', 'Remember to return the result']
  },
  {
    id: '2',
    title: 'Array Filter',
    difficulty: 'intermediate',
    description: 'Create a function that filters even numbers from an array.',
    startingCode: 'function filterEven(numbers) {\n  // Your code here\n}',
    expectedOutput: 'filterEven([1, 2, 3, 4, 5, 6]) should return [2, 4, 6]',
    hints: ['Use the filter method', 'Check if number % 2 === 0']
  },
  {
    id: '3',
    title: 'Object Destructuring',
    difficulty: 'advanced',
    description: 'Extract name and age from a user object using destructuring.',
    startingCode: 'const user = { name: "Alice", age: 30, city: "NYC" };\n// Extract name and age here',
    expectedOutput: 'Should create variables name="Alice" and age=30',
    hints: ['Use curly braces {}', 'const { name, age } = user']
  }
];

const getDifficultyColor = (difficulty: Exercise['difficulty']) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-success text-success-foreground';
    case 'intermediate':
      return 'bg-warning text-warning-foreground';
    case 'advanced':
      return 'bg-error text-error-foreground';
    default:
      return 'bg-secondary text-secondary-foreground';
  }
};

export const ExerciseGenerator: React.FC<ExerciseGeneratorProps> = ({ onSelectExercise }) => {
  const [exercises, setExercises] = useState(sampleExercises);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateNewExercise = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      const newExercise: Exercise = {
        id: Date.now().toString(),
        title: 'String Reversal',
        difficulty: 'intermediate',
        description: 'Write a function that reverses a string without using built-in methods.',
        startingCode: 'function reverseString(str) {\n  // Your code here\n}',
        expectedOutput: 'reverseString("hello") should return "olleh"',
        hints: ['Use a loop', 'Build the result character by character']
      };
      setExercises([newExercise, ...exercises.slice(0, 2)]);
      setIsGenerating(false);
    }, 2000);
  };

  const selectExercise = (exercise: Exercise) => {
    setSelectedExercise(exercise);
    onSelectExercise?.(exercise);
  };

  return (
    <Card className="h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-warning" />
            <h3 className="font-semibold">Exercise Generator</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={generateNewExercise}
            disabled={isGenerating}
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Shuffle className="w-4 h-4 mr-2" />
            )}
            {isGenerating ? 'Generating...' : 'Generate New'}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            className={`p-3 rounded-lg border transition-smooth cursor-pointer ${
              selectedExercise?.id === exercise.id
                ? 'border-primary bg-primary/10'
                : 'border-border bg-secondary/30 hover:bg-secondary/50'
            }`}
            onClick={() => selectExercise(exercise)}
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-sm">{exercise.title}</h4>
              <Badge className={`text-xs ${getDifficultyColor(exercise.difficulty)}`}>
                {exercise.difficulty}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              {exercise.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Expected: {exercise.expectedOutput}
              </span>
              {selectedExercise?.id === exercise.id && (
                <CheckCircle className="w-4 h-4 text-success" />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedExercise && (
        <div className="p-4 border-t border-border bg-secondary/20">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">Exercise Selected</span>
          </div>
          <p className="text-xs text-muted-foreground mb-2">
            {selectedExercise.title} - {selectedExercise.difficulty}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              Load Code
            </Button>
            <Button variant="default" size="sm" className="text-xs">
              Start Exercise
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};