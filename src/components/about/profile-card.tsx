import Image from "next/image";
import { Mail } from "lucide-react";

import type { TeamMember } from "@/components/landing/content";

type ProfileCardProps = {
  member: TeamMember;
};

export function ProfileCard({ member }: ProfileCardProps) {
  return (
    <article className="mx-auto w-full max-w-sm overflow-hidden">
      <div className="relative aspect-[4/4.7] w-full">
        <Image
          src={member.imageSrc}
          alt={member.name}
          fill
          className="rounded-xl object-cover object-center"
          sizes="(min-width: 1024px) 24rem, 100vw"
        />
      </div>
      <div className="space-y-4 px-1 py-5">
        <div>
          <h2 className="text-2xl font-light tracking-[-0.04em] text-foreground">
            {member.name}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{member.role}</p>
        </div>
        <p className="text-sm leading-6 text-muted-foreground">{member.description}</p>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 border-b border-border pb-1 text-sm text-foreground/80 transition-colors hover:text-foreground"
        >
          <Mail className="size-4" />
          {member.email}
        </a>
      </div>
    </article>
  );
}
