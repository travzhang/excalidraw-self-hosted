"use client";
import { Excalidraw } from "@excalidraw/excalidraw";

import "@excalidraw/excalidraw/index.css";

const ExcalidrawWrapper: React.FC = () => {
    return (
        <div style={{height:"90vh"}}>
            <Excalidraw />
        </div>
    );
};
export default ExcalidrawWrapper;