import { Col } from "react-materialize";
import { useState, useEffect } from "react";
import Image from "../image/image";

const Grid = (props) => {
  const { paths } = props;
  const [grid, setGrid] = useState();

  useEffect(() => {
    let colGrid = [[], [], []];
    for (let i = 0; i < paths.length; i++) {
      colGrid[i % 3].push(paths[i]);
    }
    setGrid(colGrid);
  }, [paths]);

  if (grid) {
    // grid by columns
    return grid.map((col, cInd) => (
      <Col l={4} key={cInd}>
        {col.map((p, pInd) => (
          <Image path={p} key={pInd} boxed></Image>
        ))}
      </Col>
    ));
  }
};

export default Grid;
