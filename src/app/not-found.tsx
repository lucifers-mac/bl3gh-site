import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="bl3gh-mark text-6xl tracking-wider text-[#f0f0f0] mb-4">404</h1>
      <p className="text-[#707070] mb-8">This page has been judged and found wanting.</p>
      <Link
        href="/"
        className="border border-[#333] px-8 py-3 text-sm tracking-wider uppercase text-[#b0b0b0] hover:text-[#f0f0f0] hover:border-[#666] transition-all"
      >
        Return to BL3GH
      </Link>
    </div>
  );
}
