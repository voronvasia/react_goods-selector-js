import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');

  return (
    <main className="section container">
      {good ? (
        <h1 className="title is-flex is-align-items-center">
          {good} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(goodItem => {
            return (
              <tr
                data-cy="Good"
                className={classNames(
                  goodItem === good ? 'has-background-success-light' : '',
                )}
              >
                <td>
                  {good !== goodItem ? (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setGood(goodItem)}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setGood('')}
                    >
                      -
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {goodItem}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
