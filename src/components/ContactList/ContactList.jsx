import { ContactItem } from 'components/ContactList/ContactItem';
import React, { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { items, onDelete } = this.props;
    return (
      <>
        <ul>
          {items.map(item => {
            const { id } = item;
            return (
              <ContactItem
                key={id}
                id={item.id}
                name={item.name}
                number={item.number}
                onDelete={onDelete}
              />
            );
          })}
        </ul>
      </>
    );
  }
}
