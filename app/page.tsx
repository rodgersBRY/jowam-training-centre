import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function HomePage() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-32 text-center">
      <SectionHeading
        align="center"
        eyebrow="Jowam Coffee Training Centre"
        title="Coffee Education That Fits Your Schedule"
        intro="Foundation in place. Home sections land in Phase 2."
      />
      <div className="mt-8 flex gap-4">
        <Button href="/apply">Enroll Now</Button>
        <Button href="/courses" variant="ghost">
          Explore Courses
        </Button>
      </div>
    </Container>
  );
}
