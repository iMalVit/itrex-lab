import React from 'react';
import { ResolutionRowProps } from './Resolutions.types';
import { ResolutionsTableCell, ResolutionsTableRow, SettingsButton } from '../../ResolutionsForPatient.style';

const ResolutionRow: React.FC<ResolutionRowProps> = ({
  firstName,
  lastName,
  resolution,
  visitDate,
  nextAppointmentDate,
}) => (

  <ResolutionsTableRow>
    <ResolutionsTableCell>{firstName}</ResolutionsTableCell>
    <ResolutionsTableCell>{lastName}</ResolutionsTableCell>
    <ResolutionsTableCell>{resolution}</ResolutionsTableCell>
    <ResolutionsTableCell>{visitDate}</ResolutionsTableCell>
    <ResolutionsTableCell>{nextAppointmentDate}</ResolutionsTableCell>
    <ResolutionsTableCell><SettingsButton /></ResolutionsTableCell>
  </ResolutionsTableRow>
);

export default ResolutionRow;
