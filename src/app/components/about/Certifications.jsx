import React from 'react';
import { Card } from './Card';

const CERTIFICATIONS = [
  {
    id: 1,
    title: 'Supervised Learning with scikit-learn',
    issuingOrganization: 'DataCamp',
    issueDate: 'May 2020',
    credentialId: '13565737',
  },
];

const Certifications = () => {
  return CERTIFICATIONS.map(item => {
    return (
      <Card key={item.id}>
        <ul>
          <li className='text-2xl mb-2 sm:text-xl font-bold'>{item.title}</li>
          <li>
            <span className='font-bold'>Organization: </span>{' '}
            {item.issuingOrganization}
          </li>
          <li>
            <span className='font-bold'>Issue Date: </span> {item.issueDate}
          </li>
          <li>
            <span className='font-bold'>Credential ID: </span>{' '}
            {item.credentialId}
          </li>
        </ul>
      </Card>
    );
  });
};
