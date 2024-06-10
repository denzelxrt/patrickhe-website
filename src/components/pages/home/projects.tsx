import { Star, ExternalLink } from "lucide-react";
import { getRepo } from "@/lib/api/github";
import { getTextColor } from "@/lib/get-text-color";
import { Repo } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

function getLanguageColor(language: string): string {
  const languageColors: { [key: string]: string } = {
    HTML: "#d96b40",
    JavaScript: "#dab860",
    Python: "#4B8BBE",
    Java: "#a88532",
    "C#": "#4C8054",
    "C++": "#d67b96",
    CSS: "#7b6d95",
    Ruby: "#913832",
    Swift: "#d99058",
    Go: "#5DC9E2",
    TypeScript: "#3178C6",
  };

  return languageColors[language] || "#7a7e83";
}

export async function Projects() {
  let allData = (await getRepo()) as Repo[];

  const sortedRepos = allData.sort((a, b) => b.stargazers_count - a.stargazers_count);

  const data = sortedRepos.slice(0, 6);

  return (
    <>
      {data.map((project, index) => (
        <Card key={index} className="flex flex-col justify-between">
          <CardHeader>
            <div className="flex justify-between">
              <a
                target="_blank"
                href={project.html_url}
                rel="noopener noreferrer"
                aria-label={project.name}
              >
                <CardTitle className="text-base hover:underline">{project.name}</CardTitle>
              </a>
              <a
                target="_blank"
                href={project.homepage || project.html_url}
                rel="noopener noreferrer"
                aria-label="Visit the project's live url/repo"
              >
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </a>
            </div>
            <CardDescription className="line-clamp-2 text-sm font-light">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-between">
            <Badge
              style={{
                backgroundColor: getLanguageColor(project.language),
                color: `${getTextColor(getLanguageColor(project.language))}`,
              }}
            >
              {project.language}
            </Badge>
            <CardDescription className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              {project.stargazers_count}
            </CardDescription>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}