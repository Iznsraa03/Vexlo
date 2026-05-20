export interface GameCard {
  id: string;
  title: string;
  genre: string;
  badge: string;
  gradient: string;
  emoji: string;
  url: string;
}

export interface Feature {
  icon: string; // Since it's a JSON string we might store icon name, but for now let's just keep the data in a TS file if it contains React Nodes, or change it to icon names.
  title: string;
  desc: string;
}

export interface PaymentMethod {
  label: string;
  abbr: string;
  color: string;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  link: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
