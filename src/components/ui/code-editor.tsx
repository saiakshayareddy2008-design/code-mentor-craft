import React, { useState } from 'react';
import { Card } from './card';
import { Button } from './button';
import { Play, Save, RotateCcw } from 'lucide-react';

interface CodeEditorProps {
  language?: string;
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  onRunCode?: () => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  language = 'javascript',
  initialCode = '// Write your code here\nfunction hello() {\n  console.log("Hello, World!");\n}',
  onCodeChange,
  onRunCode
}) => {
  const [code, setCode] = useState(initialCode);
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    onRunCode?.();
    // Simulate code execution
    setTimeout(() => setIsRunning(false), 1000);
  };

  const resetCode = () => {
    setCode(initialCode);
    onCodeChange?.(initialCode);
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-error/60"></div>
            <div className="w-3 h-3 rounded-full bg-warning/60"></div>
            <div className="w-3 h-3 rounded-full bg-success/60"></div>
          </div>
          <span className="text-sm text-muted-foreground ml-2">{language}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={resetCode}>
            <RotateCcw className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Save className="w-4 h-4" />
          </Button>
          <Button variant="primary" size="sm" onClick={handleRunCode} disabled={isRunning}>
            <Play className="w-4 h-4" />
            {isRunning ? 'Running...' : 'Run'}
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 w-12 bg-code-bg border-r border-border h-full flex flex-col text-xs text-code-line-number">
          {code.split('\n').map((_, index) => (
            <div key={index} className="h-6 flex items-center justify-center px-2">
              {index + 1}
            </div>
          ))}
        </div>
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-96 pl-12 p-4 bg-code-bg text-foreground font-mono text-sm resize-none border-0 outline-none focus:ring-0"
          style={{
            tabSize: 2,
          }}
          placeholder="Start coding..."
        />
      </div>
    </Card>
  );
};