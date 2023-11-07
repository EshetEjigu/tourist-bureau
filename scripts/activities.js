"use strict"

window.onload = function (_event) {
    const categorySelect = document.getElementById("category")
    categorySelect.onchange = populateActivities
    
    const activitySelect = document.getElementById("activity")
    activitySelect.onchange = renderActivityCard
    
    populateCategories(categories, categorySelect)
}



// counter + reduce
function populateCategories (categories, selectElement) {
    let html = ""
    for (let index = 0; index < categories.length; index += 1) {
        const currentCategory = categories[index]
        html += `<option value="${currentCategory}">${currentCategory}</option>`
    }

    selectElement.innerHTML = html
}

// counter + findAll + reduce
function populateActivities (event) {
    const selectedCategory = event.target.value
    console.log(selectedCategory)
    // What do we do with this category selected by the user now that we have it?
    
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index]
        if (activity.category === selectedCategory) {
            html += `<option value="${activity.id}">${activity.name}</option>`
        }
    }
    
    const selectElement = document.getElementById("activity")
    selectElement.innerHTML = html
}
function renderActivityCard (event) {
    const selectedActivityId = event.target.value
    console.log(selectedActivityId)
    let html = ""
    for (let index = 0; index < activities.length; index += 1) {
        const activity = activities[index];
        
        if (activity.id === selectedActivityId) {
            html += `
                <div class="card">
                    <h5 class="card-header">${activity.name}</h5>
                    <div class="card-body">
                        <h5 class="card-title">Where? <em>${activity.location}</em></h5>
                        <p class="card-text">${activity.description}</p>
                        <a href="#" class="btn btn-primary">Buy e-Ticket for \$${activity.price}</a>
                    </div>
                </div>
            `
        }
    }
    const resultDiv = document.getElementById("selected-activity")
    resultDiv.innerHTML = html
}