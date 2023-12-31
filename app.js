const yargs = require("yargs");
const command = process.argv[2]
//console.log(process.argv);
//customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('Title: ' + argv.title+"\nBody: "+argv.body)
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe:'Remove an existing note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        console.log('Removing the note!')
    }
})
yargs.command({
    command: 'read',
    describe:'Read an existing note',
    handler: function(){
        console.log('Reading the note!')
    }
})
yargs.command({
    command: 'list',
    describe:'Listing all existing notes',
    handler: function(){
        console.log('Notes list is displayed here!')
    }
})
yargs.parse()
//console.log(yargs.argv);
