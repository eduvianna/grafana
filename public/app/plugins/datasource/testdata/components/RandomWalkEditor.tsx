import React from 'react';
import { InlineField, InlineFieldRow, Input } from '@grafana/ui';

const randomWalkFields = [
  { label: 'Series count', id: 'seriesCount', placeholder: '1', min: 1, step: 1 },
  { label: 'Start value', id: 'startValue', placeholder: 'auto', step: 1 },
  { label: 'Spread', id: 'spread', placeholder: '1', min: 0.5, step: 0.1 },
  { label: 'Noise', id: 'noise', placeholder: '0', min: 0, step: 0.1 },
  { label: 'Min', id: 'min', placeholder: 'none', step: 0.1 },
  { label: 'Max', id: 'max', placeholder: 'none', step: 0.1 },
];

export interface Props {
  onChange: any;
  query: any;
}

export const RandomWalkEditor = ({ onChange, query }: Partial<Props>) => {
  return (
    <InlineFieldRow>
      {randomWalkFields.map(({ label, id, min, step, placeholder }) => {
        return (
          <InlineField label={label} labelWidth={14} key={id}>
            <Input
              width={32}
              type="number"
              id={id}
              min={min}
              step={step}
              value={query?.[id]}
              placeholder={placeholder}
              onChange={onChange}
            />
          </InlineField>
        );
      })}
    </InlineFieldRow>
  );
};