# tb-bot-test

TB-bot-test is a minimal library for making simple, fast-responding trollbox bots for windows 93.

Note that its still in construction.

## Installation

soon

## Usage

First of all, require() the module into your project.
```js
tb = require("Soon, this isnt the package name btw")
```
Connecting your bot
```js
tb.connect("Name","Color", "Prefix")
```

Unlike the original, you dont need to put everything inside a function

setcommand - to make a message the bot can respond to
```js
tb.setcommand("ah",() => tb.socket.send("AH!"))
//When a user says "a" with the prefix, the bot will send back "AH!"
//Have a look through the data variable for info on the command that was sent.
```
the "data" json passed contains:
```json
{
  date: 1745683080, 
  nick: 'Miweoro',
  color: 'red',
  style: '',
  home: '72dc437f02e5988aa1bf700adac9a884198f24c46a0fdfabf9b345165ddd6ca6',
  msg: 'omg'
}
The "date" is when you messaged in epoch time
The "nick" is the name of the user
The "color" is the html color of the user
The "style"... idk
The "home" is a string that can be used to identify the client as it never changes
The "msg" is the message that was sent that triggered the command, useful for more advanced commands

```

onmessage - Fires a function when a message is sent, complex but useful in some cases but its kinda of spammy.
```js
tb.onmessage(function(data) {
  console.log(data)
  //The "data" is sometimes different to the data on setcommand.
  //Log it in the console and inspect it so you know whats in it
  //Im lazy to put it here
})
```

onuserjoined - Fire a function when a user joins (WARNING: can be used to spam)
```js
tb.onuserjoined(function(data) {
  console.log(data)
})
```

onuserleft - Fire a function when a user leaves (WARNING: can be used to spam)
```js
tb.onuserleft(function(data) {
  console.log(data)
})
```
updatecolor - Updates the color of the bot
```js
tb.updatecolor("yellow")
```

updatename - Updates the name of the bot
```js
tb.updatename("Mebot (=)")
```
updatewhole - Updates both the color and the name of the bot
```js
tb.updatewhole("Banana (b!)", "yellow")
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## My bot
Feel free to check out my bot,(even though it wasn't made with this package), Miwecoin!

On trollbox there should be a bot called "MiweCoin [mc!]" (sometimes)

Say mc!help for a list of commands!
