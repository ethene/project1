var fs = require('fs');

fs.readFile(__filename, function(err, data) {
    if (err) throw err;
    console.log(data.toString('utf-8'));
});

fs.writeFile('test.file', "data", function(err, data){
    if (err) throw err;

    fs.rename('test.file','test.newfile', function(err) {
        if (err) throw err;
        fs.stat('test.newfile',function(err,stat){
            console.log(stat);
        });
        fs.unlink('test.newfile', function(err)
       {
           if (err) throw err;
       });
    });
}) ;
