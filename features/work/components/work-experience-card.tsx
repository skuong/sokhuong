import Link from "next/link"

import { differenceInMonths } from "date-fns/fp"
import { Plus } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage
} from "@/components/ui/avatar"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export type WorkExperience = {
  id: number
  company: string
  role: string
  startDate: string
  endDate: string
  previewWorkEndDate: string
}

export function WorkExperienceCard({ work }: { work: WorkExperience }) {
  const previewWorkEndDate = new Date(work.previewWorkEndDate)

  const startDate = new Date(work.startDate)
  const endDate = new Date(work.endDate)
  const startPosition = differenceInMonths(previewWorkEndDate, startDate)

  const width = differenceInMonths(startDate, endDate)

  return (
    <Link href={`/work#${work.company}`}>
      <Card
        className="relative h-96 shrink-0 overflow-visible"
        style={{
          width: `${width * 4}rem`,
          marginLeft: `${startPosition * 3}rem`
        }}
      >
        <CardHeader>
          <CardTitle className="font-mono text-4xl">{work.company}</CardTitle>
          <CardDescription className="font-mono text-xl">
            {work.role}
          </CardDescription>
          <CardAction>
            <Plus className="size-6 text-muted" />
          </CardAction>
        </CardHeader>

        <CardContent>
          <AvatarGroup className="ml-auto grayscale">
            <Avatar className="size-32 rounded-md">
              <AvatarImage
                className={"rounded-md"}
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-32 rounded-md">
              <AvatarImage
                className={"rounded-md"}
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="size-32 rounded-md">
              <AvatarImage
                className={"rounded-md"}
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </CardContent>

        <CardFooter className="mt-auto">
          <AvatarGroup className="ml-auto grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
        </CardFooter>

        <div className="absolute -bottom-24 h-20 w-px bg-muted"></div>

        <div className="absolute -bottom-36 font-mono text-3xl text-muted-foreground">
          {new Date(work.startDate).getFullYear()}
        </div>
      </Card>
    </Link>
  )
}
