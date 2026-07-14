import type { IconType } from "react-icons";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa6";
import {
  LuArrowRight,
  LuChevronDown,
  LuX,
  LuUserRound,
  LuCoffee,
  LuCalendarDays,
  LuRepeat,
  LuMail,
  LuPhoneCall,
  LuPin,
  LuClock,
  LuBadgeDollarSign,
  LuCircleCheck,
} from "react-icons/lu";

/**
 * Icon set sourced from react-icons. Brand glyphs come from Font Awesome 6
 * (Lucide dropped brand icons); UI glyphs come from Lucide. Everything is
 * exposed through thin wrappers so call sites keep the { className, size } API
 * and colour is inherited via currentColor (Tailwind text-* utilities work).
 */
type IconProps = { className?: string; size?: number };

function icon(Glyph: IconType, defaultSize: number) {
  return function IconWrapper({ className, size = defaultSize }: IconProps) {
    return <Glyph className={className} size={size} aria-hidden="true" />;
  };
}

// Brand
export const WhatsAppIcon = icon(FaWhatsapp, 22);
export const InstagramIcon = icon(FaInstagram, 20);
export const FacebookIcon = icon(FaFacebookF, 20);
export const TikTokIcon = icon(FaTiktok, 20);

// UI
export const ArrowIcon = icon(LuArrowRight, 18);
export const ChevronIcon = icon(LuChevronDown, 18);
export const CloseIcon = icon(LuX, 20);

// Contact and Adress
export const MailIcon = icon(LuMail, 20);
export const PhoneIcon = icon(LuPhoneCall, 20);
export const AddressIcon = icon(LuPin, 20);

// Feature / marketing
export const UserIcon = icon(LuUserRound, 28);
export const CoffeeIcon = icon(LuCoffee, 28);
export const CalendarIcon = icon(LuCalendarDays, 28);
export const RepeatIcon = icon(LuRepeat, 28);
export const ClockIcon = icon(LuClock, 18);
export const PriceTagIcon = icon(LuBadgeDollarSign, 18);
export const CheckIcon = icon(LuCircleCheck, 20);

export const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  tiktok: TikTokIcon,
} as const;
