// Dark/Light Mode - Adapted from w3schools, n.d. 

// Local Storage checks if selected theme is dark
if (localStorage.getItem("theme") === "dark") {
    // Apply dark-mode class css if selected theme is dark
    document.body.classList.add("dark-mode");
}

// Dark/Light Mode Toggle Function
function myFunction() {
   var element = document.body;
   // Apply dark-mode class css
   element.classList.toggle("dark-mode");
    // Saves selected theme in Local Storage
   localStorage.setItem("theme", element.classList.contains("dark-mode") ? "dark" : "light");
}

// End of Adapted Code


// Local Dish Description Pop Up Window - Adapted from GeeksforGeeks, 2024

// Function to display dish pop-up window
function foodPopUp(dish) {
    // Apply overlay
    document.getElementById("overlay").style.display = "block";
    // Display pop-up window of selected dish
    document.getElementById("popup-" + dish).style.display = "block";
}

// Function to close pop-up window 
function closeFn(dish) {
    // Hide overlay
    document.getElementById("overlay").style.display = "none";
    // Hide pop-up window
    document.getElementById("popup-" + dish).style.display = "none";
}

// End of Adapted Code


// Interactive Checklist - Adapted from Interactive Checklist Template, n.d. 
// Wait for HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select checklist container
            const checklistContainer = document.querySelector('.travel-checklist');
            // Stop running if no checklist container
            if (!checklistContainer) return;
        
            // Get checkbox elements
            const checkboxes = checklistContainer.querySelectorAll('.checklist-item-checkbox');
            // Get progress bar fill elements
            const progressBarFill = checklistContainer.querySelector('#progress-bar-fill');
            // Get progress text elements
            const progressText = checklistContainer.querySelector('#progress-text');
            // Count total tasks in checklist
            const totalTasks = checkboxes.length;

            // Update progress bar and percentage
            const updateProgress = () => {
                // Count checkboxes checked
                const checkedTasks = checklistContainer.querySelectorAll('.checklist-item-checkbox:checked').length;
                // Calculate completion percentage
                const percentage = totalTasks > 0 ? (checkedTasks / totalTasks) * 100 : 0;
                
                // Adjust width of progress bar fill based on completion percentage
                progressBarFill.style.width = `${percentage}%`;
                // Round off percentage to whole number
                progressText.textContent = `${Math.round(percentage)}%`;
            };

            // Checks each checkbox
            checkboxes.forEach(checkbox => {
                // Listen checked and unchecked checkbox
                checkbox.addEventListener('change', (e) => {
                    // Find parent checklist item
                    const listItem = e.target.closest('.checklist-item');
                    // If checkbox is checked
                    if (e.target.checked) {
                        // Apply completed class css 
                        listItem.classList.add('completed');
                        // Remove completed class css if checkbox unchecked
                    } else {
                        listItem.classList.remove('completed');
                    }
                    // Update progess bar and percentage
                    updateProgress();
                });
            });

            // Initial call to set progress on page load
            updateProgress();
        });

        // End of Adapted Code