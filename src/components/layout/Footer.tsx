import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <Container>
        <p className="text-center text-sm text-zinc-500">
          © 2026 Dev Showcase. Built with React & Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
}