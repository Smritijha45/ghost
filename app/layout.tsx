import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}