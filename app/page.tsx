import LinkCard from "@/components/link-card";

const links = [
  {
    title: "GitHub",
    href: "https://github.com/aleclay10",
    description: "Check out my projects",
  },
  {
    title: "Twitter / X",
    href: "https://x.com",
    description: "Follow me on X",
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    description: "Connect with me",
  },
  {
    title: "Portfolio",
    href: "https://example.com",
    description: "See my work",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-16">
      <main className="flex w-full max-w-md flex-col items-center gap-8">
        {/* Avatar */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 text-3xl font-bold">
          AL
        </div>

        {/* Name & Bio */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Alec Layton</h1>
          <p className="mt-2 text-white/60">
            Developer & builder. Welcome to my corner of the internet.
          </p>
        </div>

        {/* Links */}
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard
              key={link.title}
              title={link.title}
              href={link.href}
              description={link.description}
            />
          ))}
        </div>

        {/* Footer */}
        <p className="mt-4 text-sm text-white/40">
          Built with Next.js
        </p>
      </main>
    </div>
  );
}
