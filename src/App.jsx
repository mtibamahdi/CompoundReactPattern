import Counter from "./Counter";

function App() {
  return (
    <>
      <div>
        <h1>React Compound Component Pattern</h1>
        <Counter>
          <Counter.Increase icon='+' />
          <Counter.Decrease icon='-' />
          <Counter.Label>My Super Flexible Counter</Counter.Label>
          <Counter.Count />
        </Counter>
      </div>
      <div>
        <Counter>
          <Counter.Increase icon='+' />
          <Counter.Decrease icon='-' />
          <Counter.Label>My Super Flexible Counter</Counter.Label>
          <Counter.Count />
        </Counter>
      </div>
      <div>
        <Counter>
          <Counter.Increase icon='+' />
          <Counter.Decrease icon='-' />
          <Counter.Label>My Super Flexible Counter</Counter.Label>
          <Counter.Count />
        </Counter>
      </div>
      <div>
        <Counter>
          <Counter.Increase icon='+' />
          <Counter.Decrease icon='-' />
          <Counter.Label>My Super Flexible Counter</Counter.Label>
          <Counter.Count />
        </Counter>
      </div>
      <div>
        <Counter>
          <Counter.Increase icon='+' />
          <Counter.Decrease icon='-' />
          <Counter.Label>My Super Flexible Counter</Counter.Label>
          <Counter.Count />
        </Counter>
      </div>
    </>
  );
}

export default App;
