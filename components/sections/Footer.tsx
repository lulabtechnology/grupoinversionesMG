import Brand from "@/components/site/Brand";
import { landing } from "@/content/landing";

export default function Footer() {
  return (
    <footer className="border-t bg-white relative overflow-hidden">
      {/* Watermark sutil del logo en footer */}
      <img
        src={landing.images.logo}
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none select-none
          absolute -left-12 -bottom-16
          w-[320px] sm:w-[420px]
          opacity-[0.05]
          blur-[0.2px]
        "
      />

      <div className="container-pad py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand más grande */}
          <div className="origin-left scale-[1.18] sm:scale-[1.22]">
            <Brand />
          </div>

          <p className="text-xs text-mutedForeground">
            © {new Date().getFullYear()} Grupo MG. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
