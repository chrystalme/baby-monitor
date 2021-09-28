import { groupBy, union } from 'lodash';

export const mergeMeasureWithMeasurement = (measures, measurements) => {
  const mergedObject = union(measurements, measures);
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

export const groupMeasurementByMeasureId = (measurements, id) => {
  const groupedMeasurements = groupBy(measurements, id);
  return (
    groupedMeasurements
  );
};

export const getMeasurements = (measures, measurements) => {
  for (let i = 0; i < measurements.length; i += 1) {
    const hashedMeasures = {};
    const hashedMeasurements = {};

    measures.forEach((measure) => {
      hashedMeasures[measure.id] = { ...measure };
    });

    measurements.forEach((measurement) => {
      hashedMeasurements[measurement.measure_id] = { ...measurement };
    });

    const measuresIds = Object.keys(hashedMeasures);

    return measuresIds.map((id) => ({
      id,
      title: hashedMeasures[id].title,
      image: hashedMeasures[id].image,
      unit: hashedMeasures[id].unit,
      value: hashedMeasurements[id].value,
    }));
  }

  return [];
};
