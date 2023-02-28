import "./topbar.scss"

export default function topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Nike Spengler</a>
            </div>
            <div className="right">
                <p>Right</p>
            </div>
        </div>
    </div>
  )
}
