import React from 'react';
import { Card } from './card';
import { Badge } from './badge';
import { AlertTriangle, Bug, Info, CheckCircle } from 'lucide-react';

interface Issue {
  id: string;
  type: 'error' | 'warning' | 'info' | 'success';
  message: string;
  line?: number;
  column?: number;
  suggestion?: string;
}

interface ErrorPanelProps {
  issues?: Issue[];
}

const defaultIssues: Issue[] = [
  {
    id: '1',
    type: 'error',
    message: 'Uncaught SyntaxError: Unexpected token',
    line: 5,
    column: 12,
    suggestion: 'Check for missing semicolon or bracket'
  },
  {
    id: '2',
    type: 'warning',
    message: 'Variable "result" is declared but never used',
    line: 3,
    column: 8,
    suggestion: 'Consider removing unused variables'
  },
  {
    id: '3',
    type: 'info',
    message: 'Consider using const instead of let for immutable values',
    line: 2,
    column: 1,
    suggestion: 'Use const for better code practices'
  }
];

const getIssueIcon = (type: Issue['type']) => {
  switch (type) {
    case 'error':
      return <AlertTriangle className="w-4 h-4 text-error" />;
    case 'warning':
      return <Bug className="w-4 h-4 text-warning" />;
    case 'info':
      return <Info className="w-4 h-4 text-primary" />;
    case 'success':
      return <CheckCircle className="w-4 h-4 text-success" />;
  }
};

const getIssueBadgeVariant = (type: Issue['type']) => {
  switch (type) {
    case 'error':
      return 'destructive';
    case 'warning':
      return 'secondary';
    case 'info':
      return 'outline';
    case 'success':
      return 'default';
    default:
      return 'outline';
  }
};

export const ErrorPanel: React.FC<ErrorPanelProps> = ({ issues = defaultIssues }) => {
  const errorCount = issues.filter(i => i.type === 'error').length;
  const warningCount = issues.filter(i => i.type === 'warning').length;

  return (
    <Card className="h-full">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Code Analysis</h3>
          <div className="flex gap-2">
            {errorCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {errorCount} error{errorCount !== 1 ? 's' : ''}
              </Badge>
            )}
            {warningCount > 0 && (
              <Badge variant="secondary" className="text-xs">
                {warningCount} warning{warningCount !== 1 ? 's' : ''}
              </Badge>
            )}
          </div>
        </div>
      </div>
      <div className="max-h-80 overflow-y-auto">
        {issues.length === 0 ? (
          <div className="p-6 text-center text-muted-foreground">
            <CheckCircle className="w-8 h-8 mx-auto mb-2 text-success" />
            <p>No issues found! Your code looks great.</p>
          </div>
        ) : (
          <div className="p-2 space-y-2">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className="p-3 rounded-lg border border-border bg-secondary/30 hover:bg-secondary/50 transition-smooth cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  {getIssueIcon(issue.type)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={getIssueBadgeVariant(issue.type)} className="text-xs">
                        {issue.type}
                      </Badge>
                      {issue.line && (
                        <span className="text-xs text-muted-foreground">
                          Line {issue.line}:{issue.column}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium mb-1">{issue.message}</p>
                    {issue.suggestion && (
                      <p className="text-xs text-muted-foreground">{issue.suggestion}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};