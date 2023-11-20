

const downLoadJason = function (list) {
  const json = JSON.stringify(list);
  console.log(typeof json);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "todo-list.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const Button = function (props) {
  let file;

  function readFile() {
    const reader = new FileReader();
    try {
      reader.onload = () => {
        const newList = JSON.parse(reader.result);
        console.log(newList);
        // setting newList to our list of todos
        props.setList(newList);
      };
      reader.readAsText(file);
    } catch {
      console.error("hello bhai error hai 31 line pr");
    }
  }

  function handleChange(event) {
    file = event.target.files[0];
    console.log(event.target.files[0]);
    console.log(file);
    if (file === undefined || file === null) return;
    readFile();
  }

  return (
    <>
      <div className="JsonButtons">
        <button
          className="JsonButton one"
          onClick={() => downLoadJason(props.list)}>
          Download JSON
        </button>
        <label className="JsonButton two" htmlFor="uploadJson">
          Add JSON{" "}
        </label>
        <input
          type="file"
          className="inputJson"
          id="uploadJson"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Button;
