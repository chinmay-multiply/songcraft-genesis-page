import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star, Quote } from "lucide-react";
import { SpinningReel } from "@/components/SpinningReel";
import { MediaPlayer } from "@/components/MediaPlayer";
import { FormModal } from "@/components/FormModal";

const Index = () => {
  const [selectedSong, setSelectedSong] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  const reelWords = ["Song", "Music", "Shayari", "Poem", "Lullaby", "Melodia"];

  const customCreations = [
    {
      id: 1,
      title: "Sunset Dreams",
      artist: "AI Composer",
      duration: "3:24",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 2,
      title: "Urban Nights",
      artist: "Digital Maestro",
      duration: "4:12",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 3,
      title: "Ocean Waves",
      artist: "Melodia AI",
      duration: "2:58",
      audioUrl: "/placeholder-audio.mp3"
    },
    {
      id: 4,
      title: "Mountain Echo",
      artist: "Synthetic Sounds",
      duration: "3:45",
      audioUrl: "/placeholder-audio.mp3"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Music Producer",
      content: "Melodia transformed my creative process. The AI-generated compositions are incredibly sophisticated and unique. I've never experienced such seamless music creation.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Singer-Songwriter",
      content: "As a professional musician, I was skeptical at first. But Melodia's ability to understand emotion and translate it into beautiful melodies is simply phenomenal.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content: "The custom songs I create with Melodia perfectly capture the mood for my videos. It's like having a personal composer who understands exactly what I need.",
      rating: 5
    },
    {
      name: "David Thompson",
      role: "Wedding Planner",
      content: "Melodia helps me create personalized songs for couples that tell their unique love story. The emotional impact is incredible and my clients are always amazed.",
      rating: 5
    }
  ];

  const handleFormOpen = (buttonType: string) => {
    let title = "";
    switch (buttonType) {
      case "a":
        title = "What kind of music do you want it to be?";
        break;
      case "b":
        title = "What do you want it to be about?";
        break;
      case "c":
        title = "Make your song special";
        break;
    }
    setFormTitle(title);
    setIsFormOpen(true);
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Hero Header */}
      <div className="relative py-8 text-center bg-gradient-primary/5">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
          Melodia
        </h1>
        <p className="text-sm text-muted-foreground max-w-md mx-auto px-4">
          Create custom songs with the power of AI
        </p>
      </div>

      {/* Section 1: Custom Creations */}
      <section className="flex-1 px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          Some of our custom creations
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 px-2">
          {customCreations.map((song) => (
            <Card key={song.id} className="min-w-[280px] bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 text-sm">{song.title}</h3>
                <p className="text-muted-foreground text-xs mb-1">{song.artist}</p>
                <p className="text-muted-foreground text-xs mb-3">{song.duration}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSong(song)}
                  className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/20 h-8 text-xs"
                >
                  <Play className="h-3 w-3 mr-1" />
                  Play
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Create Custom Song */}
      <section className="flex-1 bg-secondary/30 px-4 py-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-foreground">
            Create custom{" "}
            <SpinningReel words={reelWords} className="text-2xl font-bold" />
          </h2>
          
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Button
              variant="secondary"
              onClick={() => handleFormOpen("a")}
              className="h-16 text-xs text-wrap p-2 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              What kind of music do you want it to be?
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleFormOpen("b")}
              className="h-16 text-xs text-wrap p-2 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              What do you want it to be about?
            </Button>
            <Button
              variant="secondary"
              onClick={() => handleFormOpen("c")}
              className="h-16 text-xs text-wrap p-2 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              Make your song special
            </Button>
          </div>
          
          <Button 
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 py-3"
          >
            Create
          </Button>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="flex-1 px-4 py-6">
        <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
          What our users say
        </h2>
        <div className="flex gap-4 overflow-x-auto pb-4 px-2">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="min-w-[300px] bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-3 italic text-xs line-clamp-3">
                  <Quote className="h-3 w-3 inline mr-1" />
                  {testimonial.content}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-secondary/20 text-center">
        <p className="text-muted-foreground text-xs">
          © 2024 Melodia. Creating music with artificial intelligence.
        </p>
      </footer>

      {/* Media Player Modal */}
      {selectedSong && (
        <MediaPlayer
          song={selectedSong}
          onClose={() => setSelectedSong(null)}
        />
      )}

      {/* Form Modal */}
      <FormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        title={formTitle}
      />
    </div>
  );
};

export default Index;
