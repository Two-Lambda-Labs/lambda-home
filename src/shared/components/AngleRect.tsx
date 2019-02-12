import React from 'react';

interface IAngleRectProps {
  left?: boolean;
  id: string;
}

const AngleRect: React.FunctionComponent<IAngleRectProps> = ({left,id}) => (
  <div
    data-istop="[] - [mk-shape-divider--stick-bottom]"
    id="mk-shape-divider-9"
    className="mk-shape-divider mk-shape-divider--stick diagonal-bottom-style small-size  mk-shape-divider--stick-bottom "
  >
    <div className="shape__container">
      <div className="shape">
        <svg width="100%" height="70px">
          <defs>
            <pattern
              id={`shapeDividerPattern-${id}`}
              preserveAspectRatio="none"
              patternUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100%"
              height="700px"
              viewBox="0 0 100 700"
            >
              <polygon fill="rgb(42,42,42)" points={left?"100,70 100,0 0,70 ":"0,0 0,70 100,0"} />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="70px" fill={`url(#shapeDividerPattern-${id})`} />
        </svg>
      </div>
    </div>
  </div>
);

AngleRect.defaultProps = {
    left:false
};

export default AngleRect;