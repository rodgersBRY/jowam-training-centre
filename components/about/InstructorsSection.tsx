import Image from "next/image";
import { images } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ------------------------------------------------------------------
   PLACEHOLDER BIOS — replace with real staff names, credentials,
   and individual portrait public IDs before launch.
   ------------------------------------------------------------------ */

type Instructor = {
  name: string;
  credential: string;
  bio: string;
  imagePublicId?: string;
};

const instructors: Instructor[] = [
  {
    name: "Dorcas Mutavi",
    credential: "SCA Barista Skills — Professional",
    // imagePublicId: images.saturdayPractical,
    bio: "Dorcas spent six years on the floor of Nairobi's busiest hotel-lobby café before crossing into training. He holds the SCA Professional Barista Skills certification and has coached competition teams at three regional barista championships. His speciality is sensory calibration — teaching students to identify and correct flavour defects by taste alone.",
  },
  {
    name: "Angelique Mutoni",
    credential: "SCA Coffee Roasting — Intermediate · Q Grader Candidate",
    // imagePublicId: images.facilities.espressoLab,
    bio: "Angelique trained under roasters in Mombasa and Kericho before joining Jowam. She manages the roasting curriculum and leads the extraction-science modules. Currently completing her Q Grader certification through the Coffee Quality Institute, she brings a research mindset to every cupping session — insisting students document their sensory notes, not just taste.",
  },
];

export function InstructorsSection() {
  return (
    <section className="section-y bg-roast">
      <Container>
        <SectionHeading
          eyebrow="Meet the team"
          title="Instructors who work the industry"
          lead="Every coach at Jowam has come up through commercial coffee — they know what real kitchens and cafés demand, and they build that reality into every session."
          align="center"
          onRoast
        />

        <ul
          className="mt-16 grid gap-8 place-items-center md:grid-cols-2"
          role="list"
        >
          {instructors.map((instructor) => (
            <li
              key={instructor.name}
              className="rounded-card overflow-hidden bg-[rgb(255_255_255/0.05)] border border-[rgb(255_255_255/0.08)] md:w-3/4"
            >
              {/* Portrait — 4:5 (aspect-4/5) crop */}
              <div className="relative w-full">
                {instructor.imagePublicId && (
                  <Image
                    src={cloudinaryUrl(instructor.imagePublicId, {
                      width: 480,
                      height: 600,
                      crop: "fill",
                    })}
                    alt={`Portrait of ${instructor.name}, ${instructor.credential}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                )}
              </div>

              {/* Caption + bio */}
              <div className="p-6">
                <p className="font-display font-bold text-(length:--text-h3) text-paper">
                  {instructor.name}
                </p>
                <p className="mt-1 text-small font-semibold uppercase tracking-widest text-brand-orange">
                  {instructor.credential}
                </p>
                <p className="mt-4 text-(length:--text-body) text-roast-text leading-[1.65]">
                  {instructor.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
