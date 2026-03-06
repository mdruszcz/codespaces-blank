import Link from "next/link";
import MegaMenu from "./MegaMenu";

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <Link href="/" className="flex flex-col focus-ring rounded-md p-1">
            <span className="text-xl font-bold text-primary-900 tracking-tight">
              SPF Finances
            </span>
            <span className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mt-1">
              Service d'études
            </span>
          </Link>
        </div>
        <div className="hidden sm:block">
          {/* Logo or secondary info could go here */}
        </div>
      </div>
      <MegaMenu />
    </header>
  );
}
