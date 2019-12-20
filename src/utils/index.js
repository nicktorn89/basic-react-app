export const createDataForProperties = (object) => new Blob([JSON.stringify(object)], { type: 'application/json' });
