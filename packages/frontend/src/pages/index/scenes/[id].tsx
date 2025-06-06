import {useParams} from "react-router-dom";
import {Excalidraw} from "@excalidraw/excalidraw";

const Scenes = () => {
  const sss = useParams();

  const d_el = [
    {
      "id": "jy0uCjXW8LbwCq07mQy03",
      "type": "image",
      "x": 375.15000029533144,
      "y": 112.37498664855957,
      "width": 362.4556451612903,
      "height": 249,
      "angle": 0,
      "strokeColor": "transparent",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "frameId": null,
      "index": "a0",
      "roundness": null,
      "seed": 436751602,
      "version": 15,
      "versionNonce": 1819667118,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1749224491671,
      "link": null,
      "locked": false,
      "status": "pending",
      "fileId": "00c331f6a3fe4f2cb289e2ad24d2fbc7fb608661",
      "scale": [
        1,
        1
      ],
      "crop": null
    },
    {
      "id": "su38HqVQA3nRvv41Enn1l",
      "type": "image",
      "x": 529.9990908715033,
      "y": 57.6933160517726,
      "width": 362.4556451612903,
      "height": 249,
      "angle": 0,
      "strokeColor": "transparent",
      "backgroundColor": "transparent",
      "fillStyle": "solid",
      "strokeWidth": 2,
      "strokeStyle": "solid",
      "roughness": 1,
      "opacity": 100,
      "groupIds": [],
      "frameId": null,
      "index": "a1",
      "roundness": null,
      "seed": 791231154,
      "version": 58,
      "versionNonce": 1362466418,
      "isDeleted": false,
      "boundElements": null,
      "updated": 1749224634977,
      "link": null,
      "locked": false,
      "status": "pending",
      "fileId": "00c331f6a3fe4f2cb289e2ad24d2fbc7fb608661",
      "scale": [
        1,
        1
      ],
      "crop": null,
      "initialWidth": 0.11004638671875,
      "initialHeight": 0.07559973381232687
    }
  ]
  const d_files = {
  }

  console.log(sss['id'])
  function onChange(elements,appState,files) {
    console.log(elements,files,'f')
  }
  // files怎么处理？
  // 存储点击保存的时候存files内容
  //
  return <div>
    <h1 style={{ textAlign: "center" }}>Excalidraw Example</h1>
    <div style={{ height: "500px" }}>
      <Excalidraw langCode={'zh-CN'} initialData={{
        files:d_files,
        elements: d_el,
      }} onChange={onChange} />
    </div>
  </div>
}

export default  Scenes
