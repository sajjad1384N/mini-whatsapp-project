const mongoose = require("mongoose")
const Chat = require("./models/chat.js");
let allChat = [{
        from: "sajjad",
        to: "afan",
        msg: "hii how are you",
        created_at: new Date(),
    },
    {
        from: "afan",
        to: "sajjad",
        msg: "hello",
        created_at: new Date(),
    },
    {
        from: "rashid alam",
        to: "rizwan hasan",
        msg: " where are you just now",
        created_at: new Date(),
    }
]
Chat.insertMany(allChat);
main().then(() => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
})
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}