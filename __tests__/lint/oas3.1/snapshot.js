// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`E2E lint oas3.1 1`] = `

validating /openapi.yaml...
[1] openapi.yaml:179:5 at #/components/schemas/Problem

Component: "Problem" is never used.

177 | pathItems: {}
178 | schemas:
179 |   Problem:
    |   ^^^^^^^
180 |     id: 'https://tools.ietf.org/rfc/rfc7807.txt'
181 |     $schema: 'http://json-schema.org/draft-06/schema#'

Warning was generated by the no-unused-components rule.


/openapi.yaml: validated in <test>ms

Woohoo! Your API description is valid. 🎉
You have 1 warning.


`;
