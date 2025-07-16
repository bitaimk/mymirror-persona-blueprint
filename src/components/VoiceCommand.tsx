import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Volume2, Sparkles } from "lucide-react";

interface VoiceCommandProps {
  isListening: boolean;
}

export function VoiceCommand({ isListening }: VoiceCommandProps) {
  const [currentCommand, setCurrentCommand] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  const sampleCommands = [
    "Make it warmer",
    "Hide music widget",
    "Show my calendar",
    "Play focus playlist",
    "Switch to dark mode",
    "Add weather widget"
  ];

  useEffect(() => {
    if (isListening) {
      setShowFeedback(true);
      // Simulate voice recognition
      const randomCommand = sampleCommands[Math.floor(Math.random() * sampleCommands.length)];
      setTimeout(() => {
        setCurrentCommand(randomCommand);
      }, 1000);
      
      setTimeout(() => {
        setShowFeedback(false);
        setCurrentCommand("");
      }, 3000);
    }
  }, [isListening]);

  if (!showFeedback) return null;

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40">
      <Card className="glass-effect border border-primary/30">
        <CardContent className="p-4">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="p-2 rounded-full bg-primary/20">
                <Mic className="h-5 w-5 text-primary" />
              </div>
              {isListening && (
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
              )}
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-xs">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Listening
                </Badge>
                <Volume2 className="h-4 w-4 text-muted-foreground" />
              </div>
              
              {currentCommand ? (
                <div className="space-y-1">
                  <p className="text-sm font-medium">"{currentCommand}"</p>
                  <p className="text-xs text-muted-foreground">Processing command...</p>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Speak your command...
                </p>
              )}
            </div>
          </div>
          
          {!currentCommand && (
            <div className="mt-3 pt-3 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Try saying:</p>
              <div className="flex flex-wrap gap-1">
                {sampleCommands.slice(0, 3).map((command, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    "{command}"
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}