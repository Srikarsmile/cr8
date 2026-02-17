import Link from "next/link";

interface PathwayCardProps {
  title: string;
  description: string;
  href: string;
  color: string;
  icon: React.ReactNode;
}

export default function PathwayCard({
  title,
  description,
  href,
  color,
  icon,
}: PathwayCardProps) {
  return (
    <Link
      href={href}
      className={`group block rounded-2xl p-6 bg-white border-2 border-transparent hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${color}`}
    >
      <div className="w-12 h-12 rounded-xl bg-current/10 flex items-center justify-center mb-4 text-current">
        {icon}
      </div>
      <h3 className="font-display text-lg font-bold text-brand-dark mb-2 group-hover:text-current transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </Link>
  );
}
