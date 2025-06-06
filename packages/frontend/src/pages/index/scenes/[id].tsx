import {useParams} from "react-router-dom";
import {Excalidraw} from "@excalidraw/excalidraw";

const Scenes = () => {
  const sss = useParams();

  console.log(sss['id'])
  return <div>
    <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
    <div style={{ height: "500px" }}>
      <Excalidraw />
    </div>
  </div>
}

export default  Scenes
