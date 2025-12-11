export default function Footer() {
  return (
    <footer className="py-8 border-t border-gold/20 bg-black/90">
      <div className="container mx-auto px-6 text-center text-gold/80">
        <p className="font-semibold tracking-wide">
          &copy; {new Date().getFullYear()} Vatsal Vaishnav. All rights
          reserved.
        </p>
        <p className="text-sm mt-2 font-medium">
          Built with Next.js, TailwindCSS & Framer Motion
        </p>
      </div>
    </footer>
  );
}
