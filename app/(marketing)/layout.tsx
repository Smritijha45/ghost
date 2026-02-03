import Navbar from "@/app/(marketing)/components/navbar/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        {children}
      </main>
    </>
  );
}