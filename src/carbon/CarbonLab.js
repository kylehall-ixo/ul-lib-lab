import React from 'react';
import { MultiSelect } from 'carbon-components-react';

const items = [
  {
    id: 'item-1',
    text: 'Option 1',
  },
  {
    id: 'item-2',
    text: 'Option 2',
  },
  {
    id: 'item-3',
    text: 'Option 3',
  },
  {
    id: 'item-4',
    text: 'Option 4',
  }
];

const CarbonLab = _ => (
  <div className="container">
    <h1>Carbon UI Library Lab</h1>
    <MultiSelect
      label="MultiSelect Label"
      id="lab-multiselect"
      items={items}
      itemToString={item => item.text}
    />
  </div>
);

export default CarbonLab;
