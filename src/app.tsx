import { DndContext, DragEndEvent } from "@dnd-kit/core";
import Draggable from "./draggable";
import { restrictToParentTop } from "./modifiers/restrictToParentTop";
import { useState } from "react";

function App() {
  const [item, setItem] = useState({
    top: 0,
    left: 0,
  });

  const onDragEvent = (event: DragEndEvent) => {
    const { delta } = event;

    setItem({
      top: item.top + delta.y,
      left: item.left + delta.x,
    });
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#010101",
      }}
    >
      <div
        style={{
          background: "#121314",
          width: 500,
          height: 500,
          position: "relative",
          border: "1px solid #2D2E2F",
        }}
      >
        <DndContext modifiers={[restrictToParentTop]} onDragEnd={onDragEvent}>
          <Draggable
            style={{
              top: item.top,
              left: item.left,
              height: 120,
              width: 120,
              background: "#222327",
              border: "1px solid #fff",
              color: "#fff",
              fontFamily: "monospace",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>Move</div>
          </Draggable>
        </DndContext>
      </div>
    </div>
  );
}

export default App;
