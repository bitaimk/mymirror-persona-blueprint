import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Settings, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Calendar, 
  Cloud, 
  Brain,
  Sparkles,
  Volume2,
  SkipForward,
  Heart,
  Plus,
  Grid3X3,
  Palette
} from "lucide-react";
import { MusicWidget } from "@/components/widgets/MusicWidget";
import { CalendarWidget } from "@/components/widgets/CalendarWidget";
import { WeatherWidget } from "@/components/widgets/WeatherWidget";
import { AIAssistantWidget } from "@/components/widgets/AIAssistantWidget";
import { StatsWidget } from "@/components/widgets/StatsWidget";
import { SettingsPanel } from "@/components/SettingsPanel";
import { VoiceCommand } from "@/components/VoiceCommand";

export default function Dashboard() {
  const [isListening, setIsListening] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("default");
  const [widgets, setWidgets] = useState([
    { id: "music", type: "music", position: { x: 0, y: 0, width: 2, height: 1 } },
    { id: "calendar", type: "calendar", position: { x: 2, y: 0, width: 1, height: 1 } },
    { id: "weather", type: "weather", position: { x: 3, y: 0, width: 1, height: 1 } },
    { id: "ai", type: "ai", position: { x: 0, y: 1, width: 2, height: 1 } },
    { id: "stats", type: "stats", position: { x: 2, y: 1, width: 2, height: 1 } },
  ]);

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleVoiceCommand = () => {
    setIsListening(!isListening);
    // Simulate AI response after 2 seconds
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
      }, 2000);
    }
  };

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.className = theme === "default" ? "" : `theme-${theme}`;
  };

  const renderWidget = (widget: any) => {
    switch (widget.type) {
      case "music":
        return <MusicWidget key={widget.id} />;
      case "calendar":
        return <CalendarWidget key={widget.id} />;
      case "weather":
        return <WeatherWidget key={widget.id} />;
      case "ai":
        return <AIAssistantWidget key={widget.id} />;
      case "stats":
        return <StatsWidget key={widget.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold gradient-text">MyMirror</h1>
          </div>
          <Badge variant="secondary" className="text-xs">
            AI-Powered Dashboard
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          {/* Current Time */}
          <div className="text-right">
            <div className="text-2xl font-bold">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </div>
            <div className="text-sm text-muted-foreground">
              {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
            </div>
          </div>

          {/* Voice Command */}
          <Button
            variant={isListening ? "default" : "outline"}
            size="lg"
            onClick={handleVoiceCommand}
            className={`relative ${isListening ? "voice-listening" : ""}`}
          >
            {isListening ? (
              <>
                <Mic className="h-5 w-5 mr-2" />
                Listening...
              </>
            ) : (
              <>
                <MicOff className="h-5 w-5 mr-2" />
                Voice
              </>
            )}
          </Button>

          {/* Settings */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
        </div>
      </header>

      {/* Quick Theme Switcher */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center space-x-2 p-2 rounded-lg glass-effect">
          <Palette className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Theme:</span>
          {["default", "warm", "cool", "nature"].map((theme) => (
            <Button
              key={theme}
              variant={currentTheme === theme ? "default" : "ghost"}
              size="sm"
              onClick={() => handleThemeChange(theme)}
              className="capitalize"
            >
              {theme}
            </Button>
          ))}
        </div>
      </div>

      {/* Widget Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
        {widgets.map((widget) => (
          <div
            key={widget.id}
            className={`
              ${widget.position.width === 2 ? "md:col-span-2" : "md:col-span-1"}
              ${widget.position.width === 2 ? "lg:col-span-2" : "lg:col-span-1"}
            `}
          >
            {renderWidget(widget)}
          </div>
        ))}
      </div>

      {/* Add Widget Button */}
      <div className="fixed bottom-6 right-6">
        <Button
          size="lg"
          className="rounded-full h-14 w-14 shadow-lg"
          onClick={() => {/* TODO: Add widget functionality */}}
        >
          <Plus className="h-6 w-6" />
        </Button>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <SettingsPanel
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />
      )}

      {/* Voice Command Component */}
      <VoiceCommand isListening={isListening} />
    </div>
  );
}