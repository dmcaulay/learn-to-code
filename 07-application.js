var name = process.argv[2] + ' ' + process.argv[3];

console.log('Welcome to your first application,', name);

if (name.length > 10) {
  console.log(name, 'is a long name!');
} else {
  console.log(name, 'is a short name!');
}
