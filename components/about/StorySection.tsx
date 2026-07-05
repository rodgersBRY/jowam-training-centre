import Image from "next/image";
import { images } from "@/lib/data/images";
import { cloudinaryUrl } from "@/lib/utils/cloudinary";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function StorySection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Copy */}
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Born from a love of the bean"
              as="h2"
            />
            <div className="mt-6 space-y-4 text-(length:--text-body) leading-[1.65] text-brand-brown measure">
              <p>
                Jowam Coffee Training Centre opened its doors in Nairobi CBD
                with one clear conviction: great baristas are made on the
                machine, not in the classroom. Too many training programmes
                filled notebooks and left students unsure how to pull a
                consistent espresso under real café pressure. We built Jowam to
                close that gap — a dedicated school in the heart of the city
                where every session ends with your hands on equipment.
              </p>
              <p>
                Our facility at Pension Towers on Loita Street runs monthly
                intakes, capped small so every student gets individual coaching
                time. Whether you are eyeing your first barista role, upgrading
                your latte-art game, or learning to roast green beans from
                scratch, the curriculum moves at the pace of your ambition.
                Theory is brief and purposeful; practical time is generous.
              </p>
              <p>
                We believe specificity builds confidence. You will know why a
                22-second extraction tastes different from a 28-second one, what
                grind adjustment to make in Nairobi&apos;s morning humidity, and
                how to calibrate a commercial grinder cold. That kind of depth
                is what employers notice — and what makes the difference between
                a graduate who survives a busy Saturday and one who owns it.
              </p>
            </div>
          </div>

          {/* Photography */}
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[12px]">
            <Image
              src={cloudinaryUrl(images.story, {
                width: 800,
                height: 1000,
                crop: "fill",
              })}
              alt="Students working through practical extraction drills at Jowam Coffee Training Centre"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
