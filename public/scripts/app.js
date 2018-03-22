'use strict';

var players = [{
    name: 'Sidney Crosby',
    gender: 'M',
    comment: 'Just in it for fun'
}, {
    name: 'Cindy Crosby',
    gender: 'F',
    comment: 'I want to win!!!'
}];

// action when a form is submitted. In this case,
// we add the player
var formDidSubmit = function formDidSubmit(e) {
    e.preventDefault();

    var thePlayer = {
        name: e.target.elements.playerName.value,
        gender: e.target.elements.playerGender.value,
        comment: e.target.elements.playerComment.value
    };

    players.push(thePlayer);

    e.target.elements.playerName.value = '';
    e.target.elements.playerGender.value = '';
    e.target.elements.playerComment.value = '';

    renderView();
};

// clear the entire player list
var clearAllPlayers = function clearAllPlayers() {
    players = [];
    renderView();
};

// render the view
// NOTE: this is a temporary solution! When we work with
//       React Components we will have a more elegant way
//       to do this.
var renderView = function renderView() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Intro to React'
        ),
        React.createElement(
            'p',
            null,
            'Hey there Rob'
        ),
        React.createElement(
            'button',
            { onClick: clearAllPlayers },
            'Clear'
        ),
        React.createElement(
            'ul',
            null,
            players.map(function (player) {
                return React.createElement(
                    'li',
                    { key: player.name },
                    player.name,
                    ' - ',
                    player.gender,
                    ' (',
                    player.comment,
                    ')'
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: formDidSubmit },
            React.createElement('input', { type: 'text', name: 'playerName' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'text', name: 'playerGender' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'text', name: 'playerComment' }),
            React.createElement('br', null),
            React.createElement(
                'button',
                { type: 'submit' },
                'Submit'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

// call renderView() to initially render the screen.
renderView();

// let counter = 10;

// const countdown = () => {
//     counter--;
//     console.log(counter);
//     renderView();
// };

// const renderView = () => {
//     var template = (
//         <div>
//             <h1>Countdown</h1>
//             <p>Counter: {counter}</p>
//             <button onClick={countdown}>Countdown!</button>
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderView();
