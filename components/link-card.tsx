interface LinkCardProps {
  title: string;
  href: string;
  description?: string;
}

export default function LinkCard({ title, href, description }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-center transition-all hover:scale-[1.02] hover:bg-white/10"
    >
      <span className="text-lg font-medium">{title}</span>
      {description && (
        <span className="mt-1 block text-sm text-white/60">{description}</span>
      )}
    </a>
  );
}
