export const schema = {
  models: {
    VaccineDataPoint: {
      name: 'VaccineDataPoint',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: []
        },
        date: {
          name: 'date',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: []
        },
        vaccinations: {
          name: 'vaccinations',
          isArray: false,
          type: 'Int',
          isRequired: true,
          attributes: []
        }
      },
      syncable: true,
      pluralName: 'VaccineDataPoints',
      attributes: [
        {
          type: 'model',
          properties: {}
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: [
                  'create',
                  'update',
                  'delete',
                  'read'
                ]
              }
            ]
          }
        }
      ]
    }
  },
  enums: {},
  nonModels: {},
  version: '9866bde687f1d30b17670176f65035be'
}
