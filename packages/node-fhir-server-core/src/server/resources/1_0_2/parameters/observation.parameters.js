/**
 * @name exports
 * @static
 * @summary Arguments for the observation query
 */
module.exports = {
  category: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.category',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-category',
    description: 'The classification of the type of observation',
  },
  code: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-code',
    description: 'The code of the observation type',
  },
  'component-code': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.code',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-code',
    description: 'The component code of the observation type',
  },
  'component-data-absent-reason': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.dataAbsentReason',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-data-absent-reason',
    description:
      'The reason why the expected value in the element Observation.component.value[x] is missing.',
  },
  'component-value-concept': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.component.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-concept',
    description: 'The value of the component observation, if the value is a CodeableConcept',
  },
  'component-value-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Observation.component.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-quantity',
    description:
      'The value of the component observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
  },
  'component-value-string': {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Observation.component.valueString',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-component-value-string',
    description:
      'The value of the component observation, if the value is a string, and also searches in CodeableConcept.text',
  },
  'data-absent-reason': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.dataAbsentReason',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-data-absent-reason',
    description:
      'The reason why the expected value in the element Observation.value[x] is missing.',
  },
  date: {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Observation.effectiveDateTime',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-date',
    description:
      'Obtained date/time. If the obtained element is a period, a date that falls in the period',
  },
  device: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.device',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-device',
    description: 'The Device that generated the observation data.',
  },
  encounter: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.encounter',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-encounter',
    description: 'Healthcare event related to the observation',
  },
  identifier: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.identifier',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-identifier',
    description: 'The unique id for a particular observation',
  },
  patient: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-patient',
    description: 'The subject that the observation is about (if patient)',
  },
  performer: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.performer',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-performer',
    description: 'Who performed the observation',
  },
  related: {
    type: 'composite',
    fhirtype: 'composite',
    xpath: '',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related',
    description: 'Related Observations - search on related-type and related-target together',
  },
  'related-target': {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.related.target',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-target',
    description: 'Resource that is related to this one',
  },
  'related-type': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.related.type',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-related-type',
    description: 'has-member | derived-from | sequel-to | replaces | qualified-by | interfered-by',
  },
  specimen: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.specimen',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-specimen',
    description: 'Specimen used for this observation',
  },
  status: {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.status',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-status',
    description: 'The status of the observation',
  },
  subject: {
    type: 'reference',
    fhirtype: 'reference',
    xpath: 'Observation.subject',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-subject',
    description: 'The subject that the observation is about',
  },
  'value-concept': {
    type: 'token',
    fhirtype: 'token',
    xpath: 'Observation.valueCodeableConcept',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-concept',
    description: 'The value of the observation, if the value is a CodeableConcept',
  },
  'value-date': {
    type: 'date',
    fhirtype: 'date',
    xpath: 'Observation.valueDateTime',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-date',
    description: 'The value of the observation, if the value is a date or period of time',
  },
  'value-quantity': {
    type: 'quantity',
    fhirtype: 'quantity',
    xpath: 'Observation.valueQuantity',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-quantity',
    description:
      'The value of the observation, if the value is a Quantity, or a SampledData (just search on the bounds of the values in sampled data)',
  },
  'value-string': {
    type: 'string',
    fhirtype: 'string',
    xpath: 'Observation.valueString',
    definition: 'http://hl7.org/fhir/SearchParameter/Observation-value-string',
    description:
      'The value of the observation, if the value is a string, and also searches in CodeableConcept.text',
  },
};
