let counter = 10;

const countdown = () => {
    counter--;
    console.log(counter);
    renderView();
};

const renderView = () => {
    var template = (
        <div>
            <h1>Countdown</h1>
            <p>Counter: {counter}</p>
            <button onClick={countdown}>Countdown!</button>
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderView();
