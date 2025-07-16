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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10" />
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Melodia
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create custom songs with the power of AI. Transform your emotions, stories, and dreams into beautiful music.
          </p>
        </div>
      </div>

      {/* Section 1: Custom Creations */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Some of our custom creations
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {customCreations.map((song) => (
            <Card key={song.id} className="bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{song.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{song.artist}</p>
                <p className="text-muted-foreground text-xs mb-4">{song.duration}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSong(song)}
                  className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/20"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Play
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Section 2: Create Custom Song */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-foreground">
            Create custom{" "}
            <SpinningReel words={reelWords} className="text-4xl font-bold" />
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleFormOpen("a")}
              className="h-20 text-wrap p-4 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              What kind of music do you want it to be?
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleFormOpen("b")}
              className="h-20 text-wrap p-4 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              What do you want it to be about?
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleFormOpen("c")}
              className="h-20 text-wrap p-4 bg-gradient-secondary hover:bg-gradient-primary/20 border border-border"
            >
              Make your song special
            </Button>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-12 py-4 text-lg"
          >
            Create
          </Button>
        </div>
      </section>

      {/* Section 3: Testimonials */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          What our users say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  <Quote className="h-4 w-4 inline mr-1" />
                  {testimonial.content}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/20 text-center">
        <p className="text-muted-foreground">
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
