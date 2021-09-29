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

export const convertedData = (myData, myMeasure) => myData.map((data) => {
  const newData = {};
  newData.value = data.value;
  newData.user_id = data.user_id;
  newData.measure_id = data.measure_id;
  newData.created_at = readableDate(data.created_at);
  const title = myMeasure
    .filter((measure) => (data.measure_id === measure.id ? measure.title : ''));
  newData.title = title[0].title;
  return (newData);
});
