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
import { JobHuntWidget } from "@/components/widgets/JobHuntWidget";
import { LearningWidget } from "@/components/widgets/LearningWidget";
import { EntertainmentWidget } from "@/components/widgets/EntertainmentWidget";
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
    { id: "jobs", type: "jobs", position: { x: 0, y: 2, width: 1, height: 1 } },
    { id: "learning", type: "learning", position: { x: 1, y: 2, width: 1, height: 1 } },
    { id: "entertainment", type: "entertainment", position: { x: 2, y: 2, width: 2, height: 1 } },
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
      case "jobs":
        return <JobHuntWidget key={widget.id} />;
      case "learning":
        return <LearningWidget key={widget.id} />;
      case "entertainment":
        return <EntertainmentWidget key={widget.id} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 lg:p-6 relative">
      {/* Background overlay for better readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        {/* Header */}
        <header className="glass-panel mb-8 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-8 w-8 text-white" />
                <h1 className="text-3xl font-bold text-white">MyMirror</h1>
              </div>
              <Badge variant="secondary" className="glass-button text-white border-white/30">
                AI-Powered Dashboard
              </Badge>
            </div>

            <div className="flex items-center space-x-4">
              {/* Current Time */}
              <div className="text-right">
                <div className="text-2xl font-bold text-white">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div className="text-sm text-white/70">
                  {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
                </div>
              </div>

              {/* Voice Command */}
              <Button
                variant={isListening ? "default" : "outline"}
                size="lg"
                onClick={handleVoiceCommand}
                className={`glass-button text-white border-white/30 ${isListening ? "voice-listening" : ""}`}
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
                className="glass-button text-white border-white/30"
              >
                <Settings className="h-5 w-5 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </header>

        {/* Quick Theme Switcher */}
        <div className="flex items-center justify-center mb-6">
          <div className="glass-panel p-4">
            <div className="flex items-center space-x-3">
              <Palette className="h-4 w-4 text-white/70" />
              <span className="text-sm text-white/70">Theme:</span>
              {["default", "warm", "cool", "nature"].map((theme) => (
                <Button
                  key={theme}
                  variant={currentTheme === theme ? "default" : "ghost"}
                  size="sm"
                  onClick={() => handleThemeChange(theme)}
                  className={`capitalize glass-button text-white border-white/30 ${
                    currentTheme === theme ? "bg-white/20" : ""
                  }`}
                >
                  {theme}
                </Button>
              ))}
            </div>
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
            className="glass-button rounded-full h-14 w-14 shadow-lg text-white border-white/30"
            onClick={() => {/* TODO: Add widget functionality */}}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </div>
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