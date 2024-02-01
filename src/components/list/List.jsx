export default function List({ list }) {
  return (
    <ul>
      {list.length
        ? list.map((card) => {
            return (
              <li>
                <img src="" alt="" />
                <div>
                  <span></span>
                  <span></span>
                </div>
                <span></span>
                <span></span>
                <button></button>
              </li>
            );
          })
        : "Not Found"}
    </ul>
  );
}
