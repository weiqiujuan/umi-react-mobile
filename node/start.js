const concurrently = require("concurrently")
const path = require("path");

concurrently([{
    command:"yarn run tailwind-watch",
    cwd:path.resolve(__dirname,"../"),
    name:"tailwind".yellow
},{
    command:"yarn run start",
    cwd:path.resolve(__dirname,"../"),
    name:"umi".blue
}])
