const getWidth = (domNode) => Math.round(domNode.offsetWidth);

const getThumbGap = (windowNode, thumbNode) => {
  const thumbUnits = getThumbUnitsCap(windowNode, thumbNode);
  const windowWidth = getWidth(windowNode);
  const thumbWidth = getWidth(thumbNode);
  const totalGap = Math.round(windowWidth - thumbUnits * thumbWidth);
  return Math.round(totalGap / (thumbUnits - 1));
};

export const getThumbUnitsCap = (windowNode, thumbNode) =>
  Math.floor(getWidth(windowNode) / getWidth(thumbNode));

export const getTotalThumbs = (containerNode) => containerNode.children.length;

export const getSlideUnit = (windowNode, thumbNode) => {
  const singleGap = getThumbGap(windowNode, thumbNode);
  return singleGap + getWidth(thumbNode);
};

export const calcSlideWidth = (slideNode, windowNode) => {
  const thumbNode = slideNode.children[0];
  const thumbWidth = Math.round(thumbNode.offsetWidth);
  const totalNoThumbs = slideNode.children.length;
  const thumbGap = getThumbGap(windowNode, thumbNode);
  return Math.round(
    totalNoThumbs * thumbWidth + (totalNoThumbs - 1) * thumbGap
  );
};
