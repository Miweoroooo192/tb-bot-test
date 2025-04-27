tb = require("../index")


tb.setcommand("test", () => tb.socket.send("test"))
tb.setcommand("help", () => tb.socket.send("commands: \nde!help\nde!test\nde!home\nde!banana"))
tb.setcommand("home", () => tb.socket.send(tb.userhome))
tb.setcommand("banana", ()  => {
    tb.updateprefix("ba!") // doenst work
    tb.updatewhole("Banana [de!]", "yellow") // this works
 })
tb.setcommand("home", () => tb.socket.send(tb.userhome))
tb.connect("test [de!]", "red", "de!")
