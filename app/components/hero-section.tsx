import { Button } from "~/components/ui/button"
import PersonalInfo from "~/components/personal-info"

export function HeroSection() {
    return (
        <section className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
                    Hey, I'm Carlos Castillo
                </h1>
                <h2 className="text-2xl sm:text-2xl font-bold tracking-tight mt-3 mb-3">
                    Full-stack Software Developer
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    I build fast, accessible, and reliable web applications. I work across
                    the stack — from the database and APIs to polished UIs and CI/CD.
                </p>
                
                <div className="mt-8 flex items-center justify-center gap-4">
                    <a href="#projects">
                        <Button size="lg">See projects</Button>
                    </a>
                    <a href="#contact">
                        <Button variant="outline" size="lg">Get in touch</Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
