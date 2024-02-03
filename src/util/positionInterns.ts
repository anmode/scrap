type Position = "absolute";

interface PositionStyle {
  position: Position;
  top: string;
  left: string;
}

export const calculatePositionStyle = (index: number): PositionStyle => {
  const positionConfig = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
  ];

  let positionStyle: PositionStyle;

  if (index < 4) {
    positionStyle = {
      position: "absolute",
      top: `${11 + 10 * positionConfig[index % 4][0]}%`,
      left: `${44 + 6.25 * positionConfig[index % 4][1]}%`
    };
  } else if (index < 8) {
    positionStyle = {
      position: "absolute",
      top: `${60 + 10 * positionConfig[index % 4][0]}%`,
      left: `${20 + 6.25 * positionConfig[index % 4][1]}%`
    };
  } else {
    positionStyle = {
      position: "absolute",
      top: `${60 + 10 * positionConfig[index % 4][0]}%`,
      left: `${68 + 6.25 * positionConfig[index % 4][1]}%`
    };
  }

  return positionStyle;
};

export default calculatePositionStyle;
