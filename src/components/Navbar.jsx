import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-center gap-5 fs-4">
        <Link href="/">Home</Link>
        <Link href="/movie">Movie</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/search">Search</Link> 
        {/* ทำให้มีลิงค์โผล่ */}
      </div>
      <hr />
    </div>
  );
};
