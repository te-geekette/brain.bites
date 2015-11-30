// Content Tests
if ( MochaWeb != null ) {
	MochaWeb.testOnly(function() {

		describe('Content Create', function(){
			before(function(done){
				// create course!
			});
			it ('creates a content item', function(done){
				done();
			});

			after(function(){
				// delete course
				// delete content
			});
		});

		describe('Update course duration and progress', function(){
			before(function(done){
				// create course! 
			});

			beforeEach(function(done){
				// create content
			});

			afterEach(function(done){
				// delete content
			});

			after(function(done){
				// delete course
			});

			describe('add a content item with duration > 0 to the course ', function(){
				it ('updates the course duration', function(){});
				it ('updates the course progress', function(){});
			});

			describe('add a content item without duration to the course ', function(){
				it ('updates the course duration', function(){});
				it ('updates the course progress', function(){});
			});

			describe('a content item is checked', function(){
				it ('updates the course progress', function(){});
			});

			describe('a content item is un-checked', function(){
				it ('updates the course progress', function(){});
			});

			describe('delete a content item that is checked', function(){
				it ('updates the course duration', function(){});
				it ('updates the course progress', function(){});
				it ('deletes the content item', function(){});
			});

			describe('delete a content item that is un-checked', function(){
				it ('updates the course duration', function(){});
				it ('updates the course progress', function(){});
				it ('deletes the content item', function(){});
			});

			describe('delete the last content item', function(){
				it ('updates the course duration', function(){});
				it ('updates the course progress', function(){});
				it ('deletes the content item', function(){});
			});
		});
	});
}



// Case 1: 
// If no content is defined, the course progress should show 0%

// Case 2: Add content
// If user adds a content item with a duration, the course progress should be re-calculated
// Example - 
// Total course duration = 100; Current course progress: 50%
// New content duration = 10; >> New course progress: 45% (i.e. 50/110)

// Case 3*: Add content without duration
// If user adds a content item without a duration, the course progress should not be updated
// Example - 
// Total course duration = 100; Current course progress: 50%
// New content duration = 0; >> New course progress: 50%

// Case 4: Toggle content "checked"
// If user checks off a content item, the progress should be increased
// Example - 
// Total course duration = 100; Current course progress: 50%
// Checked content duration = 10; >> New course progress: 60%

// Case 5: Toggle content "un-checked"
// If user marks a content item as "un-checked", the progress should be decreased
// Example - 
// Total course duration = 100; Current course progress: 50%
// Checked content duration = 10; >> New course progress: 40%

// Case 6: Delete "checked" content 
// If user deletes a content item marked as "checked", the progress should be re-calculated
// Example - 
// Total course duration = 100; Current course progress: 50%
// Deleted checked content duration = 10; >> New course progress: 44%

// Case 7: Delete "unchecked" content
// If user deletes an unchecked content item , the progress should be re-calculated
// Example - 
// Total course duration = 100; Current course progress: 50%
// Deleted content duration = 10; >> New course progress: 55%

// Case 8: Delete last content item 
// If user deletes the last content item, the progress should show 0%

