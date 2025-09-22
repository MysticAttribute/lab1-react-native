import {objects} from "@data/objects";


export const getResult = (craftObjects ) => {
  return objects.find((recipe) =>
    recipe.type === "crafted" &&
    recipe.ingredients?.every(
      (item, index) => (craftObjects[index]?.id ?? null) === (item ?? null)
    )
  ) ?? null;
};