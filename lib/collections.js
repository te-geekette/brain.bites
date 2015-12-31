Courses = new Mongo.Collection('courses');
ContentItems = new Mongo.Collection('contentItems');


// Storing profile pictures 

// var createSquareThumb = function(fileObj, readStream, writeStream) {
//   var size = '96';
//   gm(readStream).autoOrient().resize(size, size + '^').gravity('Center').extent(size, size).stream('PNG').pipe(writeStream);
// };

var profileStore = new FS.Store.GridFS('profilepics'); // , {transformWrite: createSquareThumb}

ProfilePics = new FS.Collection('profilepics', {
	stores: [profileStore]
}); 

ProfilePics.deny({
 insert: function(){
 return false;
 },
 update: function(){
 return false;
 },
 remove: function(){
 return false;
 },
 download: function(){
 return false;
 }
 });

ProfilePics.allow({
 insert: function(){
 return true;
 },
 update: function(){
 return true;
 },
 remove: function(){
 return true;
 },
 download: function(){
 return true;
 }
});