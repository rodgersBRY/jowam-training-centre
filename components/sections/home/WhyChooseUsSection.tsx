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

const iconMap: Record<WhyChooseUsIcon, typeof UserIcon> = {
  user: UserIcon,
  coffee: CoffeeIcon,
  calendar: CalendarIcon,
  repeat: RepeatIcon,
  award: AwardIcon,
  globe: GlobeIcon,
  clock: ClockIcon,
};

/** Homepage presentation of the shared why-choose-us list — icon-topped cards. */
export function WhyChooseUsSection() {
  return (
    <section className="section-y bg-paper">
      <Container>
        <SectionHeading
          eyebrow="Why Jowam"
          title="Training built for the real industry"
          lead="There are plenty of short coffee courses out there. Jowam is different because we build for what happens after graduation."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="rounded-card border border-line bg-roast/[0.03] p-8"
              >
                <Icon size={28} className="text-brand-orange" />
                <h3 className="mt-4 text-h3 font-bold text-roast">
                  {item.title}
                </h3>
                <p className="mt-3 text-brand-brown leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
