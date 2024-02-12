import { DesignIconType, ImageTypes } from "types/images";
import { ICONS } from "./images";

export const getImagePath = (image: DesignIconType, type: ImageTypes) => {
  const dict = ICONS;
  const path = `/images/${type}/${dict[image]}`;
  return path;
};
