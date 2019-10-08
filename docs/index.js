//requiring path and fs modules
const path = require('path');
const fs = require('fs');

// https://stackoverflow.com/a/40896897
function flatten(lists) {
  return lists.reduce((a, b) => a.concat(b), []);
}

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath)
    .map(file => path.join(srcpath, file))
    .filter(path => fs.statSync(path).isDirectory());
}

function getDirectoriesRecursive(srcpath) {
  return [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))];
}



var folders = ['生活疑难','信仰探索','思麦与我']

folders.forEach(function(folder){

	var dir = '/'+folder+'/'
	//joining path of directory 
	const p1Path = path.join(__dirname, dir);

	const allfolders = getDirectoriesRecursive(p1Path)
	//console.log(allfolders);

	allfolders.forEach(function(directoryPath){
		var lastFolderName = directoryPath.replace(p1Path,'');
		if(lastFolderName=='') lastFolderName = folder
		//passsing directoryPath and callback function
		fs.readdir(directoryPath, function (err, files) {
		    //handling error
		    if (err) {
		        return console.log('Unable to scan directory: ' + err);
		    } 
		    //listing all files using forEach
		    var lists = '';
		    files.forEach(function (file) {
		        // Do whatever you want to do with the file
		        if(file != 'README.md' && file != 'old.md'){
		        	var list = ''
		        	if(file.endsWith('.md')){
		        		list = '- [' + file.substr(0,file.length-3) + '](./' + file + ')\n'	
		        	}else{
		        		list = '- [' + file + '/]('+ dir + file + ')\n'
		        	}
		        	lists += list
		        }
		    });
		    var contents = '# '+ lastFolderName + '\n\n' + lists
		    
		    
		    //再加上old的items
		    var oldfilename = directoryPath+'/old.md'
		    var content = '';
		    try {
			  if (fs.existsSync(oldfilename)) {
			    //file exists
			    content = fs.readFileSync(oldfilename, 'utf8');
		    	contents += '\n <hr/> \n\n' + content
			  }else{
			  	console.log('no '+oldfilename);
			  }
			} catch(err) {
			  console.error(err)
			}

		    var index = directoryPath+'/README.md'
		    console.log(index + ' indexed!');
		    fs.writeFile(index, contents, (err) => {
			  if (err) throw err;
			  console.log(index + ' indexed!');
			});
		});
	})


})