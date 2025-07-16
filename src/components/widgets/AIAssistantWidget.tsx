import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  Sparkles, 
  Lightbulb, 
  TrendingUp,
  Zap
} from "lucide-react";

export function AIAssistantWidget() {
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  
  const insights = [
    {
      type: "productivity",
      message: "Your focus time increased 23% this week",
      icon: TrendingUp,
      color: "text-green-500"
    },
    {
      type: "suggestion",
      message: "Consider taking a break - you've been coding for 2 hours",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      type: "pattern",
      message: "You're most productive between 9-11 AM",
      icon: Zap,
      color: "text-purple-500"
    }
  ];

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    setIsThinking(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsThinking(false);
      setInput("");
    }, 1500);
  };

  return (
    <Card className="widget-container ai-glow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <Brain className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium">AI Assistant</span>
          </div>
          <Badge variant="secondary" className="text-xs">
            <Sparkles className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* AI Insights */}
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start space-x-3 p-2 rounded-lg bg-muted/50">
              <insight.icon className={`h-4 w-4 mt-0.5 ${insight.color}`} />
              <p className="text-sm flex-1">{insight.message}</p>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="flex space-x-2">
          <Input
            placeholder="Ask me anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button 
            size="sm" 
            onClick={handleSendMessage}
            disabled={isThinking || !input.trim()}
            className="px-3"
          >
            {isThinking ? (
              <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            Optimize my day
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Focus mode
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            Weekly summary
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}