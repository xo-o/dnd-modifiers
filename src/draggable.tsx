import React from "react";
import { useDraggable } from "@dnd-kit/core";

function Draggable(props: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const styleTransform = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  const styles: React.CSSProperties = {
    position: "absolute",
    cursor: "move",
    userSelect: "none",
    ...styleTransform,
    ...props.style,
  };
  return (
    <div ref={setNodeRef} style={styles} {...listeners} {...attributes}>
      {props.children}
    </div>
  );
}

export default Draggable;
