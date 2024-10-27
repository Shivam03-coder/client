import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Shift Scheduling",
    body: "The shift scheduling feature has transformed how we manage our staff. It’s intuitive and saves us so much time!",
    color: "#001f3f", // Coral
  },
  {
    name: "Employee Management",
    body: "Managing employee records has never been easier. The system is user-friendly and keeps everything organized.",
    color: "#001f3f", // Sky Blue
  },
  {
    name: "Application Reviews",
    body: "The application review process is seamless. We can easily track candidates and make informed decisions.",
    color: "#001f3f", // Goldenrod
  },
  {
    name: "Digital Appraisals & Layoffs",
    body: "The digital appraisal system allows for fair evaluations and transparent feedback. It’s a game changer for our team.",
    color: "#001f3f", // Medium Sea Green
  },
  {
    name: "Automated Email System",
    body: "The automated email system keeps our communication efficient. I love how we can quickly send updates to the team!",
    color: "#001f3f", // Slate Blue
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  color,
  name,
  body,
}: {
  color: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div
          className="rounded-full"
          style={{
            backgroundColor: color, // Set the background color directly
            width: '40px', // Adjust width as needed
            height: '40px', // Adjust height as needed
          }}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-light">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
