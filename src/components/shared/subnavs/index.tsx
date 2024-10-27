import { MoveLeft } from "lucide-react";
export const Subnavigations = ({
  setisActiveSegment,
  isActiveSegment,
  Subnavs,
}: {
  setisActiveSegment: (label: string) => void;
  isActiveSegment: string;
  Subnavs: string[];
}) => {
  return (
    <section className="flex  flex-1 h-[12.875rem] max-w-max flex-col">
      {Subnavs.map((label) => (
        <SubnavigationLinks
          isActiveSegment={isActiveSegment}
          setisActiveSegment={setisActiveSegment}
          label={label}
          key={label}
        />
      ))}
    </section>
  );
};

const SubnavigationLinks = ({
  label,
  setisActiveSegment,
  isActiveSegment,
}: {
  label: string;
  setisActiveSegment: (label: string) => void;
  isActiveSegment: string;
}) => {
  return (
    <button
      onClick={() => setisActiveSegment(label)}
      className="flex flex-1 items-center"
    >
      {isActiveSegment === label ? (
        <div className="h-full w-1 rounded-br-sm rounded-tr-sm bg-primary transition-all duration-300 ease-in-out" />
      ) : (
        <div className="h-full w-0 bg-transparent transition-all duration-300 ease-in-out" />
      )}

      <div className="inline-flex min-h-[3.375rem] w-full flex-1 items-center justify-start gap-1 border-b border-secondary bg-white px-4 py-2.5">
        <div className="flex h-5 shrink grow basis-0 items-center justify-start gap-[87px]">
          <div className="font-inter text-base font-normal leading-tight text-primary">
            {label}
          </div>
        </div>
      </div>
    </button>
  );
};

export const SubNavigationTitlebar = ({ title }: { title: string }) => {
  return (
    <div className="font-inter text-lg font-medium text-black">{title}</div>
  );
};

export const Titlebar = ({ title }: { title: string }) => {
  return (
    <button className="flex items-center gap-5 px-5 py-3">
      <MoveLeft className="hidden size-8 text-primary xl:block" />
      <div className="font-inter text-lg font-semibold text-[#021526]">
        {title}
      </div>
    </button>
  );
};