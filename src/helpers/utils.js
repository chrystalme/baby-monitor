import { mergeWith, groupBy } from 'lodash';

export const mergeMeasureWithMeasurement = (measures, measurements, customizer) => {
  const mergedObject = mergeWith(measurements, measures, customizer);
  return (
    mergedObject
  );
};

export const readableDate = (defDateFormat) => {
  const dateObj = new Date(defDateFormat);
  const newDate = dateObj.toDateString();

  return newDate;
};

export const groupMeasurementByCreatedAt = (measurements, date) => {
  const groupedMeasurements = groupBy(measurements, date);
  return (
    groupedMeasurements
  );
};
