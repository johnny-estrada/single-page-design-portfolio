import "./Boxes.css";

function Boxes() {
  return (
    <div className="grid-layout">
      <div className="grid-item-1">
        <img className="box-logo-lg" src="./images/pattern-graphic-design.svg" />
        <h3 className="box-title">Graphic Design</h3>
      </div>

      <div className="grid-item-2">
        <img className="box-logo-sm" src="./images/pattern-ui-ux.svg" />
        <h3 className="box-title">UI/UX</h3>
      </div>

      <div className="grid-item-3">
        <img className="box-logo-sm" src="./images/pattern-apps.svg" />
        <h3 className="box-title">Apps</h3>
      </div>
      <div className="grid-item-4">
        <img className="box-logo-med" src="./images/pattern-illustrations.svg" />
        <h3 className="box-title">Illustrations</h3>
      </div>
      <div className="grid-item-5">
        <img className="box-logo-med" src="./images/pattern-photography.svg" />
        <h3 className="box-title">Photography</h3>
      </div>
      <div className="grid-item-6">
        <img className="box-logo-med" src="./images/pattern-motion-graphics.svg" />
        <h3 className="box-title">Motion Graphics</h3>
      </div>
    </div>
  );
}

export default Boxes;
