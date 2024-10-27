"sue client"
import React from "react";
import ModelsSection from "./model";
import path from "path";

const ThreeDmodelsData = [
  {
    id: 1,
    path: "/cofeecup.glb",
    modelimg: "/cofeecup.glb",
  },
];
const ModelContainer = () => {
  return (
    <section className="place-self-stretch w-[500px] h-[500px]">
        {ThreeDmodelsData.map((model) => (
          <ModelsSection model={model} />
        ))}
    </section>
  );
};

export default ModelContainer;
