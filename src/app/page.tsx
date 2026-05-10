import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";

export default function Home() {
    return (
        <div className="min-h-full flex flex-col">
            {/* Header */}
            <Header />
            {/* main */}
            <main className="flex-1">
                {/* Hero */}
                <Hero />
                {/* Features / How it works */}
                <Features />
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}
