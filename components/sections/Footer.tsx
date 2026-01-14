import Brand from "@/components/site/Brand";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container-pad py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Brand />
          <p className="text-xs text-mutedForeground">
            © {new Date().getFullYear()} Grupo MG. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
