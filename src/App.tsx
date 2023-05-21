import { Custom } from "./style/newStyle";
import { Buttons } from "./style/style";
import { btn } from "./style/styleDef";
import { color, typo } from "./style/value_def/ui_values";

function App() {
  return (
    <div className="App">
      <Buttons.Default>기존 방식</Buttons.Default><br /><br />
      <Custom.Button css={btn.default}>새로운 방식</Custom.Button><br />
      <Custom.Span css={typo.HEADING_1 + `color:${color.RED}`}>타이핑</Custom.Span>
    </div>
  );
}

export default App;
