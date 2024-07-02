import Image from 'next/image';
import Link from 'next/link';

export const WORKS: WorkProps[] = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnISyviAL1F9re6bLjo1YRe--1qYMD1FFYTQ&s",
    title: "Crédit Agricole des Savoie",
    role: "Développeur Web",
    date: "2024-2023",
    url: "https://www.credit-agricole.fr/",
  },
  {
    image: "https://media.licdn.com/dms/image/D4E0BAQFzTZ0EZV0rSg/company-logo_200_200/0/1698677460125/alpha_agency_ch_logo?e=1727913600&v=beta&t=-gcFpThyL8FccGp93OPSgIPDMgU0NpTBbWhPSg5eDa8",
    title: "Alpha Agency",
    role: "Développeur Web",
    date: "2023",
    url: "https://www.alphaagency.ch/"
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1801/1801514.png",
    title: "De nombreuses",
    role: "autres expériences !",
    date: "2022-...",
    url: "/"
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

export const Work = (props: WorkProps) => {
  return (
    <Link target="_blank" href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
      <Image
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
        width={40}
        height={40}
      />
      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold">{props.title}</p>
        </div>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
