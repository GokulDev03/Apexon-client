import { Phone, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO } from "@/constants/company";

/** Persistent bottom bar on mobile — blueprint Step 3.3. Hidden on desktop (lg:hidden). */
export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-3 border-t border-ink-200 bg-white p-3 lg:hidden">
      <Button href={`tel:${COMPANY_INFO.phone}`} variant="ghost" size="sm" className="flex-1" icon={<Phone size={16} />} iconPosition="left">
        Call
      </Button>
      <Button href="/book-consultation" size="sm" className="flex-1" icon={<CalendarCheck size={16} />} iconPosition="left">
        Book a Call
      </Button>
    </div>
  );
}
