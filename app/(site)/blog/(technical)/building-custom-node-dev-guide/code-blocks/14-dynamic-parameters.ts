{
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  options: [
    {
      name: 'Create Lead',
      value: 'create',
    },
    {
      name: 'Read Lead',
      value: 'read',
    },
    {
      name: 'Update Lead',
      value: 'update',
    },
  ],
  default: 'create',
},
{
  displayName: 'Lead ID',
  name: 'leadId',
  type: 'string',
  default: '',
  displayOptions: {
    show: {
      operation: ['read', 'update'],
    },
  },
  description: 'ID of the lead to read or update',
},
{
  displayName: 'First Name',
  name: 'firstname',
  type: 'string',
  default: '',
  displayOptions: {
    show: {
      operation: ['create', 'update'],
    },
  },
  description: 'First name of the lead',
},
