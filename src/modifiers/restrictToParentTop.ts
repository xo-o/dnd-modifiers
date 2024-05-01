import type {Modifier} from '@dnd-kit/core';

export const restrictToParentTop: Modifier = ({
  containerNodeRect,
  draggingNodeRect,
  transform,
}) => {
  if (!draggingNodeRect || !containerNodeRect) {
    return transform;
  }

  const value = {
    ...transform,
  };

  if (draggingNodeRect.top + transform.y <= containerNodeRect.top) {
    value.y = containerNodeRect.top - draggingNodeRect.top;
  }

  return value;
};