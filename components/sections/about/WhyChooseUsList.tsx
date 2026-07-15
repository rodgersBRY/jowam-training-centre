import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChooseUs, type WhyChooseUsIcon } from "@/lib/data/why-choose-us";
import {
  UserIcon,
  CoffeeIcon,
  CalendarIcon,
  RepeatIcon,
  AwardIcon,
  GlobeIcon,
  ClockIcon,
} from "@/components/ui/icons";
import { stockImages } from "@/lib/data/stock-images";

const iconMap: Record<WhyChooseUsIcon, typeof UserIcon> = {
  user: UserIcon,
  coffee: CoffeeIcon,
  calendar: CalendarIcon,
  repeat: RepeatIcon,
  award: AwardIcon,
  globe: GlobeIcon,
  clock: ClockIcon,
};

/** About-page presentation of the shared why-choose-us list — vertical checklist beside a photo. */
export function WhyChooseUsList() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-card lg:order-2">
            <Image
              src={stockImages.whyChooseUsAbout}
              alt="Instructor guiding a student through espresso extraction"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="lg:order-1">
            <SectionHeading eyebrow="Why choose us" title="What sets Jowam apart" />
            <ul className="mt-8 space-y-6">
              {whyChooseUs.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-roast/[0.05] text-brand-orange">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="font-bold text-roast">{item.title}</h3>
                      <p className="mt-1 text-small text-brand-brown leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
