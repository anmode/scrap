type Position = "absolute";

interface PositionStyle {
  position: Position;
  top: string;
  left: string;
}

const BASE_TOP_SMALL = 18;
const BASE_LEFT_SMALL = 46;
const BASE_TOP_LARGE = 60;
const BASE_LEFT_LARGE = 20;
const BASE_LEFT_LARGE_EXTRA = 68;
const STEP_VERTICAL = 10;
const STEP_HORIZONTAL = 6.25;

export const calculatePositionStyle = (index: number): PositionStyle => {
  const positionConfig = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1]
  ];

  let positionStyle: PositionStyle;

  if (index < 4) {
    positionStyle = {
      position: "absolute",
      top: `${BASE_TOP_SMALL + STEP_VERTICAL * positionConfig[index % 4][0]}%`,
      left: `${BASE_LEFT_SMALL + STEP_HORIZONTAL * positionConfig[index % 4][1]}%`
    };
  } else if (index < 8) {
    positionStyle = {
      position: "absolute",
      top: `${BASE_TOP_LARGE + STEP_VERTICAL * positionConfig[index % 4][0]}%`,
      left: `${BASE_LEFT_LARGE + STEP_HORIZONTAL * positionConfig[index % 4][1]}%`
    };
  } else {
    positionStyle = {
      position: "absolute",
      top: `${BASE_TOP_LARGE + STEP_VERTICAL * positionConfig[index % 4][0]}%`,
      left: `${BASE_LEFT_LARGE_EXTRA + STEP_HORIZONTAL * positionConfig[index % 4][1]}%`
    };
  }

  return positionStyle;
};

export default calculatePositionStyle;
