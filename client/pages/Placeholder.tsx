import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({
  title,
  description = "This page is coming soon. Continue the conversation to help build out this section.",
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 sm:py-24">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Construction className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go back
          </Button>
        </div>
      </section>
    </div>
  );
}
