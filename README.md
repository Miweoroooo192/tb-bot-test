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
  msg: 'omg',
  isBot: false
}
The "date" is when you messaged in epoch time
The "nick" is the name of the user
The "color" is the html color of the user
The "style"... idk
The "home" is a hashed string that has an IP address inside it (dont worry its impossible to dencrypt one and even it did dont worry)
The "msg" is the message that was sent that triggered the command, useful for more advanced commands.
The "isBot" thing just got added recently, its useful to determine bots.

```

I removed the onuserjoined, onuserleft, and onmessage functions beause it will be spammy, however theres one way to do it without changing the source.

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
