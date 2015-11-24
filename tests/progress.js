// Progress Bar Tests

// Case 1: 
// If no content is defined, the course progress should show 0%

// Case 2: Add content
// If user adds a content item with a duration, the course progress should be re-calculated
// Example - 
// Total course duration = 100; Current course progress: 50%
// New content duration = 10; >> New course progress: 45%

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

