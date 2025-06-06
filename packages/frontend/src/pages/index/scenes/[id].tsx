import {useParams} from "react-router-dom";

const Scenes = () => {
  const sss = useParams();

  console.log(sss['id'])
  return <div>
    Scenes
  </div>
}

export default  Scenes
