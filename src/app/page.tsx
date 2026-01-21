import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import LinkWithIcon from "@/components/LinkWithIcon";
import Skills from "@/components/Skills";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 2;

export default async function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg w-48 h-48 object-cover object-center"
          src="/mohamed.jpeg"
          alt="Photo de Mohamed"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="text-5xl">Mohamed RAHMANI</h1>
          <p className="mt-4 font-light">
            Doing a Master&apos;s degree in Software Engineering at Univeristé
            Paris-Saclay. I&apos;m looking for a 4-month internship starting in
            May 2026
          </p>
          <section className="mt-4 flex items-center gap-8">
            <Link href="/Resume_Mohamed_RAHMANI.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Skills />

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="text-2xl sm:text-3xl">My projects ✨</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="see more"
          />
        </div>
        <FeaturedProjects limit={LIMIT} />
      </section>
    </article>
  );
}
