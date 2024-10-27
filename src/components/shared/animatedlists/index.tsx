"use client";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Shift Assigned",
    description: "Employee Scheduling",
    time: "15m ago",
    icon: "☕️",
    color: "#B08968",
  },
  {
    name: "New Leave Request",
    description: "HRMS System",
    time: "10m ago",
    icon: "📅",
    color: "#6D597A",
  },
  {
    name: "Payroll Processed",
    description: "Finance",
    time: "5m ago",
    icon: "💵",
    color: "#3D5A80",
  },
  {
    name: "Training Reminder",
    description: "Learning & Development",
    time: "2m ago",
    icon: "📚",
    color: "#EE6C4D",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto  bg-secondary w-full max-w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-secondary",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md  "
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center bg-secondary rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[700px] pb-7 w-full flex-col p-6 overflow-hidden rounded-lg",
        className
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
