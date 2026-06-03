import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import CookieBanner from "@/components/layout/CookieBanner";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd />
      <Navbar />
      <main className="flex-grow pt-24">{children}</main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
