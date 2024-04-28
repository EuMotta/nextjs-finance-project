'use client';
import React, { useEffect, useState } from 'react';

import { json2xml } from 'xml-js';

import currencyConverter from '@/utils/Conversions/currencyConverter';
import dateConverter from '@/utils/Conversions/dateConverter';
import { belowMinimumStock, isInStock, media } from '@/utils/Counts';

import Container from '../Container';
import Section from '../Section';

const Test = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    setDate(dateConverter({ date: currentDate, type: 'date_time' }));
  }, []);
  const minimal = belowMinimumStock(3, 3);
  console.log('estoque minimo: ', minimal);
  const stock = isInStock(0);
  console.log('esta em estoque? : ', stock);
  const mediav = media(4, 3);
  console.log('Media : ', mediav);

  const currency = currencyConverter(2);

  const [xmlString, setXmlString] = useState('');

  const convertJsonToXml = () => {
    const json = {
      person: {
        name: 'John',
        age: 30,
        city: 'New York',
      },
    };
    const jsonString = JSON.stringify(json);
    const xml = json2xml(jsonString, {
      compact: true,
      ignoreComment: true,
      spaces: 2,
    });
    setXmlString(xml);
  };

  return (
    <Section>
      <Container>
        <p>Data: {date}</p>
        <p>Moeda: {currency}</p>
        <div>
          <h1>JSON to XML Converter</h1>
          <button onClick={convertJsonToXml}>Convert to XML</button>
          {xmlString && (
            <div>
              <h2>XML:</h2>
              <pre>{xmlString}</pre>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Test;
