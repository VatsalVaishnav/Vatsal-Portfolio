export default function Footer() {
  return (
    <footer className="py-8 border-t border-glass-border bg-black/80">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Vatsal Vaishnav. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Built with Next.js, TailwindCSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
