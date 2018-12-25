import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Section } from '../assets/section_divider.svg';

const DividerStyles = (type, accentColor, baseColor) => {
  let DividerType;
  switch (type) {
    case 'section':
      DividerType = Section;
      break;
    default:
  }

  return styled(DividerType)`
    width: 100%;
    height: 100%;

    path.accentColor {
      fill: ${accentColor ? `${accentColor}` : '#841515'};
    }

    path.baseColor {
      fill: ${baseColor ? `${baseColor}` : 'black'};
    }
  `;
};

const SectionDividerStyles = styled.div`
  width: 200px;
  height: 50px;
  margin-bottom: 1.5rem;

  ${props =>
    props.center
      ? css`
          margin: 0 auto;
        `
      : ''}
`;

const SectionDivider = props => {
  const { type, accentColor, baseColor, center } = props;
  const Divider = DividerStyles(type, accentColor, baseColor);

  return (
    <SectionDividerStyles accentColor={accentColor} baseColor={baseColor} center={center}>
      <Divider />
    </SectionDividerStyles>
  );
};

export default SectionDivider;
