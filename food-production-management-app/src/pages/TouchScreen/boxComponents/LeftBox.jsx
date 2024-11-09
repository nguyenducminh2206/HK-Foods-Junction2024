import NotiForm from "../NotiForm"
import TitleBox from "./TitleBox"

const LeftBox = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <TitleBox />
        <NotiForm />
      </div>
    </>
  )
}

export default LeftBox
