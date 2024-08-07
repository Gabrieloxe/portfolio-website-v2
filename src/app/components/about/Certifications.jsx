import React from 'react';
import { Card } from './Card';

const CERTS = [
  {
    id: 1,
    title: 'Supervised Learning with scikit-learn',
    issuingOrganization: 'DataCamp',
    issueDate: 'May 2020',
    credentialId: '13565737'
  }
];

export const Certifications = () => {
  return CERTS.map((cert) => {
    return (
      <Card key={cert.id}>
        <ul>
          <li className="text-2xl mb-2 sm:text-xl font-bold">{cert.title}</li>
          <li>
            <span className="font-bold">Organization: </span> {cert.issuingOrganization}
          </li>
          <li>
            <span className="font-bold">Issue Date: </span> {cert.issueDate}
          </li>
          <li>
            <span className="font-bold">Credential ID: </span> {cert.credentialId}
          </li>
        </ul>
      </Card>
    );
  });
};
