import React, { useRef } from 'react';

function App() {

  const rows = useRef();

  const changeRowColor = () => {
    // select the elements
    // console.log(rows.current.querySelectorAll('tbody tr'));
    const rowsRef = rows.current.querySelectorAll('tbody tr');
    rowsRef.forEach((row, index) => {
      if (index % 2 == 0) {
        row.style.backgroundColor = 'lightgrey';
      }
    })
  }

  return (
    <div>
      <table ref={rows}>
        <thead>
          <tr>
            <th>SNO</th>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Deva</td>
            <td>25</td>
          </tr>

          <tr>
            <td>2</td>
            <td>mbneqw</td>
            <td>89</td>
          </tr>

          <tr>
            <td>3</td>
            <td>asdgdf</td>
            <td>23</td>
          </tr>

          <tr>
            <td>4</td>
            <td>hgjhjkrty</td>
            <td>768</td>
          </tr>

          <tr>
            <td>5</td>
            <td>uiytvnb</td>
            <td>354</td>
          </tr>

          <tr>
            <td>6</td>
            <td>ghfvxc</td>
            <td>645</td>
          </tr>
        </tbody>
      </table>

      <button onClick={changeRowColor}>Change Row Color</button>
    </div>
  )
}

export default App;