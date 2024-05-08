import SimpleComponent from "./components/SimpleComponent";
import TextUpdaterNode from "./components/TextUpdaterNode";
export default [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 25 },
  },

  {
    id: "2",
    data: {
      label: (
        <div>
          {" "}
          <SimpleComponent />
        </div>
      ),
    },
    position: { x: 100, y: 125 },
  },
  {
    id: "3",
    type: "output",
    data: {
      label: (
        <div>
          {" "}
          <TextUpdaterNode />
        </div>
      ),
    },
    position: { x: 250, y: 250 },
  },
];
