// app/layout.tsx
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";

export const metadata = {
  title: "Ghost Recruiter",
  description: "Get rejected by AI before recruiters do.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />

        {/* Padding-top to offset fixed navbar */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}