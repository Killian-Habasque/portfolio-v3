import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

interface DateProps {
  dateString: string;
}

export default function Date({ dateString }: DateProps) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "yyyy", { locale: fr })}</time>;
}
