const mkdirp = require('mkdirp');
const fs = require('fs');

mkdirp('./build', (err) => {
  if (err) {
    console.error(err);
    throw (error)
  }

  let content = fs.readFileSync('./web/index.html').toString();
  content = content.replace('Anonymous', process.env.USERNAME || 'Nobody')

  fs.writeFileSync('./build/index.html', content);
})


